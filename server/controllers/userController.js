import User from "../models/userModel.js"

export const signup = async (req, res)=>{
    try{
    const userData = new User(req.body);
    const {email} = userData;
    const userExists = await User.findOne({email});
    if (userExists) return res.status(400).json({message: "User already exists!"});
    const user = await userData.save();
    res.status(200).json({message: "User created succesfully!"})
    }
    catch(error)
    {
        res.status(500).json({error: "Internal server error"});
    }
}

export const signin = async (req, res)=>{
    const userData = req.body;
    const {email, password} = userData;
    const userExists = await User.findOne({email});
    if (!userExists) return res.status(401 ).json({error: "Unauthorized response, please signup!"});
}