import styles from "./main.module.css"

function Card(props){

    let imageUrl = props.data.image;

    return(
        <div className={styles.card}>
            <img src={imageUrl} alt="" />
        </div>
    )
}

export default Card;