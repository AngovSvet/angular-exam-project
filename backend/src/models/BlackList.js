import mongoose from 'mongoose'

const tokenBlacklistSchema = new mongoose.Schema({
    token: String,
}, { timestamps: { createdAt: 'created_at' } });


export const BlackList= mongoose.model('Blacklist', tokenBlacklistSchema);