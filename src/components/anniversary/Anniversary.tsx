import styles from './anniversary.module.scss'
function Anniversary() {
    return (
        <>
            <section id="anniversary" className={styles.anniversary}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="96"
                    viewBox="0 -960 960 960"
                    width="96"
                    className={styles.bannerStar}
                >
                    <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                </svg>

                <div className={styles.anniversaryWrap}>
                    <div className="fontMont">Celebrating 25 years</div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="96"
                    viewBox="0 -960 960 960"
                    width="96"
                    className={styles.bannerStarSmall}
                >
                    <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="96"
                    viewBox="0 -960 960 960"
                    width="96"
                    className={styles.bannerStarVerySmall}
                >
                    <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="96"
                    viewBox="0 -960 960 960"
                    width="96"
                    className={styles.bannerStarVeryVerySmall}
                >
                    <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                </svg>
            </section>
        </>
    )
}

export default Anniversary
