import Page, { PageProps } from '@/components/page'
import Frase, { FraseProps } from './frase'
import Mision, { MisionProps } from './mision'
import Vision, { VisionProps } from './vision'

type IndexProps = PageProps
  & FraseProps
  & MisionProps
  & VisionProps

const Nosotros = (data: IndexProps) => (
  <Page title="Nosotros" {...data}>
    <Frase {...data} />
    <Mision {...data} />
    <Vision {...data} />
  </Page>
)

export default Nosotros
