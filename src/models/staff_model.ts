import {Schema, model} from 'mongoose'
import {IStaff} from "../utility/interface"

const staffSchema = new Schema<IStaff>({
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    gender:{
        type: String,
        enum: {
            values: ["M","F"],
            message: "Gender must be either M or F"
        },
        required: true,
        trim: true,
    },
    hasAdminRole:{
        type: String,
        enum:{
            values:["admin","user"],
            message: "Admin role can either be admin or user"
        },
        required: false,
        default: "user"
    },
    userType:{
        type: String,
        enum:{
            values:["Student","Staff"],
            message: "User can either be Staff or Student"
        },
        required: true,
    },
    currentLevel:{
        type:Number
    },
    subject:{
        type:String,
        trim:true
    }
},{
    timestamps: true
})

const Staff = model<IStaff>('Staff',staffSchema)

export default Staff