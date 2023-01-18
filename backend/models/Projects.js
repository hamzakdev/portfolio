const {model, Schema} = require('mongoose')

const ProjectSchema = new Schema({
    name: {type:String, required:[true, "Please enter name"] },
    description: {type:String, required:[true, "Please enter description"], minLength: [10, "email must be atleast 10 characters"]},
    image: {type:String, required:[true, "Please enter Image"] },
    skills: {type:Array, required:[true, "Please enter skills"] },
    link: {type:String, required:[true, "Please enter the link"] },
    github: {type:String, required:[true, "Please enter github"] },
    
},
{timestamps:true})



module.exports = model('Projects', ProjectSchema)