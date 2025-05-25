import { z } from "zod";

export const addUserSchema = z.object({
  name: z.string().min(1, "Jméno je povinné"),
  username: z.string().min(1, "Přezdívka (username) je povinná"),
  email: z.string().email("E-mail musí být platný").min(1, "Email je povinný"),
  phone: z.string().min(1, "Telefonní číslo je povinné").regex(/^[+\d\s]*$/, "Telefonní číslo může obsahovat pouze číslice, mezery a znak +"),
  website: z.string().url("URL musí být platná (https://url)").min(1, "Webová stránka je povinná"),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
  }),
  company: z.object({
    name: z.string(),
  }),
});

export type AddUserFormType = z.infer<typeof addUserSchema>;
