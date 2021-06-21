import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Hero from './hero'
import Productos, { ProductosProps } from './productos'
import Actividades, { ActividadesProps } from './actividades'
import Lesiones, { LesionesProps } from './lesiones'

const getLayoutProps: GetLayoutProps = () => ({
  altLogo: true,
  padded: false,
})

type IndexProps = {
  actividades?: ActividadesProps
  lesiones?: LesionesProps
} & PageProps
  & ProductosProps

const Index = (data: IndexProps) => (
  <>
    <Hero />
    <Productos {...data} />
    <Actividades {...data.actividades} />
    <Lesiones {...data.lesiones} />
  </>
)

Index.getLayoutProps = getLayoutProps

export default Index
