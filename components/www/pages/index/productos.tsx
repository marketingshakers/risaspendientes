import Viewport, { setAnim } from "@/components/viewport"
import { IResponsiveImage } from "@/lib/models/cms"
import { IProducto } from "@/lib/models/producto"
import { ProductoCard } from "@/components/producto/producto-card"

export interface ProductosProps {
  title?: string
  image?: IResponsiveImage
  productos?: IProducto[]
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
                bordered
              />
            ))}
          </div>
        </Viewport>
      </div>
    </div>
  </div>
)

export default Productos
