import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Hero from './hero'
import Dispositivos, { DispositivosProps } from './dispositivos'
import Actividades, { ActividadesProps } from './actividades'
import Lesiones, { LesionesProps } from './lesiones'
import Productos, { ProductosProps } from './productos'
import Banner, { BannerProps } from './banner'
import { IProducto } from '@/lib/models/producto'

const getLayoutProps: GetLayoutProps = () => ({
  altLogo: true,
  padded: false,
})

type IndexProps = {
  actividades?: ActividadesProps
  lesiones?: LesionesProps
  productos?: IProducto[]
  respSocial?: ProductosProps
} & PageProps
  & DispositivosProps
  & ProductosProps
  & BannerProps

const Index = (data: IndexProps) => (
  <>
    <Hero />
    <Dispositivos {...data} />
    <Actividades {...data.actividades} />
    <Lesiones {...data.lesiones} />
    <Productos {...data.respSocial} productos={data.productos} />
    <Banner {...data.lesiones} />
  </>
)

Index.getLayoutProps = getLayoutProps

export default Index
