import { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const appId = '9f54d0b7';
    const appKey = '95d89b48a030319cb7919c0d77466d25';
    
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${appId}&app_key=${appKey}`)
      .then((res) => res.json())
      .then((apiData) => setData(apiData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data &&
        data.hits.map((item) => (
          <div key={item.id}>
            <h2>{item.recipe.label}</h2>
            <img src={item.recipe.image} alt={item.recipe.label} />
            <p>Ingredients:</p>
            <ul>
              {item.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>
              <a href={item.recipe.url} target="_blank" rel="external noopener noreferrer">
                Instructions
              </a>
            </p>
            <p>Calories: {item.recipe.calories.toFixed(2)}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;