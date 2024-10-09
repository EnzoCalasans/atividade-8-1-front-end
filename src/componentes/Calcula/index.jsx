import React from 'react'
import { useState } from 'react'

const Calcula = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const calculeImc = (peso / ((altura / 100) ** 2)).toFixed(2)
        alert(calculeImc)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Peso (kg):
                    <input
                        type='number'
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Altura (cm):
                    <input 
                        type="number" 
                        value={altura} 
                        onChange={(e) => setAltura(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Calcular IMC</button>
            </form>
        </>
    )
}

export default Calcula