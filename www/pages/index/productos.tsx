import Viewport, { setAnim } from "@/components/viewport"
import ZoomImage from "@/components/zoom-image"
import { Dispositivo } from "@/lib/models/dispositivo"
import { Grid, Row, Column } from 'carbon-components-react'

export interface ProductosProps {
  dispositivos: Dispositivo[]
}

const DispositivoCard = (d: Dispositivo) => (
  <div className="flex flex-col-reverse m-[-16px] py-16 lg:flex-row">
    <div className="w-full p-[16px] lg:w-1/2">
      <div className="bg-rp-gray-100">
        <ZoomImage data={d.image.responsiveImage} dataHd={d.imageHd.responsiveImage} />
      </div>
    </div>
    <div className="w-full p-[16px] lg:w-1/2">
      <h3
        className="font-title font-bold text-rp-yellow-500 text-3xl sm:text-5xl"
      >
        {d.title}
      </h3>
      <div className="font-title mt-2 text-rp-gray-500" dangerouslySetInnerHTML={{__html: d.description}}/>
    </div>
  </div>
)

const Productos = (data: ProductosProps) => (
  <div className="py-24 content-lg">
    <Viewport
      className="animate"
      style={setAnim({ y: '0.5rem' })}
      oneWay
    >
      <h2
        className="font-title font-bold text-rp-blue-500 text-3xl sm:text-5xl"
      >
        Una risa a la vez
      </h2>
    </Viewport>
    {data.dispositivos.map((d, idx) => (
      <DispositivoCard {...d} key={idx} />
    ))}
  </div>
)

export default Productos
