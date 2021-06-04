import Page, { PageProps } from '@/components/page'
import Hero from './hero'
import Productos, { ProductosProps } from './productos'
import Actividades, { ActividadesProps } from './actividades'
import Lesiones, { LesionesProps } from './lesiones'

type IndexProps = {
  actividades?: ActividadesProps
  lesiones?: LesionesProps
} & PageProps
  & ProductosProps

const Index = (data: IndexProps) => (
  <Page {...data} altLogo padded={false}>
    <Hero />
    <Productos {...data} />
    <Actividades {...data.actividades} />
    <Lesiones {...data.lesiones} />
  </Page>
)

export default Index
