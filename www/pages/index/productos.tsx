import Viewport, { setAnim } from "@/components/viewport"
import ZoomImage from "@/components/zoom-image"
import { Dispositivo, Specification } from "@/lib/models/dispositivo"

export interface ProductosProps {
  dispositivos: Dispositivo[]
}

const Caracteristica = (c: Specification) => (
  <div className="flex m-[-8px]">
    <div
      className="flex p-[8px]"
    >
      <div
        className="bg-rp-yellow-500 rounded-[50%] h-[64px] p-[12px] text-rp-blue-500 w-[64px] icon"
        dangerouslySetInnerHTML={{ __html: c.icon }}
      />
      <style jsx>{`
      .icon :global(svg) {
        width: 100%;
        height: 100%;
      }
      `}</style>
    </div>
    <div
      className="p-[8px] text-rp-gray-500"
      dangerouslySetInnerHTML={{ __html: c.text }}
    />
  </div>
)

const DispositivoCard = ({ reversed, ...d }: Dispositivo & { reversed?: boolean }) => (
  <div className="py-16">
    <Viewport
      className={`flex flex-col-reverse m-[-16px] ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      style={setAnim({ y: '0.5rem' })}
      oneWay
    >
      <div className="w-full p-[16px] lg:w-1/2">
        <div className="bg-rp-gray-100 animate" style={setAnim({ x: reversed ? '0.5rem' : '-0.5rem' })}>
          <ZoomImage data={{
            ...d.image.responsiveImage,
            alt: d.title,
            title: d.title,
          }} dataHd={d.imageHd.responsiveImage} />
        </div>
      </div>
      <div className="w-full p-[16px] lg:w-1/2">
        <h3
          className="font-title font-bold animate text-rp-yellow-500 text-3xl sm:text-5xl"
        >
          {d.title}
        </h3>
        <div
          className="font-title mt-2 animate text-rp-gray-500 lg:w-5/8"
          style={setAnim({ d: '100ms' })}
          dangerouslySetInnerHTML={{ __html: d.description }}
        />
        <div className="mt-8 w-full">
          <div className="grid gap-[16px] grid-cols-1 lg:grid-flow-col lg:grid-rows-3 lg:grid-cols-2">
            {d.specifications.map((s, idx) => (
              <div className="animate" style={setAnim({ d: `${100 * (idx + 1)}ms` })} key={idx}>
                <Caracteristica {...s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Viewport>
  </div>
)

const Productos = (data: ProductosProps) => (
  <div className="py-24 content-lg" id="dispositivos">
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
      <DispositivoCard {...d} reversed={idx % 2 != 0} key={idx} />
    ))}
  </div>
)

export default Productos
