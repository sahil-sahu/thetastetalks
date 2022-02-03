import { useState, useEffect } from 'react';
import styles from './nav.module.css'
import Link from 'next/link'

function Nav(props){

    let bar = styles.navUp;

    if (props.border){
        bar = styles.navDown;
    }

    var navItems = [
        {"name": "Restaurants", "slug":"/restaurants","icon":"/assets/navIcons/restaurant.png"},
        {"name": "Recipes", "slug":"/recipes","icon":"/assets/navIcons/recipes.png"},
        {"name": "Home", "slug":"/","icon":"/assets/navIcons/home.png"},
        {"name": "Chefs", "slug":"/chefs","icon":"/assets/navIcons/chef.png"},
        {"name": "Bloggers", "slug":"/bloggers","icon":"/assets/navIcons/blogging.png"},
        {"name": "MeetUps", "slug":"/meetups","icon":"/assets/navIcons/meetup.png"}
    ]
    const size = useWindowSize();

    if (size.width > 600){
        delete navItems[props.omit]
    }

    return (

        <nav className={`${styles.nav} ${bar}`} >
            <style>{`
                :root{
                    --navID : ${props.omit};
                }`}
            </style>
            <style>
                {
                `    
                .${styles.nav} ul li:nth-child(${props.omit+1}) span{
                    opacity: 1;
                }
                .${styles.nav} ul li:nth-child(${props.omit+1}) img{
                    transform: translateY(-1.2rem)
                }
                `}
            </style>
            <ul>
                {navItems.map((object, i)=>{
                    return(<li><Link href={object.slug}><a>
                        <img src={object.icon} alt="" />
                        <span>{object.name}</span>
                        </a></Link></li>)
                }) } 
            </ul>
        </nav>

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

export default Nav;