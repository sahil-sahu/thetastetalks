import Link from 'next/link';
import styles from './nav2.module.css';

function Nav2(){

    return(
        <header className={styles.navBar}>
            <Link href={"/"}>
                <div className={styles.brand}>
                    <img src="/assets/white_main.svg" alt="" />
                </div>
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href={'/'}><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href={'/recipes'}><a>Recipes</a></Link>
                    </li>
                    <li>
                        <Link href={'/chefs'}><a>Chef</a></Link>
                    </li>
                    <li>
                        <Link  href={'/bloggers'}><a>Food Bloggers</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Nav2;