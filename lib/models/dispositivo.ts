import { CMSType, ResponsiveImage } from './cms'

export type Specification = {
  icon?: string
  text?: string
}

export interface Dispositivo extends CMSType {
  title?: string
  description?: string
  image?: ResponsiveImage
  imageHd?: ResponsiveImage
  compact?: boolean
  specifications?: Specification[]
}
