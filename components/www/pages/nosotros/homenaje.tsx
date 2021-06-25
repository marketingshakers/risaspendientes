import Viewport, { setAnim } from '@/components/viewport'
import { IResponsiveImage } from '@/lib/models/cms'
import { Image } from 'react-datocms'

export type HomenajeProps = {
  title?: string
  description?: string
  image?: IResponsiveImage
}

const Homenaje = ({ homenaje: props }: {
  homenaje?: HomenajeProps
}) => (
  <Viewport className="mt-8 relative c-lg" oneWay style={setAnim({ y: '0.5rem' })}>
    <div className="h-full w-full pr-12 -z-10 absolute lg:py-24 lg:pr-0">
      <div className="h-full w-full card" style={{ padding: '0' }} />
    </div>
    <div className="p-8 sm:p-12">
      <div className="flex flex-wrap w-full items-center">
        <div className="w-full animate lg:pr-6 lg:w-1/2">
          <Image
            data={{
              ...props.image?.responsiveImage,
              alt: props.title,
            }}
            className="border rounded-3xl shadow-xl"
          />
        </div>
        <div className="mt-12 w-full lg:mt-0 lg:pl-6 lg:w-1/2">
          <h2
            className="font-title font-bold mb-6 animate text-x-blue-500 text-3xl sm:text-5xl"
            style={setAnim({ d: '200ms' })}
          >
            {props.title}
          </h2>
          <div
            className="space-y-4 animate"
            style={setAnim({ d: '300ms' })}
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </div>
      </div>
    </div>
  </Viewport>
)

export default Homenaje
