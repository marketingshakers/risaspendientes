import { ICMSType, IResponsiveImage } from './cms'

export interface IProducto extends ICMSType {
  name?: string
  slug?: string
  image?: IResponsiveImage
  description?: string
  price?: number
}
