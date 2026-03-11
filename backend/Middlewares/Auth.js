// import jwt from 'jsonwebtoken';
// const ensureAuthenticated = (req, res, next)=>{
//     const auth = req.headers.authorization;
//     console.log(req.headers.authorization);

//     if(!auth)
//     {
//         return res.status(403).json({
//         success: false,
//         message:'Unauthorized, JWT token is required'

//     })
//     }
//     try {
//         const decoded = jwt.verify(auth,process.env.JWT_SECRET);
//         req.user= decoded;
//         next();
//     } catch (error) {
//         return res.status(403).json({
//         success:false,
//         message:'unathorized ,jwt token wrong or expire',
//     });
//     }
// };
// export default ensureAuthenticated;



import jwt from "jsonwebtoken";

const ensureAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    //  console.log("AUTH HEADER:", req.headers.authorization);

    if (!authHeader ||!authHeader.startsWith("Bearer ") ) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized, JWT token is required",
      });
    }

    // const token = authHeader.startsWith("Bearer ")
    //   ? authHeader.split(" ")[1]
    //   : authHeader;
      const token = authHeader.split(" ")[1];


    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Unauthorized, JWT token wrong or expired",
    });
  }
};

export default ensureAuthenticated;
