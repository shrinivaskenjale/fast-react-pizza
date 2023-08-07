import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="my-10 text-center">
      <h1>Something went wrong 😢</h1>
      <p>{error.message || error.data}</p>
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Go back
      </button>
    </div>
  );
};

export default Error;
