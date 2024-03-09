import mongoose from "mongoose"

export const errorHandler = (err) => {
  let message = "";
  if (err instanceof mongoose.MongooseError) {
    message = Object?.values(err.errors).at(0).message||undefined;

  } else if (err instanceof Error) {
    message = err.message;
  }
  return message;
};