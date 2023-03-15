import styles from './Banner.module.scss'

const Banner = () => <div className={styles.banner}>
    <img
        src="/logo/logo.png"
        alt="Vercel Logo"
        className={styles.logo}
    />

    <button className={styles.button}>Bekijk ons menu!</button>
</div>

export default Banner