import express from "express"
const router = express.Router();
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

// UPDATE THIS IMPORT LINE TO INCLUDE THE NEW FUNCTIONS
import { 
    changePassword, 
    forgotpassword, 
    LoginUser, 
    logOutUser, 
    registerUser, 
    verification, 
    verifyOtp,
    getPendingEditors, // Added this
    approveEditor,     // Added this
    uploadProfilePicture,
    getAllEditors,
    updateEditorProfile,
    getMyProfile
} from '../Controllers/userController.js'

import { isAuthenticated } from "../middleware/authenticated.js"
import { UserSchema, validateUser } from "../validators/uservalidate.js"

// Existing routes
router.post('/register', validateUser(UserSchema), registerUser)
router.post('/login', LoginUser)
router.post('/verify', verification)
router.post('/logout', isAuthenticated, logOutUser)
router.post('/forgot-password', forgotpassword)
router.post('/verify-otp/:email', verifyOtp)
router.post('/change-password/:email', changePassword)
router.post('/upload-profile', isAuthenticated, upload.single('avatar'), uploadProfilePicture);
router.post('/editor/update-profile', isAuthenticated, updateEditorProfile);
router.get('/editor/me', isAuthenticated, getMyProfile);
router.get('/all-editors', getAllEditors);

// NEW ADMIN ROUTES (Requires Login)
router.get('/pending-editors', isAuthenticated, getPendingEditors)
router.put('/approve-editor/:id', isAuthenticated, approveEditor)


export default router