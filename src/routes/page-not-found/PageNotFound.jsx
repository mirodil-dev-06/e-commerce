import React from "react";
import { Container } from "../../utils/Utils";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center min-h-[70vh] text-center py-10">
        <h1 className="text-6xl sm:text-7xl md:text-[120px] font-bold text-gray-800 mb-4">
          404
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 px-4 sm:px-6 md:px-0">
          The page you visited was not found. You may go back to the home page.
        </p>
        <Link
          to="/"
          className="inline-block py-3 px-6 sm:py-4 sm:px-8 bg-[#8A33FD] text-white rounded-md hover:opacity-85 transition"
        >
          Back to Home Page
        </Link>
      </div>
    </Container>
  );
};

export default PageNotFound;
