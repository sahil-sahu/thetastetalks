import styles from "./main.module.css"
import Nav from "../header/nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer(props){

    var navOmit = props.navOmit;

    return(
        <footer className={styles.footer}>
            <Nav border={false} omit={navOmit}/>
            <div className={styles.heading}>
                <img src="/assets/main.svg" alt="the taste talks" />
            </div>
            <div className={styles.credits}>
                Designed & Developed with <FontAwesomeIcon icon={faHeart} size="2x" color='red'/> by <a href="https://contrivers.tk" target="_blank">contrivers</a>
            </div>
        </footer>
    )

}

export default Footer;