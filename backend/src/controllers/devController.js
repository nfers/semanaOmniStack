const axios = require('axios');

const Dev = require('../models/Dev')


module.exports = {
<<<<<<< HEAD

    async index(req, res) {

        const { user } = req.headers;

        const devLogged = await Dev.findById(user);

        const devs = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: devLogged.likes } },
                { _id: { $nin: devLogged.dislikes } },
            ]
        })

        return res.json(devs);
    },

    async store(req, res) {

=======
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.deslikes } },
            ],
        })

        return res.json(users);
    },

    async store(req, res) {        
>>>>>>> e7061fa427dfa37c4f3ca1a621767cb88571079a
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        console.log(username)

        if (userExists)
            return res.json(userExists);

        try {
            const { data } = await axios.get(`https://api.github.com/users/${username}`)

            const { name, bio, avatar_url: avatar } = data;

            const dev = await Dev.create({
                name: name || username,
                user: username,
                bio,
                avatar,
            });

            return res.json(dev);
        } catch (error) {
            console.log(error)
            return res.json({ erro: 'O usuario informado não foi encontrado' })
        }
    }
}