
const registerModule = require('../molule/registerModule')

const getUsers = async(_request , response) =>{
    const users = await registerModule.getUsers();
    return response.status(200).json(users)
}

const addUser = async(request , response)=>{
    const createdUser = await registerModule.addUser(request.body)
    return response.status(201).json(createdUser)
}

const updateUser = async(request , response) =>{

const {id} = request.params
await registerModule.updateUser(id,request.body)
return response.status(204).json()

}

const deleteUser = async(request , response) =>{

    const {id} = request.params
    await registerModule.deleteUser(id)
    return response.status(204).json()
}



module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}