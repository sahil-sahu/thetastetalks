import Router, { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../components/channel.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faStar, faArrowRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { Parallax, Background } from 'react-parallax';
import SwiperCore, {Pagination} from 'swiper';
SwiperCore.use([Pagination]);

function Channel(){

    const router = useRouter()
    const { channel } = router.query
    var gallery = [
        "https://images.unsplash.com/photo-1612182062966-c8fe45ecbf73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1616148567134-9c0383fa0410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1621112904899-d14ce062bea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1547562643-02eb29504a73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1628591697740-4378f154b2ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
        ];

    var profileImg = "/assets/profilepic.webp"    


    return(
        <>
            <NextSeo
            title={`Hi, Its ${channel}`}
            description="Then with a short description here."
            />
            <main>
                <section className="hero">
                    <Swiper pagination={{"dynamicBullets": true}} className={styles.hero} grabCursor={true}>
                        {gallery.map(img => {
                            return(<SwiperSlide><img src={img} alt="" /></SwiperSlide>)
                        })}
                    </Swiper>
                </section>
                <section className={styles.profile}>
                    <Parallax strength={300}>
                        <Background className="custom-bg">
                            <img className={styles.parallaxImg} src="/assets/profilebg.webp" alt="Cool pattern" />
                        </Background>
                        <div className={styles.container}>
                            <div className="textWrapper">
                                <div className="heading">
                                    <h2>
                                        {channel}
                                    </h2>
                                    <div className="stars">
                                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                                        <FontAwesomeIcon icon={faStar} size="2x" color='var(--secondary)'/>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
(about the blogger & experience)
                                    </p>
                                    <div className="contacts">
                                        <ul>
                                            <li><a href=""><FontAwesomeIcon icon={faFacebookSquare} size="lg" color='var(--white)'/></a></li>
                                            <li><a href=""><FontAwesomeIcon icon={faInstagramSquare} size="lg" color='var(--white)'/></a></li>
                                            <li><a href=""><FontAwesomeIcon icon={faYoutube} size="lg" color='var(--white)'/></a></li>
                                            <li><a href=""><FontAwesomeIcon icon={faGlobe} size="lg" color='var(--white)'/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.profilebanner}>
                                <img src={profileImg} alt="" />
                            </div>
                        </div>
                    </Parallax>
                </section>
            </main>
        </>
    )

}

export default Channel;