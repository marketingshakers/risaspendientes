import Viewport, { setAnim } from '@/components/viewport'
import { IResponsiveImage } from '@/lib/models/cms'
import { Image as Img } from 'react-datocms'

export interface LesionesProps {
  image?: IResponsiveImage
  titulo?: string
  descripcion?: string
  banner?: string
}

const Lesiones = ({ image, titulo, descripcion }: LesionesProps) => (
  <div className="c-lg relative">
    <div className="h-full w-full pt-40 pr-12 -z-10 absolute lg:pb-40">
      <div className="h-full w-full card" style={{ padding: '0' }} />
    </div>
    <Viewport className="flex flex-wrap p-8 lg:items-center sm:p-12" oneWay style={setAnim({y: '0.5rem'})}>
      <div className="w-full lg:pr-[32px] lg:w-1/2">
        <div className="rounded-xl animate overflow-hidden">
          <Img
            data={{
              ...image?.responsiveImage,
              alt: 'Lesiones maxilofaciales',
              base64: null,
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

export default Lesiones
