import { GetLayoutProps } from '@/components/page-layout'

const getLayoutProps: GetLayoutProps = () => ({
  title: '404: Esta página no puede ser encontrada',
})

const Page500 = () => (
  <div className="text-center w-full py-16">
    <h1 className="font-bold font-title mb-4 text-8xl text-blue-300">
      500
    </h1>
    <p>Ha ocurrido un error desconocido, necesitamos a un programador</p>
  </div>
)

Page500.getLayoutProps = getLayoutProps

export default Page500
