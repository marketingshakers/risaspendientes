import Viewport, { setAnim } from '@/components/viewport'
import SvgLogo from '@/public/images/logo-contrast.svg'

export type LogroProps = {
  description?: string
}

const Logro = ({ description }: LogroProps) => (
  <Viewport className="flex flex-col animate items-center" oneWay style={setAnim({ y: '0.5rem', d: '100ms' })}>
    <SvgLogo className="h-auto w-4/10" viewBox="0 0 78.17 55.325" />
    <div
      className="mt-6 text-center text-sm w-full text-x-gray-500"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </Viewport>
)

const Logros = (props: { logros?: LogroProps[] }) => (
  <div className="py-24 c-lg" id="logros">
    <Viewport className="w-full" oneWay style={setAnim({ y: '0.5rem' })}>
      <h2
        className="font-title font-bold animate text-5xl text-x-yellow-500"
        style={setAnim({ d: '100ms' })}
      >
        Nuestros logros
      </h2>
    </Viewport>
    <div
      className="mt-16 w-full grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    >
      {props.logros.map((d, idx) => (
        <Logro {...d} key={idx} />
      ))}
    </div>
  </div>
)

export default Logros
