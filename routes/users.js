import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/User.Controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})

//UPDATE
router.put("/:id", verifyUser, verifyAdmin, updateUser);

//DELETE
router.delete("/:id", verifyUser, verifyAdmin, deleteUser);

//GET
router.get("/:id", verifyUser, verifyAdmin, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;