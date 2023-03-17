import styles from './Banner.module.scss'

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Banner = () => <div className={styles.banner} id="banner">
    <img
        src="/logo/logo.png"
        alt="Vercel Logo"
        className={styles.logo}
    />

    <button className={styles.button} onClick={() => handleScroll('menu')}>Bekijk ons menu!</button>
</div>

export default Banner