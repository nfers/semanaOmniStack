const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
<<<<<<< HEAD
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
},
    {
        timestamps: true,
    });
=======
    deslikes: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }], 
}, {
    timestamps: true,
});

>>>>>>> e7061fa427dfa37c4f3ca1a621767cb88571079a

module.exports = model('Dev', DevSchema);