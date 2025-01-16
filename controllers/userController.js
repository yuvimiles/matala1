const userModel = require("../model/userModel.js")

const getAllUsers = async (req , res)=>{
    try {
        const users = await userModel.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
      }
}

module.exports = { getAllUsers }