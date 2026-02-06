import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    googleId: { type: String },
    avatar: { type: String },
    // NEW FIELDS
    role: { type: String, enum: ['admin', 'editor', 'freelancer'], default: 'freelancer' },
    isApproved: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isLoggedIn: { type: Boolean, default: false },
    token: { type: String, default: null },

    // // ... your existing fields
    // phoneNumber: { type: String, default: "" },
    // paymentMethod: { type: String, enum: ['Bank', 'EasyPaisa', 'JazzCash', ''], default: "" },
    // accountNumber: { type: String, default: "" },
    // onboardingCompleted: { type: Boolean, default: false } // To track if they filled the form
    // ,
    otp: { type: String, default: null },
    otpExpiry: { type: Date, default: null }

}, { timestamps: true })

export const User = mongoose.model("User", userSchema)