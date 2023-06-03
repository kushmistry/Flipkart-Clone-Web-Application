import express from 'express';
import userSignup from '../controller/signup-User.js';

const router = express.Router();

router.post('/signup', userSignup);

export default router;