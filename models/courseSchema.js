import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    courseCode : {
        type : String,
        required : true,
        unique: true
    },
    courseTitle : {
        type:String,
        required : true
    },
    courseCredits : {
        type : Number,
        required : true
    },
    sem : {
        type : Numbers
    },
    attendaceList : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Attendance'
    }]
});

const courses = mongoose.model("course",courseSchema);

export default courses;