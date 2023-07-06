import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getDocs, getDoc, createDocs, updateDocs, deleteDocs } from "../controllers/docs.controller.js";
import { validatorSchema } from "../middlewares/validatorSchema.js";
import { createDocsSchema } from "../schemas/docs.schema.js";

const router = Router();

router.get("/docs", authRequired, getDocs);
router.get("/docs/:id", authRequired, getDoc);
router.post("/docs", authRequired, validatorSchema(createDocsSchema), createDocs);
router.delete("/docs/:id", authRequired, deleteDocs);
router.put("/docs/:id", authRequired, updateDocs);

export default router;