// import Image from 'next/image'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Header from "../components/header"
import Nav from "../components/header/nav"
import Cards1 from "../components/photoCard"
import styles from "../components/index.module.css"

export default function Home() {
  return (
      <>
        <NextSeo
          title="The Taste Talks"
          description="Then with a short description here."
        />
        <Header />
        <Nav></Nav>
        <main>
          <h1 className={styles.mainHeading}>
            NEW REVIEWS / RECIPES EVERY WEEK
          </h1>
          <div className={styles.caption}>
            <p className="description">
              Simple recipes that takes your hunger to next level
            </p>
            <Link href={`/recipes`}>
              <a> Show me everything <FontAwesomeIcon icon={faLongArrowAltRight} size="lg"/> </a>
            </Link>
          </div>
          <Cards1></Cards1>
        </main>
      </>
  )
}