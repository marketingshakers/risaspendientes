import { GetLayoutProps } from '@/components/page-layout'

const getLayoutProps: GetLayoutProps = () => ({
  title: 'Sin conexión',
})

const Offline = () => (
  <>
    <div className="text-center py-16 c-lg">
      <h1 className="font-bold font-title mb-4 text-5xl text-blue-300">
        Sin conexión
      </h1>
      <p>No tienes conexión a internet y esta página no ha sido almacenada en caché :(</p>
    </div>
  </>
)

Offline.getLayoutProps = getLayoutProps

export default Offline
