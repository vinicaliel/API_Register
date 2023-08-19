const connection = require('./connection')

const getUsers = async() => {
    const [users] = await connection.execute('SELECT * FROM users')
    return users
}

const addUser = async(user) =>{

    const {name , email , password} = user

    const query = ('INSERT INTO users(name , email , password) VALUES(?,?,?)')
    const [createdUser] = await connection.execute(query,  [name , email , password])
    return createdUser

}

const updateUser = async(id , user)=>{

    const {name , email , password} = user

    const query = 'UPDATE users SET name = ?, email = ? , password = ? WHERE id = ? '
    const [updatedUser] = await connection.execute(query,  [name , email , password , id])
    return updatedUser
}

const deleteUser = async(id) =>{

    const deleteduser = await connection.execute('DELETE FROM users WHERE id=?' , [id])
    return deleteduser

    
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}