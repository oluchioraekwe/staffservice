import Staff from "../models/user_model"
import { IStaff } from "../utility/interface"



export const getAllUsers = async ()=>{
    return await Staff.find()
}

export const addUser = async (user:IStaff)=>{
    return await Staff.create(user)
}

export const removeUser = async (id: any) =>{
    return await Staff.findByIdAndDelete(id)
}

export const getUserById = async (id: any)=>{
    return await Staff.findById(id)
}

export const updateUser = async (id:any, user:IStaff)=>{
    return await Staff.findOneAndUpdate({_id:id},{$set:user},{new:true,runValidators:true})
}

export const getUserByEmail = async(email:string)=>{
    return await Staff.findOne({email})
}