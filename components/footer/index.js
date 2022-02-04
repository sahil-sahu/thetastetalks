import styles from "./main.module.css"
import Nav from "../header/nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function Footer(props){

    var navOmit = props.navOmit;

    let contrivers = "1.25rem";
    let fontSize = "1rem";

    const size = useWindowSize();

    if (size.width > 1000){
        contrivers = "2.25rem";
        fontSize = "1.75rem";
    }else if (size.width > 600){
        contrivers = "1.75rem";
        fontSize = "1.5rem";
    }

    return(
        <footer className={styles.footer}>
            <Nav border={false} omit={navOmit}/>
            <div className={styles.heading}>
                <img src="/assets/main.svg" alt="the taste talks" />
            </div>
            <div className={styles.credits} style={{fontSize: fontSize,}}>
                Designed & Developed with <FontAwesomeIcon icon={faHeart} size="lg" color='var(--secondary)'/> by <a href="https://contrivers.tk" style={{fontSize: contrivers,}} target="_blank">contrivers</a>
            </div>
        </footer>
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

export default Footer;