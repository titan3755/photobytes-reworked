import prisma from '../../clients/prisma'
import bcrypt from 'bcrypt'

export default async function register (req, res) {
    if (req.method === 'POST') {
        try {
            const body = req.body
            const user = await prisma.user.create({
                data: {
                    username: body.username,
                    password: await bcrypt.hash(body.password, 10),
                    email: body.email
                }
            })
            res.status(201).json({message: user, success: true})
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