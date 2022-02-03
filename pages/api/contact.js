import prisma from '../../clients/prisma'

export default async function contact(req, res) {
  if (req.method === 'POST') {
    try {
      const { fn, ln, email, cl, body } = req.body
      let response = await prisma.contact.create({
        data: {
          firstName: fn,
          lastName: ln,
          email: email,
          contactLinks: cl,
          body: body
        }
      })
      res.status(201).json({
        message: response,
        success: true
      })
    }
    catch (err) {
      res.status(406).json({
        message: err.message,
        success: false
      })
    }
  }
  else {
    res.status(405).json({message: 'Method not allowed'})
  }
}
