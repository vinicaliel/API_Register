const validateBody = (request , response , next) =>{

const {body} = request

if(body.name === undefined){
    return response.status(400).json({message: 'O campo nome está vazio'})
}

if(body.name === ""){
    return response.status(400).json({message: 'O campo nome precisa ser informado'})
}

if(body.email === undefined){
    return response.status(400).json({message: 'O campo email está vazio'})
}

if(body.email === ""){
    return response.status(400).json({message: 'O campo email precisa ser informado'})
}

if(body.password === undefined){
    return response.status(400).json({message: 'O campo password está vazio'})
}

if(body.password === ""){
    return response.status(400).json({message: 'O campo password precisa ser informado'})
}


next();

}



module.exports = 
{validateBody


}