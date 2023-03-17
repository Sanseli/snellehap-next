import styles from './Navbar.module.scss'
import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)

    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Navbar = () => {
    const scrollPosition = useScrollPosition()

    return (<div className={`${styles.navbar} ${scrollPosition > 0 ? styles.navbarScroll : styles.navbarTop}`}>
            <button onClick={() => handleScroll('banner')}>Home</button>
            <button onClick={() => handleScroll('about')}>Over ons</button>
            <button onClick={() => handleScroll('menu')}>Menu</button>
            <button onClick={() => handleScroll('contact')}>contact</button>
    </div>)
}

export default Navbar