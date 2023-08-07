const userModel = require('../Model/user')


const createUser = async (req, res, next) => {
    console.log(req.body)


    try {
        const newUser = new userModel({
            address: req.body.address,
        });
        const datas = await newUser.save();
        console.log(datas)
        res.send({
            message: "Customer created successfully",
            status: 201,
            data: datas
        })

    }
    catch (err) {
        res.send({
            message: err.message,
            status: 404
        })
    }
}

module.exports = {
    createUser
}