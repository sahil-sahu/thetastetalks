import styles from "./main.module.css"

function Card(){

    let imageUrl = "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80"

    return(
        <div className={styles.card}>
            <img src={imageUrl} alt="" />
        </div>
    )
}

export default Card;