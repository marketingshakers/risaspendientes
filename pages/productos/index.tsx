import { GetLayoutProps } from '@/components/page-layout'
import { ProductoCard } from '@/components/producto/producto-card'
import Viewport, { setAnim } from '@/components/viewport'
import { request, responsiveImageHelper } from '@/lib/datocms'
import { IProducto } from '@/lib/models/producto'

const getLayoutProps: GetLayoutProps<ProductosProps> = () => ({
  title: 'Nuestros productos',
  padded: true,
})

type ProductosProps = {
  title?: string
  description?: string
  productos?: IProducto[]
}

const Producto = (props: ProductosProps) => (
  <div className="my-24">
    <div className="c-lg">
      <Viewport className="flex flex-wrap-reverse m-[-32px] lg:flex-wrap items-center" oneWay style={setAnim({ y: '0.5rem' })}>
        <div className="w-full p-[32px] animate lg:w-1/2">
          <img
            src="/images/logo.svg"
            alt="Nuestra misión"
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="w-full p-[32px] lg:w-1/2">
          <h2
            className="font-title font-bold animate text-5xl text-x-yellow-500"
            style={setAnim({ d: '100ms' })}
          >
            {props.title}
          </h2>
          <div
            className="space-y-4 mt-6 animate"
            style={setAnim({ d: '200ms' })}
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </div>
      </Viewport>
    </div>
    <div className="mt-12 relative c-lg" style={setAnim({ y: '0.5rem' })}>
      <div className="flex flex-col w-full lg:flex-row-reverse lg:items-center">
        <div className="w-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {props.productos?.map((p, idx) => (
            <Viewport className="animate" style={setAnim({ y: '0.5rem' })} oneWay key={idx}>
              <ProductoCard
                {...p}
                bordered
              />
            </Viewport>
          ))}
        </div>
      </div>
    </div>
  </div>
)

Producto.getLayoutProps = getLayoutProps

export default Producto

const query = `
query ProductoQuery {
  productosPage {
    title
    description
  }
  productos: allProductos {
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

export const getStaticProps = async () => {
  const { productosPage, productos } = await request({
    query
  })
  return {
    props: {
      ...productosPage,
      productos,
    },
    revalidate: 1,
  }
}
