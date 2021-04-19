import Viewport, { setAnim } from "@/components/viewport"

export interface MisionProps {
  mision?: string 
}

const Mision = ({ mision }: MisionProps) => (
  <div className="my-24 c-lg">
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
          Nuestra misión
        </h2>
        <div
          className="mt-6 animate"
          style={setAnim({ d: '200ms' })}
          dangerouslySetInnerHTML={{ __html: mision }}
        />
      </div>
    </Viewport>
  </div>
)

export default Mision
