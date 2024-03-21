import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Recipe = ({ recipe }) => {
  const { strCategoryThumb, strCategoryDescription, strCategory } = recipe;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="border-[1px] border-solid border-slate-700 shadow-xl rounded-xl bg-slate-600 text-white p-6 space-y-3 flex flex-col justify-between">
      <div>
        <div>
          <img
            className="object-cover w-[355px] mx-auto rounded-xl"
            src={strCategoryThumb}
            alt={`${strCategory} picture`}
          />
        </div>
        <div>
          <p className="text-2xl underline">{strCategory}</p>
          <p className="mt-5">{strCategoryDescription}</p>
        </div>
      </div>
      <div className="space-x-6">
        <button className="btn text-2xl">See Details</button>
        <button onClick={handleBack} className="btn btn-secondary text-2xl">
          Go Back
        </button>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
