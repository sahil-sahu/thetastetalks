import { useState, useEffect } from 'react';
import styles from "./main.module.css"
import Card from "./card"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function cardWrapper1(){
    
    var caroJson = [
        {"link" : "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
        {"link" : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
        {"link" : "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"},
        {"link" : "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"},
        {"link" : "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
        {"link" : "https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80"},
    ]

    let slidesNum = 1;

    const size = useWindowSize();

    if (size.width > 1000){
        slidesNum = 3;
    }else if (size.width > 600){
        slidesNum = 2;
    }

    return (
        <Swiper
          spaceBetween={50}
          slidesPerView={slidesNum}
          className={styles.cardWrapper1}
        >
          
          {caroJson.map((object)=>{
              return(<SwiperSlide><Card data={object} /></SwiperSlide>)
          })}
         
        </Swiper>
      );
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


export default cardWrapper1;