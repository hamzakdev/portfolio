const {model, Schema} = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    username: {type:String, required:[true, "Please enter your name"], minLength: [4, "name must be atleast 4 characters"]},
    email: {type:String, required:[true, "Please enter your email"], minLength: [10, "email must be atleast 10 characters"], unique:true},
    password: {type:String, required:[true, "Please enter your password"], minLength: [7, "password must be atleast 7 characters"]},
},
{timestamps:true})

UserSchema.pre("save", async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})
UserSchema.methods.getJWTToken = function (){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
    
   }


module.exports = model('User', UserSchema)