import { dataBody } from '@/types/content.types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse<dataBody>) {
  const datosForm = req.body
  console.log(datosForm)

  const { data, error }: any = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ["bodegonlaguarida@hotmail.com"],
    subject: 'Pedido Realizado - La Guarida',
    html: `<p>${datosForm.name} ${datosForm.lastname} ha encargado ${datosForm.quantity} viandas de ${datosForm.menu} por el costo de $${datosForm.price} para el día ${datosForm.date}.</p>
    <br> Ante cualquier duda o problema acá tenés su número: ${datosForm.number}

    <h2>La Guarida</h2>
    `
  });

  if (error) {
    return res.status(400).json(error);
  }

 return res.status(200).json(data);
};