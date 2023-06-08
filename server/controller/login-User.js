import User from "../model/users_schema.js";

const userLogin = async (request, response) => {
  const data = request.body;
  try {
    if (
      (await User.findOne({ username: data.loginUsername })) &&
      (await User.findOne({ password: data.loginPassword }))
    ) {
      response.status(200).json({ message: { username: data.loginUsername } });
    } else {
      response.status(401).json({ message: `Invalid username or password` });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export default userLogin;
