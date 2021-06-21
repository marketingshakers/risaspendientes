import { ReactNode, useContext } from 'react'
import { Navbar, Footer } from './navigation'
import { createContext } from 'react'
import OgImage, { OgImageProps } from './og-image'
import SeoTags, { SeoTagsProps } from './seo-tags'
import Favicons from './favicons'
import { NavbarProps } from './navigation/navbar'

export interface PageProps extends OgImageProps, SeoTagsProps, NavbarProps {
  /** Default: `true` */
  padded?: boolean
  globalData?: any
  children?: ReactNode
}

export type GetLayoutProps<T = any> = (props: T) => PageProps

const globalDataContext = createContext<any>(null)
export const useGlobalDataContext = () => useContext(globalDataContext)

const brand = 'Risas Pendientes'

const PageLayout = ({
  title,
  brandTitle,
  description,
  children,
  globalData,
  padded = true,
  ...rest
}: PageProps) => {
  return (
    <globalDataContext.Provider value={globalData}>
      <SeoTags
        title={title}
        brandTitle={brandTitle || brand}
        description={description || (globalData?.SEODescription || brand)}
      />

      <OgImage {...rest}/>

      <Favicons/>

      <style global jsx>
        {` html { scroll-behavior: smooth; }`}
      </style>

      <div className="flex flex-col min-h-screen w-full">
        <Navbar {...rest} transparent={!padded} />
        <main
          className="flex-grow w-full overflow-hidden"
          style={{ paddingTop: `${padded ? 96 : 0}px` }}
        >
          {children}
        </main>
        <Footer/>
      </div>
    </globalDataContext.Provider>
  )
}

export default PageLayout
