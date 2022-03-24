import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment-fix';
const userSchema = mongoose.Schema({
    msv : Number,
    name: String,
    email: String,
    number: Number,

})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user')
const user = mongoose.model('user', userSchema);

export default user;
