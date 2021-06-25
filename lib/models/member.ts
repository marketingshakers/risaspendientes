import { ICMSType, IResponsiveImage } from './cms'

export interface IMember extends ICMSType {
  name?: string
  description?: string
  image?: IResponsiveImage
  cargo?: string
}
