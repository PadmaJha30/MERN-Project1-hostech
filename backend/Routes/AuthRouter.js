import {signup, login, updateUserProfile,getUser,updateProfilePic,changePassword} from '../controller/AuthController.js';
import ensureAuthenticated from '../Middlewares/Auth.js';
import {loginValidation,signupValidation} from '../Middlewares/AuthValidation.js';
import {Router} from 'express';
import multer from 'multer';

const upload = multer({dest:'upload/'})

const router = Router();

router.post('/login', loginValidation,login)
router.post('/signup', signupValidation,signup)
// router.put(
//   "/update-profile-pic",
//   ensureAuthenticated,
//   upload.single("avatar"),
//   updateProfilePic
// );
// router.get('/:id',getUser)
// router.put("/update-profile", ensureAuthenticated, updateProfile);
router.get('/me', ensureAuthenticated, getUser);

router.put('/profile',ensureAuthenticated,updateUserProfile)

router.put('/update-profile',ensureAuthenticated,updateUserProfile);

router.put('/update-profile-pic',ensureAuthenticated,upload.single('avatar'),updateProfilePic)

router.put('/change-password', ensureAuthenticated,changePassword);

export default router;