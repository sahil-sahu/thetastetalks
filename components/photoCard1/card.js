import styles from "./main.module.css"

function Card(){

    let imageUrl = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    return(
        <div className={styles.card}>
            <img src={imageUrl} alt="" />
        </div>
    )
}

export default Card;