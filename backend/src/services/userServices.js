import { User } from "../models/User.js";
import { getToken } from "../helpers/token.js";

export const register = async (email, password, username, rePass) => {
  const exists = await User.findOne({ email });

  if (password !== rePass) {
    throw new Error("Invalid email or password");
  }

  if (exists) {
    throw new Error("Invalid email or password");
  }

  const user = await User.create({ email, password, username });

  return getToken(email, user._id);
};
