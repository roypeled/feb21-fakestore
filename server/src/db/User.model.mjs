import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: /\@/,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        maxLength: 10,
        unique: true,
    },
    phone: {
        type: String,
        default: "555-0870"
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: v => {
                if(v.length < 6) return false;
                if(!/[A-Z]/.test(v)) return false;
                if(!/[\*\?\-\_\!]/.test(v)) return false;

                return true;
            },
            message: prop => `${prop.value} is an invalid password!`,
        },
        select: false,
    },
    signUpDate: {
        type:Date,
        default: () => Date.now(),
    }
});

export const User = mongoose.model('User', userSchema);
