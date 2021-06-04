import Viewport, { setAnim } from '@/components/viewport'
import { IResponsiveImage } from '@/lib/models/cms'
import Logo from '@/public/images/logo.svg'
import { Image } from 'react-datocms'

const Banner = ({ text }: { text?: string }) => (
  <Viewport className="my-8 animate c-lg" oneWay style={setAnim({y: '0.5rem'})}>
    <div className="bg-[#B8EBFF] card">
      <div className="mx-auto animate w-48" style={setAnim({ d: '200ms' })}>
        <Logo />
      </div>
      <div
        className="font-light mx-auto mt-4 text-center w-full animate text-x-gray-500 text-3xl italic lg:w-[42ch]"
        dangerouslySetInnerHTML={{
          __html: text
        }}
        style={setAnim({ d: '400ms' })}
      />
    </div>
  </Viewport>
)

const Section = ({ image, titulo, descripcion }: {
  image?: IResponsiveImage
  titulo?: string
  descripcion?: string
}) => (
  <div className="c-lg relative">
    <div className="h-full w-full pt-40 pr-12 -z-10 absolute lg:pb-40">
      <div className="h-full w-full card" style={{ padding: '0' }} />
    </div>
    <Viewport className="flex flex-wrap p-8 sm:p-12 lg:items-center" oneWay style={setAnim({y: '0.5rem'})}>
      <div className="w-full lg:pr-[32px] lg:w-1/2">
        <div className="rounded-xl animate overflow-hidden">
          <Image
            data={{
              ...image?.responsiveImage,
              alt: 'Lesiones maxilofaciales'
            }}
          />
        </div>
      </div>
      <div className="w-full lg:pl-[32px] lg:w-1/2">
        <h2 className="font-title font-bold animate text-x-blue-500 text-3xl sm:text-5xl" style={setAnim({ d: '200ms' })}>Lesiones<br />Maxilofaciales</h2>
        <h3 className="mt-2 text-xl animate" style={setAnim({ d: '400ms' })}>{titulo}</h3>
        <div className="space-y-4 mt-6 animate" style={setAnim({ d: '600ms' })} dangerouslySetInnerHTML={{ __html: descripcion }} />
      </div>
    </Viewport>
  </div>
)

export interface LesionesProps {
  image?: IResponsiveImage
  titulo?: string
  descripcion?: string
  banner?: string
}

const Lesiones = ({ banner, ...rest }: LesionesProps) => (
  <>
    <Section {...rest} />
    <Banner text={banner} />
  </>
)

export default Lesiones
