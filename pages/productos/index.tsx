import { GetLayoutProps } from '@/components/page-layout'
import Viewport, { setAnim } from '@/components/viewport'
import { request, responsiveImageHelper } from '@/lib/datocms'
import { IProducto } from '@/lib/models/producto'
import Image from '@/components/zoom-image'

const getLayoutProps: GetLayoutProps<IProducto> = ({ name }) => ({
  title: 'Nuestros productos',
  padded: true,
})

const Producto = (props: IProducto) => (
  <div className="my-24">
    <div className="c-lg">
      <Viewport className="flex flex-wrap m-[-32px] items-center" oneWay style={setAnim({ y: '0.5rem' })}>
        <div className="w-full p-[32px] animate sm:w-1/2">
          <img
            src="/images/logo.svg"
            alt="Nuestra misión"
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="w-full p-[32px] sm:w-1/2">
          <h2
            className="font-title font-bold animate text-5xl text-x-yellow-500"
            style={setAnim({ d: '100ms' })}
          >
            Coleccionables “PenDientes”
          </h2>
          <p
            className="mt-6 animate"
            style={setAnim({ d: '200ms' })}
          >
            Estos traviesos y carismáticos dientes se caracterizan por tener personalidades muy marcadas, inspiradas en personajes del Dr. Seuss, quien es el escritor favorito de nuestro Co-Fundador y ángel Jonathan Battaglini.
            A pesar de tener personalidades explosivas y distintas, todos guardan algo en común: contribuir a la lucha contra el cáncer bucal. ¿Cómo así? Todos los fondos provenientes de la venta de los PenDientes, se destinarán a pacientes con cáncer bucal que no puedan acceder a un tratamiento digno.
          </p>
        </div>
      </Viewport>
    </div>
    <Viewport className="mt-8 relative c-lg" oneWay style={setAnim({ y: '0.5rem' })}>
    </Viewport>
  </div>
)

Producto.getLayoutProps = getLayoutProps

export default Producto

const query = `
query ProductoQuery($slug: String) {
  allProductos {
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
  //const { slug } = params
  //const { productos } = await request({
  //  query, variables: {
  //    slug
  //  }
  //})
  return {
    props: {
      // productos
    },
    revalidate: 1,
  }
}
