import { z } from "zod";

export const registroSchema = z.object({
    username: z.string({ required_error: "El usuario es requerido" }),
    email: z.string({ required_error: "El email es requerido" }).email({ message: "Email inválido" }),
    password: z.string({ required_error: "La contraseña es requerida" }).min(6, { message: "Contraseña inválida" }),
    usertype: z.string({ required_error: "El tipo de usuario es requerido" }),
});

export const ingresoSchema = z.object({
    email: z.string({ required_error: "El email es requerido" }).email({ message: "El email es inválido" }),
    password: z.string({ required_error: "La contraseña es requerida" }).min(6, { message: "La contraseña debe contener al menos 6 caracteres" }),
});