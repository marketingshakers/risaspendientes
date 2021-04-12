import Link from 'next/link'
import navs from '@/lib/navigation'
import styles from './footer.module.css'
import { Fragment } from 'react'
import {useGlobalDataContext} from '../page'
import Viewport, {setAnim} from '../viewport'

const MadeBy = () => (
  <div className={styles['madeBy']}>
    <p>Desarrollado con ❤️ por <strong>Marketing Shakers</strong></p>
  </div>
)

const Section = ({ titulo, childrens }: {
  titulo: string,
  childrens?: { titulo: string, href: string }[]
}) => (
  <div className={styles['el']}>
    <p>{titulo}</p>
    <div>
      {childrens.map((n, i) => (
        <Link href={n.href} key={i}>
          <a>{n.titulo}</a>
        </Link>
      ))}
    </div>
  </div>
)

const Isolated = () => {
  const data = useGlobalDataContext()
  const isolated = navs(data).filter(e => !e.childrens)
  return (
    <div className="flex flex-col -my-4 text-center mb-4 w-full justify-center items-center sm:flex-row sm:space-x-6">
      {isolated.map((n, idx) => (
        <div className="font-bold font-title text-xl py-4">
          <Link href={n.href} key={idx}>
            <a className="hover:underline">{n.titulo}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

const Childrens = () => {
  const data = useGlobalDataContext()
  const childrens = navs(data).filter(e => e.childrens)
  return (
    <>{childrens.map((n, i) => (
      <Fragment key={i}>
        <Section {...n}/>
      </Fragment>
    ))}</>
  )
}

const Elements = () => (
  <>
    <Isolated />
    <div className={styles['elements']}>
      <Childrens />
    </div>
  </>
)

const Footer = () => (
  <footer
    className="bg-rp-blue-500 text-white py-16"
  >
    <Viewport
      className="animate content-lg"
      style={setAnim({ y: '0.2rem', time: '1s' })}
      oneWay
    >
      <div className="flex mb-12 w-full">
        <img
          src="/images/logo-contrast.svg"
          className="mx-auto h-12"
          alt="Risas Pendientes"
          title="Risas Pendientes"
        />
      </div>
      <Elements/>
      <MadeBy/>
    </Viewport>
  </footer>
)

export default Footer
