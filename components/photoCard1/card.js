import styles from "./main.module.css"

function Card(props){

    var imageUrl = props.data.link;

    return(
        <div className={styles.card}>
            <img src={imageUrl} alt="" />
        </div>
    )
}

export default Card;