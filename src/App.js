import { useEffect, useState } from 'react';
import Recipe from './Recipe';

function App() {
  const APP_ID = "API'S SECRET ID"
  const APP_KEY = "API'S SECTRET KEY"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query])


  const getRecipes = async () => {
    // const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const response = await fetch("data.json")
    const data = await response.json();
    console.log(data)
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="max-w-screen-lg flex flex-col justify-center p-8 md:p-16 !bg-white bg-gradient-to-r from-[#fa709a] to-[#fee140] min-w-full">
      <form onSubmit={getSearch} className="flex justify-center space-x-10">
        <input className='inline-block border-2 rounded-md px-2 border-gray-200 outline-none focus:border-gray-400 py-1 w-[50%] md:min-w-[400px]' type="text" value={search} onChange={updateSearch} />
        <button className='inline-block bg-teal-600 outline-none text-white font-bold px-3 py-2 rounded-md active:scale-90 duration-100' type='submit'>Search</button>
      </form>
      <div className='flex flex-wrap justify-center py-8'>
        {
          recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
