// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signUP,
  sendOTP,
  changePassword
} = require("../controllers/authentication")

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword")

const { isAuthorized } = require("../middlewares/authorization")


// Route for user login
router.post("/login", login)
// Route for user signup
router.post("/signup", signUP)
// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP)
// Route for Changing the password  
router.post("/changePassword", isAuthorized, changePassword)


// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)
// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)

// Export the router for use in the main application
module.exports = router