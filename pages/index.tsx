export { default,  } from '@/www/pages/index'
import { request, responsiveImageHelper } from '@/lib/datocms'

const query =  `
query HomeQuery {
  dispositivos: allDispositivos {
    title
    description
    image {
      ${responsiveImageHelper({
        w: 500,
        h: 500,
        fit: 'crop',
        q: 70,
      })}
    }
    imageHd: image {
      ${responsiveImageHelper()}
    }
    specifications {
      icon
      text
    }
  }
}
`

export const getStaticProps = async () => {
  const { dispositivos } = await request({ query })
  return {
    props: {
      dispositivos,
    }
  }
}
