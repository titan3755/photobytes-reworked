import prisma from '../../clients/prisma'
import bcrypt from 'bcrypt'

export default async function login (req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body
        try {
            const user = await prisma.user.findUnique({where: {username: username}})
            if (user) {
                if (await bcrypt.compare(password, user.password)) {
                    res.status(302).json({success: true, user: user})
                }
                else {
                    res.status(400).json({success: false, msg: 'Password Incorrect!'})
                }
            }
            else {
                res.status(404).json({success: false, msg: 'User not found!'})
            }
        }
        catch (err) {
            res.status(500).json({success: false, msg: err.message})
        }
    }
    else {
        res.status(405).json({message: 'Method not allowed'})
    }
}
