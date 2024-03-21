import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  console.log(error);
  return (
    <div>
      <p className="text-red">{error.error.message}</p>
      <button className="btn btn-warning" onClick={handleBack}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
