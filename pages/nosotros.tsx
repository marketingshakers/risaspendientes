export { default,  } from '@www/pages/nosotros'
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
    logros {
      description
    }
  }
  members: allIntegrantes {
    name
    cargo
    description
    image {
      ${responsiveImageHelper({ w: 500, h: 600, fit: 'crop' })}
    }
  }
}
`

export const getStaticProps = async () => {
  const { nosotros, members } = await request({ query })
  return {
    props: {
      ...nosotros,
      members,
    },
    revalidate: 1,
  }
}
