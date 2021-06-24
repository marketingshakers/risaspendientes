import Viewport, { setAnim } from '@/components/viewport'
import Logo from '@/public/images/logo.svg'

export interface BannerProps {
  banner?: string
} 

const Banner = ({ banner }: BannerProps) => (
  <Viewport className="my-8 animate c-lg" oneWay style={setAnim({y: '0.5rem'})}>
    <div className="bg-[#B8EBFF] card">
      <div className="mx-auto animate w-48" style={setAnim({ d: '200ms' })}>
        <Logo />
      </div>
      <div
        className="font-light mx-auto mt-4 text-center w-full animate text-x-gray-500 text-3xl italic lg:w-[42ch]"
        dangerouslySetInnerHTML={{
          __html: banner
        }}
        style={setAnim({ d: '400ms' })}
      />
    </div>
  </Viewport>
)

export default Banner
