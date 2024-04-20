import noticeBoard from "../models/noticeBoardSchema.js";
import Users from "../models/userModel.js";

export const getNotice = async (req,res) => {
    try{
        const data = await noticeBoard.find();
        res.status(200).json({
            success:true,
            message : "Notice board details",
            data
        });
    }catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Failed to load notice board details",
            error
        });
    }
};

export const postNotice = async (req,res) => {
    try{
        const userId = await Users.findById(req.user._id);
        const {title,description} = req.body;
        if(!title || !description) {
            return res.status(401).json({
                success:false,
                message:"All fields are mandatory"
            });
        }
        const notice = await noticeBoard.create({
            title,description,createdBy:userId
        });
        res.status(201).json({
            success:true,
            message:"New notice added successfully",
            notice
        });
    }catch(error) {
        console.log(error);
        res.status(402).json({
            success:false,
            message:"Failed to add notice",
            error
        });
    }
};

export const getNoticeDetails = async (req,res) => {
    try {
        const {id} = req.params;
        console.log(id)
        const singlePostDetails = await noticeBoard.findOne({_id:id});
        res.status(200).json({
            success:true,
            message:"Notice details",
            singlePostDetails
        })
    }catch(error) {
        console.log(error);
        res.status(402).json({
            success:false,
            message:"Failed to fetch notice post details",
            error
        });
    }
};