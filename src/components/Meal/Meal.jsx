import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Meal = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb, strInstructions } = meal;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const showDetailsMeal = (mealID) => {
    console.log("showDetails Click", mealID);
    navigate(`/meal/${mealID}`);
  };
  return (
    <div className="border-[1px] border-solid border-slate-700 shadow-xl rounded-xl bg-slate-600 text-white p-6 space-y-3 flex flex-col justify-between">
      <div>
        <div>
          <img
            className="object-cover w-[355px] mx-auto rounded-xl"
            src={strMealThumb}
            alt={`${strMeal} picture`}
          />
        </div>
        <div className="space-y-6">
          <p className="text-2xl underline">{strMeal}</p>
          {strInstructions.length > 350 ? (
            <p>
              {strInstructions.slice(0, 350)}
              {strInstructions.length > 350 ? "......." : ""}
            </p>
          ) : (
            <p className="mt-5">{strInstructions}</p>
          )}
        </div>
      </div>
      <div className="space-x-6">
        <button
          onClick={() => showDetailsMeal(idMeal)}
          className="btn text-2xl"
        >
          See Details
        </button>
        <button onClick={handleBack} className="btn btn-secondary text-2xl">
          Go Back
        </button>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default Meal;
