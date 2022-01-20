import styles from "./main.module.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function Card(props){

    let link = props.ytdata.channel;
    let image = props.ytdata.thumbnail;

    return(
        <div className={styles.ytCard}>
            <img src={image} alt="" />
            <Link href={link}>
                <a target="_blank">
                    <FontAwesomeIcon icon={faYoutube} size="5x" className={styles.yticon}/>
                </a>
            </Link>
        </div>
    )

}

function Youtube(){

    var ytJson = [
        {"channel" : "https://www.youtube.com/channel/UCqM-RLkwAtT9pIU3-1zWdUw", "thumbnail": "https://yt3.ggpht.com/U5A2WX7DEUGS6_ZJNLfai3zSgmM6cAFCzi3AUxWdZJAgD66g-NPzWgay4pnBjUTQwc0y_TWIGg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},
        {"channel" : "https://www.youtube.com/c/MumbikerNikhil", "thumbnail": "https://yt3.ggpht.com/Pgb_OmbSsz54qIQQbXgJE9AI1uccKgmVrUEzDar7hNUDmSWQUq9NNks4KHTYO3lA4UShXN-Fgrg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-r"},
        {"channel" : "https://www.youtube.com/c/TheRahulDua", "thumbnail": "https://yt3.ggpht.com/Pkb8TSCuzHpEceY9vdSRSaQpPpDbemqJdKTKrgfvIbLJdyU-sWHKU26eu3Td27I7qI6-0SR0NA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},
        {"channel" : "https://www.youtube.com/c/AnshuMor", "thumbnail": "https://yt3.ggpht.com/9BG764xbaMd_vCmYVp6quACptPWiZ5rHjZHzLtI2YI-9EeXqXXb_hho5b1tSwomsjwDflw2hiA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"},
    ]

    return(

        <div className={styles.youtubeVideos}>
            {ytJson.map((object)=>{
                return(<Card ytdata={object} />)
            })}
        </div>

    )

}

export default Youtube;