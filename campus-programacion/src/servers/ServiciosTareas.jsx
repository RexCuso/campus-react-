async function getTareas() {
    
    try {
        
        const response = await fetch("http://localhost:3001/tareas",{
        method:'GET',
        headers : {
            'Content-Type': 'application/json'
        }
        })
        const Tareas = await response.json()
        
        return Tareas

    } catch (error) {
        console.error("Error al obtener las Tareas",error)
        throw error
    }
}




async function postTareas (consulta) {
    
    try {
        
        const response =await fetch("http://localhost:3001/tareas",{
        method:'POST',
        headers : {
            'Content-Type': 'application/json' },
        body:JSON.stringify(consulta)
        })
        const Tareas = await response.json()
        
        return Tareas

    } catch (error) {
        console.error("Error al guardar los Tareas",error)
        throw error
    }
}



async function deleteTareas (id) {
    
    try {
        
        const response =await fetch("http://localhost:3001/tareas/"+ id,{
        method:'DELETE',
        headers : {
            'Content-Type': 'application/json'
        },
        })
        /* const products = await response.json()
        
        return products
 */
    } catch (error) {
        console.error("Error al eliminar los Tareas",error)
        throw error
    }
}


async function putTareas (id, consulta) {
    
    try {
        
        const response =await fetch("http://localhost:3001/tareas/"+ id,{
        method:'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(consulta)
        })
        
    } catch (error) {
        console.error("Error al actualizar los Tareas",error)
        throw error
    }
}

export default {putTareas,deleteTareas,postTareas,getTareas}