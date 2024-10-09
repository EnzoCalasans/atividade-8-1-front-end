import React from 'react'
import { useState } from 'react'
import './Calcula.css'

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
            <form className="form-container" onSubmit={handleSubmit}>
                    <label>Peso (kg):</label>
                    <input
                        type='number'
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                    />
                    
                
                    <label>Altura (cm):</label>
                    <input 
                        type="number" 
                        value={altura} 
                        onChange={(e) => setAltura(e.target.value)} 
                        required 
                    />
                   
                
                <button type="submit">Calcular IMC</button>
            </form>
        </>
    )
}

export default Calcula