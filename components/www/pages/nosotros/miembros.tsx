import Viewport, { setAnim } from "@/components/viewport"
import ZoomImage from "@/components/zoom-image"
import { IMember } from "@/lib/models/member"

export interface MembersProps {
  members?: IMember[]
}

const Miembro = ({ idx, ...props }: IMember & { idx?: number }) => (
  <div
    className="flex flex-col w-full animate"
    style={setAnim({ d: `${idx * 100 + 200}ms` })}
  >
    <ZoomImage
      data={{
        ...props.image.responsiveImage,
        alt: props.name,
      }}
      className="rounded-3xl"
    />
    <h3 className="font-bold mt-6 text-xl text-x-blue-500">{props.name}</h3>
    <p className="font-bold my-2 text-sm text-x-yellow-500">{props.cargo}</p>
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: props.description }}
    />
  </div>
)

const Members = ({ members }: MembersProps) => (
  <div className="my-24 c-lg">
    <div className="w-full">
      <Viewport
        style={setAnim({ y: '0.5rem' })}
        oneWay
      >
        <h2 className="font-bold font-title text-center w-full animate text-5xl text-x-yellow-500">
          Nuestro equipo
        </h2>
        <p className="mt-2 text-center text-xl animate text-x-gray-500" style={setAnim({ d: '100ms' })}>
          Juntos logramos más
        </p>
      </Viewport>
      <Viewport
        className="mt-8 w-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={setAnim({ y: '0.5rem' })}
        oneWay
      >
        {members.map((v, idx) => (
          <div className="w-full" key={idx}>
            <Miembro {...v} idx={idx} />
          </div>
        ))}
      </Viewport>
    </div>
  </div>
)

export default Members
