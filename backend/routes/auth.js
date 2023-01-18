const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const { verifyAdmin } = require('../middlewares/verifyToken');



//REGISTER

router.post('/register', async(req,res)=>{
    try{

        const user = await User.create(req.body)
        res.json(user)
    }catch(err){
        res.json(err)
    }

})

    //LOGIN A USER

router.post('/login', async(req, res)=>{


    if(!req.body.email || !req.body.password){
        return res.status(400).json('Please enter email and password')
    }

    const user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(401).json('Wrong Credentials')
    }

    const comparedPassword =  await bcrypt.compare(req.body.password, user.password)

    if(!comparedPassword){return res.status(401).json('Wrong Credentials')}

        const token = user.getJWTToken();

        const options = {
            httpOnly: true,
            expires:new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 *  60 * 1000,
            )}

        res.status(200).cookie('token', token, options).json("LOGGED IN")
    
})

// GET ME

router.get('/me', verifyAdmin, async(req,res,next)=>{
    try{
        
        const user = await User.findById(req.user.id)
        
        if(!user)return res.status(401).json('User not found')

        const {password, ...others} = user._doc

        res.status(200).json(others)

    }
    catch(err){
        res.status(500).json(err.message)
    }


})

//LOGOUT A USER

router.get('/logout', (req, res)=>{

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json('LOGGED OUT')
})
module.exports = router