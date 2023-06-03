import User from "../model/users_schema.js";

const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });

    if (exist) {
      response.status(401).json({ message: "username already Exist.." });
    }

    const user = request.body;
    const newUser = User(user);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export default userSignup;
