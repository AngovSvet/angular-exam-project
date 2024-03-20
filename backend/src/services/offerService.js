import { Offer } from "../models/Offers.js"


export const getAllOffers = () =>{
   return Offer.find()
}