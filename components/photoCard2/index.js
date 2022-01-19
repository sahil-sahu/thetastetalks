import styles from './main.module.css'
import Link from 'next/link'

function WeekBest(){

    let photographer = "photoGrapher"
    let topic =`CAKE WITH CARAMEL PUDDING\n&\nSTRAWBERRY SLIDES WITH REVIEWS`
    let url = "#"
    let image = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    return(
        <div className={styles.weekBest}>
            <div className={styles.textWrapper}>
                <div>
                    <h2>
                        PHOTO OF THE WEEK
                    </h2>
                    <span className="photographer">
                        ~{photographer}
                    </span>
                </div>
                <h3 className="topic">
                    {topic}
                </h3>
                <Link href={url}>
                    <a>VIEW RECIPE</a>
                </Link>
            </div>
            <img src={image}  alt="" />
        </div>
    )

}

export default WeekBest;