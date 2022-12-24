import React from "react";

type LoaderVideoCardProps = {};

const LoaderVideoCard: React.FC<LoaderVideoCardProps> = () => {
  return (
    <>
      <div className="flex flex-wrap p-7">
        <div
          role="status"
          className="flex justify-center items-center max-w-sm  h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
          <svg
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 384 512"
          >
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default LoaderVideoCard;
