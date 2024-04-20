import { comparePassword, hashPassword } from "../helper/authHelper.js";
import Users from "../models/userModel.js";
import JWT from "jsonwebtoken";
import details from "../models/detailsSchema.js";

export const createUser = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({
                success:false,
                message : "All fields are requied"
            });
        }
        const userExists = await Users.findOne({email});
        if(userExists){
            return res.status(400).json({
                success:false,
                message : "User already exist"
            });
        }
        const hashedPassword = await hashPassword(password);
        const user = await Users.create({
            name,email,password:hashedPassword
        });
        res.status(201).json({
            success:true,
            message : "User created successfully",
            user
        });
    }catch(error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:'Failed to create user',
            error
        });
    }
};

export const loginUser = async (req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message : "All fields are requied"
            });
        }
        const user = await Users.findOne({email});
        if(!user) {
            return res.status(400).json({
                success:false,
                message:"User doesn't exists",
            });
        }
        const match = await comparePassword(password,user.password);
        if(!match) {
            return res.status(400).json({
                success:false,
                message:"Invalid credentials",
            });
        }
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'3d'});
        res.status(201).json({
            success:true,
            message:"Login Successful",
            user:{
                name:user.name,
                email:user.email,
            },
            token
        });
    }catch(error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Failed to login",
            error
        });
    }
};

export const getUserProfile = async (req,res) => {
    try {
        const user = await Users.findById(req.user._id);
        const userDetailsId = user.userDetails;
        console.log(userDetailsId);
        const detail = await details.findOne({_id:userDetailsId});
        res.status(200).json({
            success:true,
            user,
            detail
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Failed to fetch user detials",
            error,
        });
    }
};