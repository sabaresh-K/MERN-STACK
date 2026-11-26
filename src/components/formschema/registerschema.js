import z from "zod";

export const registerschema=z.object({
    name:z.string().min(3,"name must be minimum 3 letters"),
    email:z.string("enter valid email"),
    password:z.string().min(8,"password must be minimum 8 letters"),
    age:z.coerce.number().min(18,"age must be minimum 18")
})