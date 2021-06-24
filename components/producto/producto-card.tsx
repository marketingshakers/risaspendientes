import Viewport, { setAnim } from '../viewport'
import { IProducto } from '@/lib/models/producto'
import ZoomImage from '../zoom-image'
import { Money16 } from '@carbon/icons-react'
import Link from 'next/link'

export interface ProductoCardProps extends IProducto {
  idx?: number
  bordered?: boolean
}

export const ProductoCard = ({
  idx,
  name,
  slug,
  image,
  price,
  bordered
}: ProductoCardProps) => {
  const style = setAnim({ d: `${idx !== null ? idx * 100 : 0}ms` })
  const Content = () => (
    <>
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
    </>
  )
  return bordered ? (
    <div
      className={`animate bg-white border rounded-3xl shadow-xl p-2`}
      style={style}
    >
      <div className="p-[8px]">
        <Content />
      </div>
    </div>
  ) : (
    <div className="animate" style={style}>
      <Content />
    </div>
  )
}
