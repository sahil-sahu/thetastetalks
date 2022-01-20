import styles from "./main.module.css"
import Card from "./card"

function People(){
    var entrepreneurs = [
        {"image": "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80"},
        {"image": "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        {"image": "https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    ]
    return(
        <div className={styles.People}>
            {entrepreneurs.map(obj => {
                return(<Card data={obj} />)
            })}
        </div>
    )
}

export default People;