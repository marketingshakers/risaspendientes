export { default,  } from '@/www/pages/nosotros'
import { request, responsiveImageHelper } from '@/lib/datocms'

const query =  `
query NosotrosQuery {
  nosotros: about {
    mision
    frase
    visiones {
      icon
      text
    }
  }
}
`

export const getStaticProps = async () => {
  const { nosotros } = await request({ query })
  return {
    props: {
      ...nosotros,
    }
  }
}
