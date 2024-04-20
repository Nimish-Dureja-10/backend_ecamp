import Users from "../models/userModel.js";

export const isAdmin = async (req,res,next) => {
    try{
        const userDetail = await Users.findById(req.user._id);
        if(userDetail.role !== 'admin') {
            res.status(400).json({
                success:false,
                message : "Only admin is allowed to perform this action",
            });
        }
        next();
    }catch(err) {
        console.log(err);
        res.status(400).json({
            success:false,
            message : "Need to login!",
            error : err
        });
    }
};

export const checkStudent = async (req,res,next) => {
    try{
        const {role} = await Users.findById(req.user._id);
        if(role !== "student") {
            res.status(400).json({
                success:false,
                message : "Only student can perform this action",
            });
        }
        next();
    }catch(err) {
        console.log(err);
    }
};

export const checkTeacher = async (req,res,next) => {
    try{
        const {role} = await Users.findById(req.user._id);
        if(role !== "teacher") {
            res.status(400).json({
                success:false,
                message : "Only teacher can perform this action",
            });
        }
        next();
    }catch(err) {
        console.log(err);
    }
};