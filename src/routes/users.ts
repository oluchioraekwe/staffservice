import {Router} from 'express';
import {allUsers, createUser,deleteUser, findByEmail, getUser, updateUserController} from "../controller/users"
import { authenticate } from '../utility/middleware';
const router = Router();

router.get('/', authenticate,allUsers);
router.get("/:id",getUser)
router.post("/email",findByEmail)
router.post("/",createUser)
router.delete("/:id",authenticate,deleteUser)
router.patch("/:id",authenticate,updateUserController)




export default router
