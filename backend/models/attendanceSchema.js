import mongoose from "mongoose";

const attendanceSchema = mongoose.Schema({
    date : {
        type : Date,
        default : Date.now
    },
    teacherName: {
        type: String,
        required: true
    },
    studentList: [
        {
            studentId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student',
                required: true
            },
            attended: {
                type: Boolean,
                default: false
            }
        }
    ]
});

const attendance = mongoose.model("attendance",attendanceSchema);

export default attendance;