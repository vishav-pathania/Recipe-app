import React from 'react'

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className='flex flex-col justify-center bg-white bg-opacity-20 backdrop-blur rounded-md mx-4 my-4 p-6 drop-shadow-lg'>
      <h1 className='font-bold text-2xl pb-8'>{title}</h1>
      <img src={image} alt="" className='max-w-[50%] inline-block rounded-md' />
      <div className=''>
        <ol>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>{calories}</p>
      </div>
    </div>
  )
}

export default Recipe