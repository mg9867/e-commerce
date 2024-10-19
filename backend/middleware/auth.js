import jwt from 'jsonwebtoken'

const authUser=async(req,res,next)=>{
    const {token}=req.headers;
    if (!token) {
        return res.json({success:false,message:'Not Authorized Login Again'})
    }
    try {
        // in this decoded token we have users id
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId=token_decode.id
        //in body adds user id which we get from token
        next()
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:error.message})
        
    }
}
export default authUser