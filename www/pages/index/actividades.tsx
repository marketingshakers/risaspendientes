import Viewport, { setAnim } from "@/components/viewport"

export interface ActividadesProps {
}

const Actividades = (data: ActividadesProps) => (
  <div className="py-24 content-lg">
    <Viewport
      className="animate"
      style={setAnim({y: '0.5rem'})}
      oneWay
    >
      <h2
        className="font-title font-bold text-center text-rp-yellow-500 text-3xl sm:text-5xl"
      >
        Nuestras actividades
       </h2>
    </Viewport>
  </div>
)

export default Actividades
