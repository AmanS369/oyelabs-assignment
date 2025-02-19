import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const router = express.Router();
import validateUser from "../middleware/validateUser.js";

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", validateUser, createUser);
router.put("/:id", validateUser, updateUser);
router.delete("/:id", deleteUser);

export default router;
