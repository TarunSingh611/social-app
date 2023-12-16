import  loginUser from "../../services/userService/userLogin.mjs";

const userLogin = async (req, res) => {
  try {
   const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const result = await loginUser(username, email, password);

    res.status(201).json(result);
  } catch (error) {
    const errorMessage = error.message || "Internal Server Error";
    res.status(500).json({ error: errorMessage });
  }
};

export { userLogin };
