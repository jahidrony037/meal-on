import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const navigate = useNavigate();
  const data = useLoaderData();
  const {
    strCategory,
    strMeal,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = data.meals[0];
  console.log(data.meals[0]);
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="border-[1px] border-solid border-slate-700 shadow-xl rounded-xl bg-slate-600 text-white p-6 space-y-3 flex flex-col justify-between">
        <div>
          <div>
            <img
              className="object-cover w-auto mx-auto rounded-xl"
              src={strMealThumb}
              alt={`${strMeal} picture`}
            />
          </div>
          <div className="space-y-6">
            <p>Category: {strCategory}</p>
            <p>Area:{strArea} </p>
            <p className="text-2xl underline">{strMeal}</p>
            {isExpanded ? (
              <p className="text-xl">{strInstructions}</p>
            ) : (
              <p>
                {strInstructions.slice(0, 250)}
                {strInstructions.length > 250 ? "..." : ""}
              </p>
            )}
            {strInstructions.length > 250 && (
              <button className="btn btn-info" onClick={toggleExpand}>
                {isExpanded ? "See less" : "See more"}
              </button>
            )}
          </div>
          <div className="mt-10">
            <p className="text-center">Tutorial </p>
            <video controls width="100%">
              <source src={strYoutube} type="video/webm" />
              <source src={strYoutube} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="space-x-6">
          <button onClick={handleBack} className="btn btn-secondary text-2xl">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
