import details from "../models/detailsSchema.js";
import Users from "../models/userModel.js";

export const addUserDetails = async (req,res) => {
    try{
        const {name,enrollmentNo,dob,contactNo,fatherName,motherName,
        guardianName,fatherContactNo,motherContactNo,
        guardianContactNo,bloodGroup,programme,branch,batch,yearOfJoining} = req.body;
        if(!name || !enrollmentNo || !dob || !contactNo || !programme || !branch || !batch || !yearOfJoining) {
            return res.status(402).json({
                success:false,
                message : "All mandatory fields are not filled",
            });
        }
        const newDetails = new details({
            name,
            enrollmentNo,
            dob,
            contactNo,
            fatherName,
            motherName,
            guardianName,
            fatherContactNo,
            motherContactNo,
            guardianContactNo,
            bloodGroup,
            programme,
            branch,
            batch,
            yearOfJoining
        });

        // Save the details document to the database
        await newDetails.save();

        // Update the userDetails field in the user document
        await Users.findByIdAndUpdate(req.user._id, { userDetails: newDetails._id });

        res.status(201).json({
            success:true,
            message : "Your details added",
            newDetails
        });
    }catch(error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message : "Failed to add user details",
            error
        });
    }
};