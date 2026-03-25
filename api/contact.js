import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // set in Vercel dashboard

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, project, message, email } = req.body;

    if (!name || !project || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await resend.emails.send({
      from: 'Le’Onyx Portfolio <contact@leonyxdavida.com>',
      to: 'leonyxdavida@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      reply_to: email || 'no-reply@leonyxdavida.com',
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Proyecto:</strong> ${project}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Email error', error);
    return res.status(500).json({ error: 'No se pudo enviar el mensaje' });
  }
}
