import verifyEmail from "../../services/userService/userVerification.mjs";

const Verification = async (req, res) => {
    try {
        const verificationToken = req.query.t;

        if (!verificationToken) {
            return res.status(400).send("Invalid verification token");
        }

        const result = await verifyEmail(verificationToken);

        return res.status(400).json(result);
    } catch (error) {
        console.error("Error in userVerification:", error);
        return res.status(500).send("Internal server error");
    }
};

export { Verification };
