import V, { setAnim } from '@/components/viewport'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => (
  <div className="bg-rp-yellow-500">
    <div className="flex py-32 content-lg sm:py-0" style={{ minHeight: '90vh' }}>
      <div className="flex flex-wrap-reverse my-auto w-full items-center sm:flex-wrap">
        <div className="w-full sm:w-1/2">
          <V
            style={setAnim({ x: '-1rem' })}
          >
            <h1
              className="font-bold font-title animate text-rp-blue-500 text-5xl lg:text-6xl"
            >
              Risas Pendientes
            </h1>
            <p
              className="font-title pl-px mt-2 text-xl animate text-rp-gray-500 sm:text-2xl"
              style={setAnim({d: '100ms'})}
            >
              Mejorando vidas una risa a la vez
            </p>
            <div className="pt-16 animate" style={setAnim({d: '400ms'})}>
              <Link href="/inscripcion">
                <a
                  className="font-bold font-title bg-rp-blue-500 rounded-2xl text-xl py-4 px-12 transform text-rp-yellow-500 duration-200 hover:scale-95"
                >
                  Contáctanos
                </a>
              </Link>
            </div>
        </V>
        </div>
        <V
          className="flex mb-16 w-full animate justify-center sm:w-1/2 lg:mb-0 lg:justify-end"
          style={setAnim({ x: '1rem', y: '1rem' })}
        >
          <Image
            src="/images/hero.png"
            alt="Risas pendientes"
            width={1026}
            height={728}
            layout="intrinsic"
          />
        </V>
      </div>
    </div>

  </div>
)

export default Hero
