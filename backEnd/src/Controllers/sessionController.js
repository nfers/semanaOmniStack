const User = require('../Models/user');

module.exports = {
    async store(req, res) {
       
        const { email } = req.body;           
       
        let user = await User.findOne({ email });
            if (!user) {
                user = await User.create({ email });
            }               
        return res.json(user);
    }    
};
