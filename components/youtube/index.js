import styles from "./main.module.css"

function Card(){
    let link = `https://youtu.be/bi_xedWzfqU`

    let url = `https://www.youtube.com/embed/${link.split("https://youtu.be/")[1]}`

    return(
        <iframe src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )

}

function Youtube(){

    return(

        <div className={styles.youtubeVideos}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

    )

}

export default Youtube;