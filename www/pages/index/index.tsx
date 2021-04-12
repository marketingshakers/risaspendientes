import Page, { PageProps } from '@/components/page'
import Hero from './hero'
import Productos, { ProductosProps } from './productos'
import Actividades, { ActividadesProps } from './actividades'

type IndexProps = PageProps
  & ProductosProps
  & ActividadesProps

const Index = (data: IndexProps) => (
  <Page {...data}>
    <Hero />
    <Productos {...data} />
    <Actividades {...data} />
  </Page>
)

export default Index
