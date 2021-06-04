import Viewport, { setAnim } from "@/components/viewport"
import { IVision } from "@/lib/models/vision"

export interface VisionProps {
  visiones?: IVision[] 
}

const VisionCard = ({ icon, text, idx }: IVision & { idx?: number }) => (
  <div className="flex flex-col w-full">
    <div
      className="mx-auto animate text-x-blue-500 w-5/10 icon"
      dangerouslySetInnerHTML={{ __html: icon }}
      style={setAnim({d: `${idx * 100 + 100}ms`})}
    />
    <style jsx>{`
      .icon :global(svg) {
        width: 100%;
        height: 100%;
      }
    `}</style>
    <div
      className="mt-6 text-center w-full animate"
      dangerouslySetInnerHTML={{ __html: text }}
      style={setAnim({d: `${idx * 100 + 200}ms`})}
    />
  </div>  
)

const Visiones = ({ visiones }: VisionProps) => (
  <div className="my-24 c-lg">
    <div className="w-full card">
      <Viewport
        style={setAnim({ y: '0.5rem' })}
        oneWay
      >
        <h2 className="font-bold font-title text-center w-full animate text-5xl text-x-yellow-500">
          Nuestra visión
      </h2>
        <p className="mt-4 text-center animate" style={setAnim({ d: '100ms' })}>
          En Risas Pendientes estamos comprometidos con ser:
      </p>
      </Viewport>
      <Viewport
        className="mt-8 w-full grid gap-[64px] grid-cols-1 sm:grid-cols-3 lg:gap-40"
        style={setAnim({ y: '0.5rem' })}
        oneWay
      >
        {visiones.map((v, idx) => (
          <div className="w-full" key={idx}>
            <VisionCard {...v} idx={idx} />
          </div>
        ))}
      </Viewport>
    </div>
  </div>
)

export default Visiones
