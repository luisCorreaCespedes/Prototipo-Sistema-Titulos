import { Router } from "express";
import { registro, ingreso, salir, perfil, verificarToken, getUsers } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validatorSchema } from "../middlewares/validatorSchema.js";
import { registroSchema, ingresoSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/registro', validatorSchema(registroSchema),registro);
router.post('/ingreso', validatorSchema(ingresoSchema), ingreso);
router.post('/salir', salir);
router.get('/verificar',  verificarToken);
router.get('/perfil', authRequired, perfil);
router.get('/users', authRequired, getUsers);

export default router;