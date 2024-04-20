import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema({
    name : {
        type : String
    },
    enrollmentNo : {
        type : String
    },
    contactNo : {
        type : Number
    },
    dob : {
        type : String
    },
    fatherName : {
        type : String
    },
    motherName : {
        type : String
    },
    guardianName : {
        type : String
    },
    fatherContactNo: {
        type : Number,
    },
    motherContactNo: {
        type : Number,
    },
    guardianContactNo: {
        type : Number,
    },
    bloodGroup : {
        type : String
    },
    programme : {
        type : String,
        required : true
    },
    branch : {
        type : String
    },
    batch : {
        type : Number
    },
    yearOfJoining : {
        type : Number
    },
    classroom : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'class'
    }
});

const details = mongoose.model("detail",detailsSchema);

export default details;