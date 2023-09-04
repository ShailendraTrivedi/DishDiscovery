const UserModel = require('./../modals/UserSchema');

const UserRegister = async (req, res) => {
    try {
        const { email,username } = req.body;

        const UserEmailExist = await UserModel.findOne({ email });
        const UsernameExist = await UserModel.findOne({ username });

        if (UserEmailExist) {
            return res.status(400).json({ message: "User Email already exist" });
        }
        else if (UsernameExist) {
            return res.status(400).json({ message: "Username already exist" });
        }
        else {
            let user = new UserModel(req.body);
            let result = await user.save();
            return res.status(200).json({ message: "User Registered" });
        }
    }
    catch (err) {
        return res.status(400).json({ message: "Something went wrong" });
    }

}

const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await UserModel.findOne({ email, password }).select("-password");

        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send("No User Found!!");
        }
    } catch (error) {
        res
            .status(500)
            .send({ error: "Error while searching the user to the database !!!" });
    }
};

module.exports = {
    UserRegister,
    UserLogin
}