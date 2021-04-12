import Page from '@/components/page'

const Page404 = (globalData: any) => (
  <Page title="404: Est página no puede ser encontrada" globalData={globalData}>
    <div className="text-center w-full py-16">
      <h1 className="font-bold font-title mb-4 text-8xl text-blue-300">
        404
      </h1>
      <p>Esta página no puede ser encontrada</p>
    </div>
  </Page>
)

export async function getStaticProps() {
  return {
    props: {
    }
  }
}

export default Page404
