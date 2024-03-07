import { registerUser } from "../../services/userService/userRegister.mjs";

const Register = async (req, res) => {
    try {
        const { firstName, lastName, username, email, phone, password } =
            req.body;

        const result = await registerUser({
            firstName,
            lastName,
            username,
            email,
            phone,
            password,
        });

        res.status(201).json(result);
    } catch (error) {
        const errorMessage = error.message || "Internal Server Error";
        res.status(500).json({ error: errorMessage });
    }
};

export { Register };
