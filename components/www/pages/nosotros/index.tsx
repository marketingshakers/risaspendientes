import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Frase, { FraseProps } from './frase'
import Mision, { MisionProps } from './mision'
import Vision, { VisionProps } from './vision'

const getLayoutProps: GetLayoutProps = () => ({
  title: 'Nosotros',
})

type IndexProps = PageProps
  & FraseProps
  & MisionProps
  & VisionProps

const Nosotros = (data: IndexProps) => (
  <>
    <Frase {...data} />
    <Mision {...data} />
    <Vision {...data} />
  </>
)

export default Nosotros
