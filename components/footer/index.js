import styles from "./main.module.css"
import Nav from "../header/nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer(){

    return(
        <footer className={styles.footer}>
            <Nav border={false}/>
            <div className={styles.heading}>
                <img src="/assets/main.svg" alt="the taste talks" />
            </div>
            <div className={styles.credits}>
                Designed & Developed with <FontAwesomeIcon icon={faHeart} size="2x" color='red'/> by <a href="" target="_blank">contrivers</a>
            </div>
        </footer>
    )

}

export default Footer;