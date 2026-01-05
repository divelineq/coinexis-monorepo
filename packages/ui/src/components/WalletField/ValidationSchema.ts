import { z } from "zod";
import { addressDetection } from "./addressDetection";

export const ADDRESS_VALIDATION_SCHEMA = z
  .string()
  .trim()
  .refine((value) => addressDetection(value).isValid, {
    message: "Некорректный адрес кошелька",
  });
