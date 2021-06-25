import PageLayout, { GetLayoutProps, PageProps } from '@/components/page-layout'
import { IFormField } from '@/lib/models/form-field'
import { useEffect, useState } from 'react'
import Viewport, { setAnim } from '@/components/viewport'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type ContactProps = PageProps & {
  formFields?: IFormField[]
}

const getLayoutProps: GetLayoutProps = () => ({
  title: 'Formulario de contacto',
  padded: false,
  altLogo: true,
})

const slugify = (...args: (string | number)[]): string => {
  const value = args.join(' ')

  return value
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-') // separator
}

const handleChange = (fields: IFormField[], idx: number, value: string, handler: any) => {
  fields[idx].value = value // Update it with the modified email.
  handler({ forms: fields })  // Update the state.
}

const renderField = (idx: number, field: IFormField, fields: IFormField[], handler: any) => ({
  'simple': (
    <input
      type="text"
      className="w-full input"
      id={slugify(field.title)}
      placeholder={field.placeholder}
      value={field?.value || ''}
      onChange={(e) => handleChange(fields, idx, e.target.value, handler)}
    />
  ),
  'complex': (
    <textarea
      className="input"
      id={slugify(field.title)}
      onChange={(e) => handleChange(fields, idx, e.target.value, handler)}
      rows={5}
      placeholder={field.placeholder}
      value={field?.value || ''}
    />
  ),
}[field.fieldType.type])

const Index = (data: ContactProps) => {
  const [fields, setFieldValues] = useState({ forms: data.formFields })
  const [loading, setLoading] = useState(false)
  const [sended, setSended] = useState(false)
  const { query } = useRouter()
  useEffect(() => {
    Object.entries(query).forEach(([key, val]) => {
      const idx = fields.forms.findIndex((f) => slugify(f.title) === key)
      if (idx != -1) {
        const fieldsClone = [...fields.forms]
        fieldsClone[idx].value = val as string
        console.log(fieldsClone)
        setFieldValues({ forms: fieldsClone })
      }
    })
  }, [query])
  const send = async () => {
    if (loading) {
      return
    }
    const isValid = fields.forms.filter((f) => f.required).every((f) => !!f.value?.trim())
    if (!isValid) {
      alert('Debe llenar todos los campos obligatorios')
      return
    }
    setLoading(true)
    const body = JSON.stringify(fields.forms.filter((f) => f.required || (!f.required && !!f.value?.trim())))

    await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body,
    })
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json()
          throw new Error(JSON.stringify(body))
        }
        setSended(true)
      })
      .catch((err) => {
        console.log(err)
        alert('Ha ocurrido un error, intente nuevamente')
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <>
      <Viewport
        once
        style={{
          perspective: 1000,
          ...setAnim({ y: '1.5rem', rx: '-6deg' })
        }}
      >
        <div className="bg-x-yellow-500">
          <div className="py-32 c-lg lg:py-48">
            <h1 className="font-bold animate text-4xl text-x-blue-500 lg:text-5xl">Formulario de contacto</h1>
          </div>
        </div>
        <div
          className="py-24 c-lg lg:pb-24"
        >
          {!sended ? (
            <div className={`flex flex-col mx-auto space-y-12 w-full lg:w-5/10 ${loading && 'animate-pulse'}`}>
              <p className="font-light text-sm animate">Los campos marcados con asteriscos (*) son obligatorios.</p>
              {fields.forms.map((f, idx) => (
                <div key={idx} className="flex flex-col animate" style={setAnim({ d: `${idx * 100 + 100}ms` })}>
                  <label
                    htmlFor={slugify(f.title)}
                    className="font-bold mb-4 input-label"
                  >
                    {`${f.title}${f.required ? ' *' : ''}`}
                  </label>
                  {renderField(idx, f, fields.forms, setFieldValues)}
                  {f.note && (
                    <div className="font-light mt-4 text-xs" dangerouslySetInnerHTML={{ __html: f.note }} />
                  )}
                </div>
              ))}
              <button
                className="bg-transparent font-bold ml-auto border-2 border-x-blue-500 text-sm mb-[2px] py-2 px-4 text-x-blue-500 duration-200 lg:text-base hover:text-white disabled:pointer-events-none disabled:cursor-not-allowed hover:bg-x-blue-500"
                onClick={send}
                disabled={loading || sended}
              >{loading ? 'Enviando...' : 'Enviar'}</button>
            </div>
          ) : (
            <Viewport
              style={{
                perspective: 1000,
                ...setAnim({ y: '1.5rem', rx: '-6deg' })
              }}
            >
              <h3 className="font-light text-center mb-6 animate text-4xl">Mensaje enviado</h3>
              <p className="font-light text-center animate" style={setAnim({ d: `100ms` })}>Le responderemos en breve, atento a los medios de contacto suministrados</p>
              <div className="mt-2 text-center animate" style={setAnim({ d: `200ms` })}>
                <Link href="/">
                  <a className="font-light text-x-blue-500 block hover:underline">Volver al inicio</a>
                </Link>
              </div>
            </Viewport>
          )}
        </div>
      </Viewport>
    </>
  )
}

Index.getLayoutProps = getLayoutProps

export default Index
