import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const allRecipes = useLoaderData();
  const recipes = allRecipes.categories;
  console.log(recipes);
  return (
    <div className="text-center">
      <h1 className="text-3xl">All Recipes Here: {recipes.length}</h1>
      <div className="grid md:grid-cols-3 grid-cols-1  gap-6 mt-3">
        {recipes.map((recipe) => (
          <Recipe key={recipe.idCategory} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
