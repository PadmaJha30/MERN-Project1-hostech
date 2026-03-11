import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
// import {uploadCloudinary} from '../helpers/cloudinary.js';

const generateToken = (id) => {
  return jwt.sign({ _id: id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};
console.log(generateToken)


export const signup= async(req, res)=>{
    try {
        const {name, email, password}= req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409).json({message:'User is alreay exist you can login', success:false})
        }
        const newUser = new UserModel({name,email,password});
        newUser.password = await bcrypt.hash(password,10);

        await newUser.save()
        res.status(201).json({message:'signup successfully',
            success:true,
        });
    } catch (error) {
        res.status(500).json({
            message:'Internal server error',
            success:false
        })
    }
   
}

export const login = async(req, res)=>{
    try {
        const { email, password}= req.body;
        const user= await UserModel.findOne({email});
        const errorMsg = 'Auth failed email or password is wrong';
        if(!user){
            return res.status(403).json({message:errorMsg,success:false})
        }

        const isPassEqual = await bcrypt.compare(password,user.password);
        if(!isPassEqual){
            return res.status(403).json({message:errorMsg,success:false})
        }
        const token = jwt.sign(
            {email:user.email,_id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'24h'}
        )
        // res.status(201).json({message:'login successfully',
        //     success:true,
        //     token,
        //     email,
        //     name:user.name
        // })

        res.status(200).json({
  success: true,
  message: "Login successful",
  token,
  user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar
  }
});
    } catch (error) {
        res.status(500).json({
            message:'Internal server error',
            success:false
        })
    }
}

export const getUser = async (req,res)=>{
 try {
        console.log("USER FROM TOKEN:", req.user); // DEBUG LINE

       const userId = req.user._id;
       const user = await User.findById(userId).select('-password');
    if(!user){
        return res.status(400).json({
            message:'User not found',
            success:false,
        });
    }

    return res.status(200).json({
        success:true,
        data: user
        
    });
 } catch (error) {
         res.status(500).json({
            success:false,
            message:error.message
        })
    }
};

export const  updateUserProfile = async (req, res)=>{
try {
    const user = await User.findById(req.user._id);
    if(user){
        user.name=req.body.name ||user.name;
        user.email = req.body.email ||user.email;
        // user.pic = req.body.pic||user.pic;

        // if(req.body.password){
        //     user.password = req.body.password;
        // }

        if (req.body.password) {
    user.password = await bcrypt.hash(req.body.password, 10);
}


  const updatedUser = await user.save();
        res.status(200).json({
            success:true,
            message:'Profile updated successfully',
            data:{
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email,
            avatar:updatedUser.avatar,
            // token:generateToken(updatedUser._id),
            }
        });
    }else{
        res.status(404).json({
            message:'User not found' || error.message,
            success:false
        });
    }
} catch (error) {
       res.status(500).json({
            message:'Internal server error ' || error.message,
            success:false
        });

}
}



export const updateProfilePic = async (req, res) => {
    try {
                console.log("FILE:", req.file);

        const userId = req.user._id;

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Image is required'
            });
        }

        // const upload = await uploadCloudinary(req.file.path);

        const user = await User.findByIdAndUpdate(
            req.user._id,
            { avatar: `/upload/${req.file.filename}` },
            { new: true }
        ).select('-password');

        res.status(200).json({
            success: true,
            message: 'Profile image updated',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
   }
 }

export const changePassword = async (req, res) =>{
    const {currentPassword, newPassword} = req.body;

    const user = await User.findById(req.user._id);

    if(!user){
        return res.status(404).json({message:'User not found'});
    }

    const isMatch = await bcrypt.compare(currentPassword,user.password);

    if(!isMatch){
        return res.status(400).json({message:'Current Password Incorrect'})

    }

    user.password = await bcrypt.hash(newPassword,10);
    await user.save();

    res.json({message:'Password updated successfully'});
}