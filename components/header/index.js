import Link from 'next/link'
import styles from './Main.module.css'

function Header() {
  return (

    <header>
        <div className={styles.joinus}>
            It's free platform. Want to be a part of it ? 
            <Link href={`/join-us`} >
                <a className={styles.click}> click here </a>
            </Link>
        </div>
        <div className={styles.heading}>
          <img src="/assets/main.svg" alt="the taste talks" />
        </div> 
    </header>
      
  )
}

export default Header;
