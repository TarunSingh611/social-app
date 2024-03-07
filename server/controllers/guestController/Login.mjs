import loginUser from "../../services/userService/userLogin.mjs";

const Login = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const result = await loginUser(username, email, password);

        res.status(result.statusCode).json(result);
    } catch (error) {
        const errorMessage = error.message || "Internal Server Error";
        res.status(500).json({ error: errorMessage });
    }
};
export { Login };
