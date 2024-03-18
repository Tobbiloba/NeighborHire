import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    phoneNo: { type: String, required: false },
    country: { type: String, required: false },
    state: { type: String, required: false },
    city: { type: String, required: false },
    address: { type: String, required: false },
    profileImg: { type: String, required: false },
    recoveryOption: {
        question: { type: String, required: false },
        answer: { type: String, required: false },
    },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, required: true, select: false },
    },
    created_at: { type: Date, default: Date.now },
})

const userModel = mongoose.model('User', UserSchema)

export const getAllUserSchema = () => userModel.find()
export const getUserByEmailSchema = (email: string) => userModel.findOne({ email })
export const getUserByIdSchema = (id: string) => userModel.findOne({ _id: id })
export const registerUserSchema = (values: object) =>
    new userModel(values).save().then((user) => user.toObject())
export const updateUserByIdSchema = (id: string, values: object) =>
    userModel.findOneAndUpdate({ id, values })
export default userModel
