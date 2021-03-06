import { GetLayoutProps } from '@/components/page-layout'

const getLayoutProps: GetLayoutProps = () => ({
  title: '404: Esta página no puede ser encontrada',
})

const Page404 = () => (
  <div className="text-center w-full py-16">
    <h1 className="font-bold font-title mb-4 text-8xl text-blue-300">
      404
    </h1>
    <p>Esta página no puede ser encontrada</p>
  </div>
)

Page404.getLayoutProps = getLayoutProps

export default Page404
