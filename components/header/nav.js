import styles from './nav.module.css'
import Link from 'next/link'

function Nav(props){

    let bar = styles.navUp;

    if (props.border){
        bar = styles.navDown;
    }

    return (

        <nav className={`${styles.nav} ${bar}`} >
            <ul>
                <li><Link href={`/restaurants`}><a>Restaurants</a></Link></li>
                <li><Link href={`/recipes`}><a>Recipes</a></Link></li>
                <li><Link href={`/chefs`}><a>Chefs</a></Link></li>
                <li><Link href={`/bloggers`}><a>Food Bloggers</a></Link></li>
                <li><Link href={`/meet-ups`}><a>Meet-ups</a></Link></li>
            </ul>
        </nav>

    )

}

export default Nav;