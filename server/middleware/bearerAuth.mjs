import config from "../config/secrets.mjs";
const { VALID_API_KEYS,EXCLUDED_ROUTES } = config;

const BearerAuth = (req, res, next) => {
  console.log("req::",req.path)
  if (EXCLUDED_ROUTES.includes(req.path)) {
    return next();
  }
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Invalid Bearer: Unauthorized Access" });
  }
  const token = authHeader.split(" ")[1];

  if (!token || !VALID_API_KEYS.includes(token)) {
    return res
      .status(401)
      .json({ error: "Invalid Bearer: Unauthorized Access" });
  }

  next();
};

export default BearerAuth;
