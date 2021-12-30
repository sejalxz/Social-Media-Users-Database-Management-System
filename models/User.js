const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const UserSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        min:4,
        min:20,
        unique: true
    },
    email:{
        type: String,
        required: true,
        max:35,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        min:6
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    desc:{
        type : String,
        max: 50,
    },
    city:{
        type: String,
        max: 20,
    },
    from:{
        type: String,
        max: 20,
    }
},
{timestamps:true}
);

module.exports = mongoose.model("User", UserSchema)