import { IFormField } from '@/lib/models/form-field'
import sg from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(404)
    return
  }

  res.statusCode = 200

  if (!req.body) {
    res.statusCode = 505
    res.json({
      error: 'The request must have a body'
    })
    return
  }

  const body = (req.body as IFormField[]).map((f) => ({
    ...f,
    value: f.value.replace(new RegExp('\r?\n','g'), '<br />'),
  }))

  sg.setApiKey(process.env.SENDGRID_API_TOKEN)
  await sg
    .send({
      to: process.env.FORM_TO, // Change to your recipient
      from: process.env.FORM_FROM, // Change to your verified sender
      templateId: process.env.FORM_TEMPLATE,
      dynamicTemplateData: {
        fields: body
      }
    })
    .then(() => {
      res.status(200)
    })
    .catch((error) => {
      res.status(505).json(error)
    })
}
