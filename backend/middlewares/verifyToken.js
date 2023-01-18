const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyAdmin = async(req,res,next)=>{
    try{
        const token = req.cookies.token

        const data = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(data.id)
        if(!user)return res.status(401).json('not authorized')
        req.user = user
        next()

    }
    catch(err){
        res.json({error: err.message})
    }
}