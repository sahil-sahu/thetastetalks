import styles from "./main.module.css";
import Card from "./card";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';

function People(){
    var entrepreneurs = [
        {"image": "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80"},
        {"image": "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        {"image": "https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    ]

    let slidesNum = 1;

    const size = useWindowSize();

    if (size.width > 1000){
        slidesNum = 3;
    }else if (size.width > 600){
        slidesNum = 2;
    }

    return(
        <Swiper
          spaceBetween={50}
          slidesPerView={slidesNum}
          className={styles.People}
        >
          
          {entrepreneurs.map(obj => {
              return(<SwiperSlide><Card data={obj} /></SwiperSlide>)
          })}
         
        </Swiper>
    )
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
          });
        }
      
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }

export default People;