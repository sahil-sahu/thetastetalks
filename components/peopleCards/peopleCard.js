import Link from 'next/link'
import styles from "./people.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faStar } from '@fortawesome/free-solid-svg-icons'

function PeopleCard(props){

    let data = props.obj;
    let layout = `row`
    if (props.count%2 == 0){
        layout = `row-reverse`
    }

    return(
       <div className={styles.profile} style = {{flexDirection: layout,}}>
           <div className={styles.dp}>
               <img src={data.image} alt="" />
           </div>
           <div className={styles.textWrapper}>
                <div className={styles.id}>
                    <h3>{data.name}</h3>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                    </div>
                </div>
                <p>{data.description}</p>
                <Link href={`/c/${data.url}`}>
                    <a>
                        Show More <FontAwesomeIcon icon={faLongArrowAltRight} size="lg"/>
                    </a>
                </Link>
               
           </div>
       </div>
    )

}

export default PeopleCard;