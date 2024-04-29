import outpass from "../models/outpassSchema.js";

export const createOutpass = async (req,res) => {
    try{
        const {name,contactNo,outTime,outDate,inTime,inDate} = req.body;
        if(!name || !contactNo || !outTime || !outDate || !inTime || !inDate) {
            return res.status(400).json({
                success:false,
                message : "All fields are mandatory",
            });
        }
        const outpassDetails = await outpass.create({
            name,contactNo,outTime,outDate,inTime,inDate
        });
        res.status(201).json({
            success:true,
            message:"Outpass created successfully",
            outpassDetails
        })
    }catch(error) {
        res.status(404).json({
            success:false,
            message : "Failed to create outpass",
            error
        });
    }
};

export const getOutpassDetails = async (req,res) => {
    try{
        const outpassDetails = await outpass.find();
        res.status(200).json({
            success:true,
            message: "Your outpass details",
            outpassDetails
        });
    }catch(error) {
        res.status(404).json({
            success:false,
            message : "Failed to create outpass",
            error
        });
    }
}