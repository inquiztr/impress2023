import { fontMont } from '@/app/styles/fonts'
import styles from './temphours.module.scss'
function TempHours() {
    return (
        <>
            <section id="tempHours" className={styles.temphours}>
                <div className={styles.boxContainer}>
                    <div className={styles.title}>
                        <span className="fontMont">Temporary Hours</span>
                    </div>
                    <div className={styles.days}>
                        Thursday, Friday & Saturday
                    </div>
                    <div className={styles.days}>12PM - 6PM</div>
                </div>
            </section>
        </>
    )
}

export default TempHours
