import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

});

const User = mongoose.model('User', UserSchema);
export default User;