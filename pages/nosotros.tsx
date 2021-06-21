export { default,  } from '@www/pages/nosotros'
import { request } from '@/lib/datocms'

const query =  `
query NosotrosQuery {
  nosotros: about {
    mision
    frase
    visiones {
      icon
      text
    }
    logros {
      description
    }
  }
}
`

export const getStaticProps = async () => {
  const { nosotros } = await request({ query })
  return {
    props: {
      ...nosotros,
    },
    revalidate: 1,
  }
}
