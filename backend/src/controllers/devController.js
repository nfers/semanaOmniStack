const axios = require('axios');
const Dev = require('../models/Dev')


module.exports = {

    async index(req, res) {

        const { user } = req.headers;

        const devLogado = await Dev.findById(user);

        const devs = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: devLogado.likes } },
                { _id: { $nin: devLogado.dislikes } },
            ]
        })

        return res.json(devs);
    },

    async store(req, res) {

        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

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