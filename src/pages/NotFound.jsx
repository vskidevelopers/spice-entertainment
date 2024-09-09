import { Link, useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  let error = useRouteError();
  console.error("not found error >> ", error);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
