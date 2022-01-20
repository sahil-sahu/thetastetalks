// import Image from 'next/image'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Header from "../components/header"
import Nav from "../components/header/nav"
import Profile from "../components/peopleCards/people"
import WeekBest from "../components/photoCard2"
import styles from "../components/index.module.css"
import Youtube from "../components/youtube"
import Footer from "../components/footer"

export default function Home() {
  return (
      <>
        <NextSeo
          title="The Taste Talks | Chefs"
          description="Then with a short description here."
        />
        <Header />
        <Nav border={true} omit={3} />
        <main>
          <section className={styles.bloggerfab}>
            <div className={styles.fabHeading}>
              <h1 className={styles.mainHeading}>
                OUR STAR CHEF/BLOGGERS
              </h1>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
              </div>
            </div>
            <Profile />
          </section>
          <WeekBest />
          <section className="youtube">
            <h1 className={styles.mainHeading}>
             RECIPE HANDBOOK & REVIEWS
            </h1>
            <Youtube />
          </section>
          <Footer navOmit={3} />
          
        </main>
      </>
  )
}