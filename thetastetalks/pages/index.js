// import Image from 'next/image'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo';
import Header from "../components/header"

export default function Home() {
  return (
      <>
        <NextSeo
          title="The Taste Talks"
          description="Then with a short description here."
        />
        <Header />
        <h1>
          hello
        </h1>
      </>
  )
}