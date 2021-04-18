import Page from '@/components/page'

const Offline = (globalData: any) => (
  <Page title="Sin conexión" globalData={globalData}>
    <div className="text-center py-16 c-lg">
      <h1 className="font-bold font-title mb-4 text-5xl text-blue-300">
        Sin conexión
      </h1>
      <p>No tienes conexión a internet y esta página no ha sido almacenada en caché :(</p>
    </div>
  </Page>
)

export async function getStaticProps() {
  return {
    props: {
    }
  }
}

export default Offline
