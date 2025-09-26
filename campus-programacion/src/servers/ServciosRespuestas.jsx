async function getRespuestas() {
    
    try {
        
        const response = await fetch("http://localhost:3001/Respuestas",{
        method:'GET',
        headers : {
            'Content-Type': 'application/json'
        }
        })
        const Respuestas = await response.json()
        
        return Respuestas

    } catch (error) {
        console.error("Error al obtener las Respuestas",error)
        throw error
    }
}




async function postRespuestas (consulta) {
    
    try {
        
        const response =await fetch("http://localhost:3001/Respuestas",{
        method:'POST',
        headers : {
            'Content-Type': 'application/json' },
        body:JSON.stringify(consulta)
        })
        const Respuestas = await response.json()
        
        return Respuestas

    } catch (error) {
        console.error("Error al guardar las Respuestas",error)
        throw error
    }
}



async function deleteRespuestas (id) {
    
    try {
        
        const response =await fetch("http://localhost:3001/Respuestas/"+ id,{
        method:'DELETE',
        headers : {
            'Content-Type': 'application/json'
        },
        })
        /* const products = await response.json()
        
        return products
 */
    } catch (error) {
        console.error("Error al eliminar las Respuestas",error)
        throw error
    }
}


async function putRespuestas (id, consulta) {
    
    try {
        
        const response =await fetch("http://localhost:3001/Respuestas/"+ id,{
        method:'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(consulta)
        })
        
    } catch (error) {
        console.error("Error al actualizar las Respuestas",error)
        throw error
    }
}

export default {putRespuestas,deleteRespuestas,postRespuestas,getRespuestas}