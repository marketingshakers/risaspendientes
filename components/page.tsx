import { ReactNode, useContext } from 'react'
import Navbar from './navigation/navbar'
import Footer from './footer'
import { createContext } from 'react'
import OgImage, { OgImageProps } from './og-image'
import SeoTags, { SeoTagsProps } from './seo-tags'
import { useRouter } from 'next/router'

export interface PageProps {
  globalData?: any
}

interface Props extends OgImageProps, SeoTagsProps, PageProps {
  children?: ReactNode
}

const globalDataContext = createContext<any>(null)
export const useGlobalDataContext = () => useContext(globalDataContext)

const brand = 'Risas Pendientes'

const Page = ({ title, brandTitle, description, children, globalData, ...rest }: Props) => {
  const { pathname } = useRouter()
  return (
    <globalDataContext.Provider value={globalData}>
      <SeoTags
        title={title}
        brandTitle={brandTitle || brand}
        description={description || (globalData?.SEODescription || brand)}
      />

      <style global jsx>
        {` html { scroll-behavior: smooth; }`}
      </style>

      <OgImage {...rest}/>

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
