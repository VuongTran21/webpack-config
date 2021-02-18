import { useState } from "react";

const shieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const gauntletRecipe = {
  ...shieldRecipe,
  leather: 1,
  refinedMoonstone: 8,
};

function Recipes() {
  const [recipe, setRecipe] = useState({});

  return (
    <>
      <h3>Recipes</h3>
      <button onClick={() => setRecipe(shieldRecipe)}>Shield Recipe</button>
      <button onClick={() => setRecipe(gauntletRecipe)}>Gauntlet Recipe</button>
      <ul>
        {Object.keys(recipe).map((material, index) => (
          <li key={index}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Recipes;
