import { ResponsiveImage } from './cms'

export type Specification = {
  icon?: string
  text?: string
}

export interface Dispositivo {
  title?: string
  description?: string
  image?: ResponsiveImage
  imageHd?: ResponsiveImage
  compact?: boolean
  specifications?: Specification[]
}
