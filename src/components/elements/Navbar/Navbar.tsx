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

const Navbar = () => {
    const scrollPosition = useScrollPosition()

    return (<div className={`${styles.navbar} ${scrollPosition > 0 ? styles.navbarScroll : styles.navbarTop}`}>
            <button>Home</button>
            <button>Over ons</button>
            <button>Menu</button>
            <button>contact</button>
    </div>)
}

export default Navbar