import { useState } from "react"

export const useCalculadora = () => {
  const [calcular, setcalcular] = useState(0)

  const handleSuma =()=>{
    setcalcular(calcular + 1)
  }
  
  const handleResta = () =>{
    if(calcular>0)
    setcalcular(calcular - 1)
  }
    return {
        calcular,
        handleSuma,
        handleResta
  }
}
