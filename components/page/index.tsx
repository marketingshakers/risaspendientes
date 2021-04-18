import { ReactNode, useContext } from 'react'
import { Navbar, Footer } from './navigation'
import { createContext } from 'react'
import OgImage, { OgImageProps } from './og-image'
import SeoTags, { SeoTagsProps } from './seo-tags'
import { useRouter } from 'next/router'
import { GoogleFonts } from '@/components/google-fonts'
import Favicons from './favicons'

export interface PageProps {
  globalData?: any
}

interface Props extends OgImageProps, SeoTagsProps, PageProps {
  children?: ReactNode
}

const globalDataContext = createContext<any>(null)
export const useGlobalDataContext = () => useContext(globalDataContext)

const brand = 'Risas Pendientes'

const Page = ({
  title,
  brandTitle,
  description,
  children,
  globalData,
  ...rest
}: PageProps & OgImageProps & SeoTagsProps & PageProps & {
  children?: ReactNode
}) => {
  const { pathname } = useRouter()
  return (
    <globalDataContext.Provider value={globalData}>
      <GoogleFonts
        families={[
          'Nunito:wght@300;400;900',
          'Work+Sans:wght@300;400;700;900',
        ]}
        display="swap"
      />

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
        <Navbar/>
        <main
          className="flex-grow w-full overflow-hidden"
          style={{ paddingTop: `${pathname != '/' ? 96 : 0}px` }}
        >
          {children}
        </main>
        <Footer/>
      </div>
    </globalDataContext.Provider>
  )
}

export default Page
