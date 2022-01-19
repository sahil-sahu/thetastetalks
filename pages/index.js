// import Image from 'next/image'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Parallax, Background } from 'react-parallax';
import Link from 'next/link'
import Header from "../components/header"
import Nav from "../components/header/nav"
import Cards1 from "../components/photoCard1"
import WeekBest from "../components/photoCard2"
import People from "../components/peopleCards"
import styles from "../components/index.module.css"
import Blogger from "../components/bloggers"
import Youtube from "../components/youtube"
import Footer from "../components/footer"

export default function Home() {
  return (
      <>
        <NextSeo
          title="The Taste Talks"
          description="Then with a short description here."
        />
        <Header />
        <Nav border={true} />
        <main>
          <h1 className={styles.mainHeading}>
            NEW REVIEWS / RECIPES EVERY WEEK
          </h1>
          <section className={styles.caption}>
            <p className="description">
              Simple recipes that takes your hunger to next level
            </p>
            <Link href={`/recipes`}>
              <a> Show me everything <FontAwesomeIcon icon={faLongArrowAltRight} size="lg"/> </a>
            </Link>
          </section>
          <Cards1></Cards1>
          <WeekBest />
          <section className={styles.bloggerfab}>
            <div className={styles.fabHeading}>
              <h1 className={styles.mainHeading}>
                FOOD BLOGGERS FAB
              </h1>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
              </div>
            </div>
            <Blogger />
            <Link href={"#"}>
              <a>
                <h2 className="show-all">
                  SHOW ALL <FontAwesomeIcon icon={faLongArrowAltRight} size="lg"/>
                </h2>
              </a>
            </Link>

          </section>
          <Parallax strength={300} className="Chef-Speciality">
            <Background className="custom-bg">
                <img className={styles.parallaxImg} src="/assets/speciality.webp" alt="Chef tossing" />
            </Background>
            <div className={`${styles.container} ${styles.borderUp}`}>
              <h1 className={styles.whiteHeading}>
                CHEF'S SPECIALITY
              </h1>
              <Cards1></Cards1>
            </div>
          </Parallax>
          <section className={styles.bestRestaurant}>
            <h1 className={styles.mainHeading}>
              FIND BEST RESTRAURANT IN TOWN
            </h1>
            <Parallax strength={300} className={styles.restaurantParallax}>
              <Background className="custom-bg">
                  <img className={styles.parallaxImg} src="/assets/restaurant.webp" alt="luxury restaurant" />
              </Background>
              <div className={styles.restaurantCarousel}>
                <Cards1></Cards1>
              </div>
            </Parallax>
          </section>
          <section className={styles.entrepreneur}>
            <h1 className={styles.mainHeading}>
              ENTREPRENEURIAL TALKS
            </h1>
            <div className={styles.entrepreneurContainer}>
              <People />
              <Link href={`#`}>
                <a className={styles.more} >
                  <FontAwesomeIcon icon={faArrowRight} size="2x" color='var(--black)'/>
                </a>
              </Link>
            </div>
          </section>
          <section className="youtube">
            <h1 className={styles.mainHeading}>
             RECIPE HANDBOOK & REVIEWS
            </h1>
            <Youtube />
          </section>
          <Footer />
          
        </main>
      </>
  )
}