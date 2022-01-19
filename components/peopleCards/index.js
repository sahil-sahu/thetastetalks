import styles from "./main.module.css"
import Card from "./card"

function People(){
    return(
        <div className={styles.People}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}

export default People;