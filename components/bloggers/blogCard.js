import styles from './blogCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faStar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function BlogCard(props){

    let image = props.content.image;
    let count = ("0" + props.count).slice(-2)
    let title = props.content.title
    let redirect = "#"
    
    return(
        <div className={styles.blogCard} >
            <img src={image} alt="" />
            <div className={styles.textWrapper}>
                <h4>
                    <span>{count}</span>
                    {title}
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