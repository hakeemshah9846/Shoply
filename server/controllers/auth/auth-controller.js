const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {

        const checkUser = await User.findOne({email});

        if(!checkUser) {
            return res.json({
                success : false,
                message : "User doesn't exists! Please register first",
            })
        }

        const checkPasswordMatch = await bcrypt.compare(
            password,
            checkUser.password,
        );
        if(!checkPasswordMatch) {
            return res.json({
                success : false,
                message : "Incorrect password! Please try again",
            });
        }

        const token = jwt.sign({
            id : checkUser._id,
            role : checkUser.role,
            email : checkUser.email,
            userName : checkUser.userName,
        },
        process.env.PRIVATE_KEY,
        {expiresIn : "60m"}
    );

    res.cookie("token", token, {httpOnly: true, secure : false}).json({
        success : true,
        message : "Logged in successfully",
        user : {
            email : checkUser.email,
            role : checkUser.role,
            id : checkUser._id,
            userName : checkUser.userName,
        }
    })
    }catch (e) {
        console.log(e);
        res.status(500).json({
            success : false,
            message : "Some error occured",
        })
    }
}

module.exports = {loginUser};