import { useLoaderData } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Meal from "../Meal/Meal";

const Meals = () => {
  const data = useLoaderData();
  const meals = data.meals;
  console.log(meals);
  return (
    <div>
      {meals.length ? (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Meals;
