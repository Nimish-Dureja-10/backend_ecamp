import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required :true
    }
    ,email:{
        type : String,
        required:true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        default : 'student'
    },
    userDetails : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Detail',
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

const users = mongoose.model("user",userSchema);

export default users;