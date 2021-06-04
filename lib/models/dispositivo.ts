import { ICMSType, IResponsiveImage } from './cms'

export type Specification = {
  icon?: string
  text?: string
}

export interface IDispositivo extends ICMSType {
  title?: string
  description?: string
  image?: IResponsiveImage
  imageHd?: IResponsiveImage
  compact?: boolean
  specifications?: Specification[]
}
