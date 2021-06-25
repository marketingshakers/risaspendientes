import Viewport, { setAnim } from "@/components/viewport"
import styles from './styles/actividades.module.css'
import { Chart_3D32, GroupPresentation32, Idea32 } from '@carbon/icons-react'
import Link from "next/link"
import { IResponsiveImage } from "@/lib/models/cms"
import { Image } from "react-datocms"

interface ActividadProps {
  idx?: number
  icon?: React.ReactNode
  title?: string
  description?: string
  href?: string
  buttonText?: string
  placeRight?: boolean
}

const Actividad = ({
  idx,
  icon,
  title,
  description,
  href,
  buttonText,
  placeRight,
}: ActividadProps) => (
  <div
    className={`animate bg-white border rounded-3xl shadow-xl p-2 ${placeRight ? 'lg:self-end' : 'lg:self-start'}`}
    style={setAnim({d: `${idx * 100}ms`})}
  >
    <div className="flex-col flex -m-[8px] sm:flex-row">
      <div className="p-[8px]">
        <div className="bg-x-gray-100 rounded-[4px] p-1 text-x-blue-500 inline-flex">
          {icon}
        </div>
      </div>
      <div className={`${styles.text} p-[8px]`}>
        <h3
          className="font-title font-bold text-xl text-x-gray-900 leading-6 uppercase"
        >
          {title}:
        </h3>
        <p className="mt-2 leading-tight">{description}</p>
        <div className="flex w-full">
          <Link href={href}>
            <a className="font-title font-bold ml-auto mt-2 text-lg text-x-blue-500 hover:underline">{buttonText}</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export interface ActividadesProps {
  actividadesImage?: IResponsiveImage
  tituloTaller?: string
  textTaller?: string
  tituloConferencias?: string
  textConferencias?: string
  tituloAsesorias?: string
  textAsesorias?: string
}

const Actividades = (data: ActividadesProps) => (
  <div className="py-24" id="actividades">
    <Viewport
      className="animate c-lg"
      style={setAnim({y: '0.5rem'})}
      oneWay
    >
      <h2
        className="font-title font-bold text-center mb-16 text-x-yellow-500 text-3xl sm:text-5xl"
      >
        Nuestras actividades
       </h2>
    </Viewport>
    <div className="relative">
      <div className="h-full w-full py-24 -z-10 absolute">
        <div className="h-full bg-x-yellow-500 w-full"/>
      </div>
      <div className="c-lg">
        <Viewport className="flex flex-col w-full lg:flex-row lg:items-center" style={setAnim({y: '0.5rem'})} oneWay>
          <div className="flex flex-col space-y-8 w-full self-stretch justify-between lg:pr-[24px] lg:w-1/2">
            <Actividad
              idx={0}
              icon={<Chart_3D32 />}
              title={data.tituloTaller}
              description={data.textTaller}
              href={`/contacto?razon-de-contacto=${'Necesito información acerca de los talleres de capacitación en impresión 3D'}`}
              buttonText="Apúntate ahora"
            />
            <Actividad
              idx={1}
              icon={<GroupPresentation32 />}
              title={data.tituloConferencias}
              description={data.textConferencias}
              href={`/contacto?razon-de-contacto=${'Necesito información acerca de las conferencias de impresión 3D'}`}
              buttonText="Más información"
              placeRight
            />
            <Actividad
              idx={2}
              icon={<Idea32 />}
              title={data.tituloAsesorias}
              description={data.textAsesorias}
              href={`/contacto?razon-de-contacto=${'Necesito asesoría'}`}
              buttonText="Más información"
            />
          </div>
          <div className="flex flex-col mt-16 w-full animate items-center lg:mt-0 lg:pl-[24px] lg:w-1/2" style={setAnim({x: '0.5rem', y: '0', d: '300ms'})}>
            <div className="rounded-3xl shadow-xl w-full overflow-hidden">
              <Image
                data={{
                  ...data?.actividadesImage?.responsiveImage,
                  alt: 'Nuestras actividades',
                }}
              />
            </div>
          </div>
        </Viewport>
      </div>
    </div>
  </div>
)

export default Actividades
