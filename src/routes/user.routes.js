import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { CheckValidation, validateId, validateUser } from "../validations/user.validate.js";

const router = Router();

router.get("/", userController.getServiceAllUsers);
router.get("/:id", CheckValidation(validateId), userController.getServiceUserById);
router.post("/", CheckValidation(validateUser), userController.createServiceUser);
router.put("/:id", CheckValidation(validateId), userController.updateServiceUser);
router.delete("/:id", CheckValidation(validateId), userController.deleteServiceUser);

export default router;