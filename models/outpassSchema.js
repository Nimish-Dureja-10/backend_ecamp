import mongoose from "mongoose";

const outpassSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    contactNo : {
        type : String,
        required :true
    },
    outTime : {
        type : String,
        required : true
    },
    outDate : {
        type : String,
        required : true
    },
    inTime : {
        type : String,
        required : true
    },
    inDate : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

const outpass = mongoose.model("outpass",outpassSchema);

export default outpass;