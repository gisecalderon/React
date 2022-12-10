import React from 'react'
import CustomButtom from '../customButton/CustomButton'


const itemListContainer = ( {greeting} ) => {
  
  console.log(saludo1)
  console.log(saludo2)
  return (
    <div>
      <h2>{greeting}</h2>
      <CustomButtom texto={"Comprar"}/>
    </div>
  )
}

export default itemListContainer