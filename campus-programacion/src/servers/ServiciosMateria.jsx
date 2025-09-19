async function getMaterias() {
    
    try {
        
        const response = await fetch("http://localhost:3001/Materias",{
        method:'GET',
        headers : {
            'Content-Type': 'application/json'
        }
        })
        const Materias = await response.json()
        
        return Materias

    } catch (error) {
        console.error("Error al obtener las Materias",error)
        throw error
    }
}




async function postMaterias (consulta) {
    
    try {
        
        const response =await fetch("http://localhost:3001/Materias",{
        method:'POST',
        headers : {
            'Content-Type': 'application/json' },
        body:JSON.stringify(consulta)
        })
        const Materias = await response.json()
        
        return Materias

    } catch (error) {
        console.error("Error al guardar las Materias",error)
        throw error
    }
}



async function deleteMaterias (id) {
    
    try {
        
        const response =await fetch("http://localhost:3001/Materias/"+ id,{
        method:'DELETE',
        headers : {
            'Content-Type': 'application/json'
        },
        })
        /* const products = await response.json()
        
        return products
 */
    } catch (error) {
        console.error("Error al eliminar las Materias",error)
        throw error
    }
}


async function putMaterias (id, consulta) {
    
    try {
        
        const response =await fetch("http://localhost:3001/Materias/"+ id,{
        method:'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(consulta)
        })
        
    } catch (error) {
        console.error("Error al actualizar las Materias",error)
        throw error
    }
}

export default {putMaterias,deleteMaterias,postMaterias,getMaterias}