import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

async function contactHandler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.json({ error: 'Method not Allowed' })
	}

	const WEBHOOK_URL = process.env.WEBHOOK_URL
	const { name, email, message } = req.body

	const webhookBody = {
		content: `
**New contact form message** :incoming_envelope:
>>> **name**:  ${name}
**email**:  ${email}

**message**:
${message}
----------------------------------------------
    `,
	}

	try {
		await axios.post(WEBHOOK_URL, webhookBody)
		return res.json({ ok: true })
	} catch (error) {
		return res.status(500).json({ ok: false })
	}
}

export default contactHandler
