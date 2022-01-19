import styles from './blogCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faStar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function BlogCard(){

    let image = "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    let count = "01"
    let redirect = "#"
    
    return(
        <div className={styles.blogCard}>
            <img src={image} alt="" />
            <div className={styles.textWrapper}>
                <h4>
                    <span>{count}</span>
                    Doughnuts (Veg)
                </h4>
                <div className={styles.caption}>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                    </div>
                    <Link href={redirect}>
                        <a>READ MORE <FontAwesomeIcon icon={faLongArrowAltRight} size="lg"/></a>
                    </Link>
                </div>

            </div>
        </div>
    )

}

export default BlogCard;