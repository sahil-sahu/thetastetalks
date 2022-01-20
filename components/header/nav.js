import styles from './nav.module.css'
import Link from 'next/link'

function Nav(props){

    let bar = styles.navUp;

    if (props.border){
        bar = styles.navDown;
    }

    var navItems = [
        {"name": "Restaurants", "slug":"/restaurants"},
        {"name": "Recipes", "slug":"/recipes"},
        {"name": "Home", "slug":"/"},
        {"name": "Chefs", "slug":"/chefs"},
        {"name": "Food Bloggers", "slug":"/bloggers"},
        {"name": "Meet-ups", "slug":"/meetups"}
    ]
    delete navItems[props.omit]
    return (

        <nav className={`${styles.nav} ${bar}`} >
            <ul>
                {navItems.map((object, i)=>{
                    return(<li><Link href={object.slug}><a>{object.name}</a></Link></li>)
                }) } 
            </ul>
        </nav>

    )

}

export default Nav;