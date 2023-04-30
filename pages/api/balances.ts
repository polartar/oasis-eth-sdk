import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address, balances } = req.body

  res.setHeader('Set-Cookie', [
    serialize('address', address, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
    }),
    serialize('balances', balances, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
    }),
  ])

  res.status(200).json({ message: 'Successfully saved' })
}
