import { GetLayoutProps } from "@/components/page-layout"
import { IProducto } from "@/lib/models/producto"
import Viewport, { setAnim } from "@/components/viewport"
import { request, responsiveImageHelper } from "@/lib/datocms"
import { GetStaticPaths } from "next"
import { Image } from "react-datocms"
import { Money32 } from '@carbon/icons-react'
import Link from "next/link"

const getLayoutProps: GetLayoutProps<IProducto> = ({ name }) => ({
  title: name,
  padded: true,
})

const Producto = (props: IProducto) => (
  <div className="my-24">
    <Viewport
      className="c-lg"
      style={setAnim({ y: '0.5rem' })}
      oneWay
    >
      <h3
        className="font-title font-bold animate text-x-yellow-500 text-3xl sm:text-5xl"
      >
        Chequea nuestros productos
      </h3>
    </Viewport>
    <Viewport className="mt-8 relative c-lg" oneWay style={setAnim({ y: '0.5rem' })}>
      <div className="h-full w-full pr-12 -z-10 absolute lg:py-24 lg:pr-0">
        <div className="h-full w-full card" style={{ padding: '0' }} />
      </div>
      <div className="p-8 sm:p-12">
        <div className="flex flex-wrap w-full items-center">
          <div className="w-full animate lg:pr-6 lg:w-1/2">
            <Image
              data={{
                ...props.image?.responsiveImage,
                alt: props.name,
              }}
              className="border rounded-3xl shadow-xl"
            />
          </div>
          <div className="mt-12 w-full lg:mt-0 lg:pl-6 lg:w-1/2">
            <h2
              className="font-title font-bold mb-6 animate text-x-blue-500 text-3xl sm:text-5xl"
              style={setAnim({ d: '200ms' })}
            >
              {props.name}
            </h2>
            <div
              className="space-y-4 animate"
              style={setAnim({ d: '300ms' })}
              dangerouslySetInnerHTML={{ __html: props.description }}
            />
            <div className="flex flex-col mt-8 w-full sm:flex-row sm:justify-between">
              <div className="flex animate items-center" style={setAnim({ d: '400ms' })}>
                <Money32 className="mr-4 text-x-gray-500" />
                <p className="font-bold text-x-gray-500 text-2xl uppercase">Valor: ${props.price}</p>
              </div>
              <div className="pt-8 animate sm:mt-0" style={setAnim({ d: '500ms' })}>
                <Link href={`/contacto?razon-de-contacto=${'Quiero un coleccionable'}&mensaje=Estoy interesado en el ${props.name}`}>
                  <a className="rounded-lg font-bold bg-x-blue-500 text-white py-2 px-4 text-2xl sm:mt-0">¡Lo quiero!</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Viewport>
  </div>
)

Producto.getLayoutProps = getLayoutProps

export default Producto

const query = `
query ProductoQuery($slug: String) {
  producto(filter: {slug: {eq: $slug}}) {
    image {
      ${responsiveImageHelper({ w: 500, h: 500, fit: 'crop' })}
    }
    description
    name
    slug
    price
  }
}
`

export const getStaticProps = async ({ params }: any) => {
  const { slug } = params
  const { producto } = await request({
    query, variables: {
      slug
    }
  })
  return {
    props: {
      ...producto
    },
    revalidate: 1,
  }
}

const paths_query = `
query PathsQuery {
  allProductos {
    slug
  }
}
`

export const getStaticPaths: GetStaticPaths = async () => {
  const { allProductos } = await request({ query: paths_query })
  return {
    paths: allProductos.map(({ slug }: IProducto) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  }
}
