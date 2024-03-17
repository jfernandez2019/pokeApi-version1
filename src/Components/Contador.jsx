import { useCalculadora } from '../Hooks/useCalculadora'
export const Contador = () => {

   const{ calcular, handleSuma, handleResta }=useCalculadora(0)

    const handlesubmit = (e) => {
            e.preventDefault()
    }
    return (
        <form onSubmit={handlesubmit}>
            <h1>Contador</h1>
            <h3>{calcular}</h3>
            <button onClick={handleSuma}>Sumar</button>
            <button onClick={handleResta}>Restar</button>
        </form>
    )
}
