import * as jwt from "../utils/jwt.js";
import { SECRET } from "../config/expressConfig.js";

export const getToken = async (email, id) => {
  const payLoad = { email, id };

  const token = await jwt.sign(payLoad, SECRET, { expiresIn: "2h" });

  return token;
};
