import React from 'react'
import { useEffect,useState } from 'react'

//para el ejemplo se utilizo el jsonplaceholder
export const Recorrido = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [data, setdata] = useState([])
    //para hacer el recorrido es tan sencillo como una funcion flecha con async y await
    //la data debo de usarla como estado y el json de la respuesta setearla en la data
    //el useState debe iniciar con un arreglo o sea corchetes
    const getFecht = async () => {
        const response = await fetch(url)
        const jsondata = await response.json()
        setdata(jsondata)

    }

    //siempre que se llame a una funcion asincrona se debe usar el useEffect

    useEffect(() => {
        getFecht()
    }, [])

    //dentro del return debo mapear la data de la api, uso llaves y una funcion dentro de las llaves
    //{data.map(users => {y dentro la estructura en la que guardare la informacion que traiga la api})}
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">USERNAME</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user) => {
                    return(
                        <tr key={user.id}> 
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>
                    )
                })
                }

            </tbody>
        </table>
    )
}
