import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Burger from './burger'
import Sidebar from './sidebar'
import Dropdown from './dropdown'
import s from './styles/navbar.module.css'
import nav from '@/lib/navigation'
import { useGlobalDataContext } from '@/components/page'

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const [scrollY, setScrollY] = useState<number>(null)
  const toggleSidebar = () => (setSidebar(!sidebar))
  const globalData = useGlobalDataContext()

  const scrollHander = () => {
    setScrollY(window.scrollY)
    showingHandler()
  }

  const [isShowing, setShowing] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const showingHandler = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0) {
      return
    }
    // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than some offset
    if (Math.abs(currentScrollPosition - lastScrollPosition) < 128) {
      return
    }
    if (currentScrollPosition > 128) {
      setShowing(currentScrollPosition < lastScrollPosition)
    } else {
      setShowing(true)
    }
    setLastScrollPosition(currentScrollPosition)
  }

  useEffect(() => {
    if (scrollY === null) {
      scrollHander()
    }
    window.addEventListener('scroll', scrollHander, { passive: true })
    return () => (window.removeEventListener('scroll', scrollHander))
  })

  return (
    <header className={`${s.header} duration-500 transform-gpu ${scrollY > 0 && 'blurred'} ${(!sidebar && !isShowing) && '-translate-y-full pointer-events-none'}`}>
      <Sidebar open={sidebar} toggle={toggleSidebar}/>
      <div className={`${s.headerWrapper} border-b ${ scrollY > 0 ? 'border-x-gray-100' : 'border-transparent' }`}>
        <div className="flex overflow-hidden pointer-events-auto">
          <Link href="/">
            <a title="Home" className="font-bold font-title transform text-2xl text-blue-800 duration-200 overflow-hidden hover:scale-95">
              <div className="transform duration-200 logo hover:scale-95">
                <img
                  src="/images/logo.png"
                  alt="Home"
                  className="h-12"
                  title="Inicio"
                  loading="lazy"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={s.elements}>
          <div className="transition-all duration-200 items-center hidden lg:flex">
            {nav(globalData).map((n, i) => n.childrens ? (
              <Fragment key={i}>
                <Dropdown titulo={n.titulo} links={n.childrens}/>
              </Fragment>
            ) : (
              <Link href={n.href || '/'} key={i}>
                <a className="border-transparent font-bold border-b-[3px] mx-4 -mt-[3px] duration-200 hover:border-x-blue-500">
                  {n.titulo}
                </a>
              </Link>
            ))}
          </div>
          <div className="lg:hidden">
            <Burger open={sidebar} toggle={toggleSidebar}/>
          </div>
        </div>
      </div>
    </header>
  )
}
