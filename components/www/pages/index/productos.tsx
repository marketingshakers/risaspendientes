import Viewport, { setAnim } from "@/components/viewport"
import styles from './styles/actividades.module.css'
import Link from "next/link"
import { IResponsiveImage } from "@/lib/models/cms"
import ZoomImage from "@/components/zoom-image"
import { IProducto } from "@/lib/models/producto"
import { Money16 } from '@carbon/icons-react'

interface ProductoCardProps extends IProducto {
  idx?: number
  placeLeft?: boolean
}

const ProductoCard = ({
  idx,
  name,
  slug,
  image,
  price,
  placeLeft,
}: ProductoCardProps) => (
  <div
    className={`animate bg-white border rounded-3xl shadow-xl p-2`}
    style={setAnim({ d: `${idx * 100}ms` })}
  >
    <div className={`${styles.text} p-[8px]`}>
      <ZoomImage
        data={{
          ...image?.responsiveImage,
          alt: name,
        }}
        className="rounded-3xl mb-6 w-full"
      />
      <h3
        className="font-title font-bold text-xl text-x-blue-500 leading-6 uppercase"
      >
        {name}
      </h3>
      <div className="flex mt-2 items-center">
        <Money16 className="mr-2" />
        <p className="text-lg text-x-gray-500">${price}</p>
      </div>
      <div className="flex w-full">
        <Link href={`/productos/${slug}`}>
          <a className="font-title font-bold ml-auto text-lg text-x-blue-500 hover:underline">Ver producto</a>
        </Link>
      </div>
    </div>
  </div>
)

export interface ProductosProps {
  title?: string
  image?: IResponsiveImage
  productos?: ProductoCardProps[]
}

const Productos = (data: ProductosProps) => (
  <div className="py-24" id="responsabilidad-social">
    <Viewport
      className="animate c-lg"
      style={setAnim({ y: '0.5rem' })}
      oneWay
    >
      <h2
        className="font-title font-bold text-center mb-16 text-x-blue-500 text-3xl sm:text-5xl"
      >
        {data.title}
      </h2>
    </Viewport>
    <div className="relative">
      <div className="h-full w-full py-16 -z-10 absolute">
        <div className="h-full bg-x-yellow-500 w-full" />
      </div>
      <div className="c-lg">
        <Viewport className="flex flex-col w-full lg:flex-row-reverse lg:items-center" style={setAnim({ y: '0.5rem' })} oneWay>
          <div className="w-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.productos?.map((p, idx) => (
              <ProductoCard
                {...p}
                key={idx}
                idx={idx}
                placeLeft={idx % 2 == 0}
              />
            ))}
          </div>
        </Viewport>
      </div>
    </div>
  </div>
)

export default Productos
