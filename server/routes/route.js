import express from 'express';
import userSignup from '../controller/signup-User.js';
import userLogin from '../controller/login-User.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

export default router;