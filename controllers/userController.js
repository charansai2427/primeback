const User = require("../model/userModel")
const  {genSalt ,hash , compare } = require("bcrypt");
const CryptoJS =  require ("crypto-js");
const TokenModel = require("../model/passwordToken");

const register = async(req)=>{
    const userData = await User.find({email:req.body.email});
    if(userData.length){
        throw new Error("Email-Id already Registered");
    }
    const userDataa = await User.find({phone:req.body.email});
    if(userDataa.length){
        throw new Error("Phone Number already Registered");
    }
    const { password } = req.body;
    const salt = await genSalt();
    const hashedPass = await hash(password,salt);
    const data = await User.create({
        ...req.body,
        password:hashedPass,
    })
    return data;
};

const login = async (req) => {
  const { email, password } = req.body ;
  const userData = await User.find({ email });
  if (!userData.length) throw new Error("Email not found");
  const { password: hashedPass, _id,access } = userData[0];
  const checkPass = await compare(password, hashedPass);
  if (!checkPass) throw new Error("Wrong Credentials");
  const token = CryptoJS.AES.encrypt(
    JSON.stringify({
      email,
      userId: _id,
      access
    }),
    process.env.CRYPTO_SECRET
  ).toString();
  return {
    userId: _id,
    email,
    token,
  };
};


  const loggedInUser = async (req) =>{
    return User.findById(req.userId); 
  };

  const getUser = async (req) =>{
    const userId = req.params.userId;
    return User.findById(userId); 
  };
  const getAllUsers = async (req) => {
    return User.find({});
  };
  
  const updateUser = async (req) => {
    const userId = req.params.userId;
    return User.findOneAndUpdate({ _id: userId }, req.body, { new: true });
  };
  

  const forgotYourPassword = async(req)=>{
    const userData = await User.findOne({email:req.body.email});
    if(!userData.email) throw new Error("On this Email-Id has been Registration");
    const token = CryptoJS.AES.encrypt(userData._id.toString(),process.env.CRYPTO_SECRET).toString();
    const date = new Date().getTime();
    sendMail(req.body.email,token);
    // return TokenModel.create({ token, createdAt: date });
  }

  const verify = async(req)=>{
    const {token} = req.query;
    console.log(token);
    const tokenData = await TokenModel.findOne({token});
    if(!tokenData.email) throw new Error("Link not Found");
    if(token.createdAt + 36000000 < new Date ().getTime()) throw new Error("Link Expired");
    const userId = CryptoJS.AES.decrypt(
      token,
      process.env.CRYPTO_SECRET).toString(CryptoJS.enc.Utf8);
      return { data: true, userId, tokenId: tokenData._id.toString() };
  }

  const changePass = async(req) =>{
    const {password,userId,tokenId} = req.body;
    const salt = await genSalt();
    const hashedPass = await hash(password,salt);
    await TokenModel.findByIdAndDelete(tokenId);
    return User.findOneAndUpdate(
      { _id: userId },
      { password: hashedPass },
      { new: true }
    );
  }

  module.exports={register,login,loggedInUser,getUser,getAllUsers,updateUser,forgotYourPassword,verify,changePass};