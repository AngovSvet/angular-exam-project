import jwt from "jsonwebtoken";
import utils from "util";

const sign = utils.promisify(jwt.sign);

const verify = utils.promisify(jwt.verify);

export { sign, verify };
