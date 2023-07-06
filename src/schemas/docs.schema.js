import { z } from "zod";

export const createDocsSchema = z.object({
    title: z.string({ required_error: "El título del documento es requerido" }),
    student: z.string({ required_error: "El nombre del estudiante es requerido" }),
    teacher: z.string({ required_error: "El nombre del profesor es requerido" }),
    year: z.string({ required_error: "El año es requerido" }),
    career: z.string({ required_error: "La carrera es requerida" }),
    mode: z.string({ required_error: "La modalidad del proyecto es requerido" }),
    url: z.string({ required_error: "La URL del documento es requerido" }),
});
