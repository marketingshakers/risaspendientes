import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Frase, { FraseProps } from './frase'
import Logros, { LogroProps } from './logros'
import Mision, { MisionProps } from './mision'
import Vision, { VisionProps } from './vision'

const getLayoutProps: GetLayoutProps = () => ({
  title: 'Nosotros',
})

type IndexProps = PageProps
  & FraseProps
  & MisionProps
  & VisionProps
  & {
    logros?: LogroProps[]
  }

const Nosotros = (data: IndexProps) => (
  <>
    <Frase {...data} />
    <Mision {...data} />
    <Vision {...data} />
    <Logros {...data} />
  </>
)

export default Nosotros
