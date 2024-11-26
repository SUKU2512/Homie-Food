import mongoose from "mongoose";

const Signupschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter Name"]
    },
    mailid:{
        type:String,
        required:[true,"Please enter MailID"]
    },
    password:{
        type:String,
        required:[true,"Please enter Password"]
    },
    confirmpassword:{
        type:String,
        required:[true,"Please enter Confirm Password"]
    },
    wanttobe:{
        type:String,
        required:[true,"Please enter What you want to be"]
    }
})

const Signup = mongoose.model("Signup" , Signupschema);
export default Signup;