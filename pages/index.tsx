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
        fit: 'crop',
        q: 70,
      })}
    }
    imageHd: image {
      ${responsiveImageHelper()}
    }
    compact
    specifications {
      icon
      text
    }
  }
  actividades: actividadesSection {
    actividadesImage {
      ${responsiveImageHelper({
        w: 500,
        h: 500,
        fit: 'crop',
        q: 70,
      })}
    }
    tituloTaller
    textTaller
    tituloConferencias
    textConferencias
    tituloAsesorias
    textAsesorias
  }
  lesiones: lesionesSection {
    titulo
    descripcion
    image {
      ${responsiveImageHelper({
        w: 500,
        q: 80,
      })}
    }
    banner
  }
}
`

export const getStaticProps = async () => {
  const req = await request({ query })
  return {
    props: {
      ...req
    }
  }
}
