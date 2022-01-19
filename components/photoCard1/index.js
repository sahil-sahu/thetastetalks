import styles from "./main.module.css"
import Card from "./card"

function cardWrapper1(){
    return(
        <div className={styles.cardWrapper1}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}

export default cardWrapper1;