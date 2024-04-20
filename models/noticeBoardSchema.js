import mongoose from "mongoose";

const noticeBoardSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required :true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

const noticeBoard = mongoose.model("noticeBoard",noticeBoardSchema);

export default noticeBoard;