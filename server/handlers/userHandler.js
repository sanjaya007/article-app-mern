// get users from db then return
const getUsers = (req, res) => {
    const user = {
        name: "Min",
        age: 19
    }
    res.json( user )
}

const addUser = (req, res) => {
    res.send("User added!")
}

module.exports = {
    getUsers,
    addUser
}