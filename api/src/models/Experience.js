import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    name: String,
    price: Number,
    ubication: String,
    kindOfExp: String,
    eventDate: String,
    image: [String],
    url: String,
    description: String,
}, {
    timestamps: true,
    versionKey: false,
});

export default mongoose.model('Experience', experienceSchema);