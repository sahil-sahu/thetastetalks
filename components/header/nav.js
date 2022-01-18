import styles from './nav.module.css'
import Link from 'next/link'

function Nav(){

    return (

        <nav className={styles.nav}>
            <ul>
                <li><Link href={`/restaurants`}><a>Restaurants</a></Link></li>
                <li><Link href={`/chefs`}><a>Chefs</a></Link></li>
                <li><Link href={`/bloggers`}><a>Food Bloggers</a></Link></li>
                <li><Link href={`/meet-ups`}><a>Meet-ups</a></Link></li>
            </ul>
        </nav>

    )

}

export default Nav;