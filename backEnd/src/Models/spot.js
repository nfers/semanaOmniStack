const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number, 
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    
},
    {
    toJSON: {
        virtuals: true,
    },
});
console.log(mongoose.Schema.Types.ObjectId);
SpotSchema.virtual('thumbnail_url').get(function() {
    
    return `http://localhost:3331/files/${this.thumbnail}`
    
})

module.exports = mongoose.model('Spot', SpotSchema);