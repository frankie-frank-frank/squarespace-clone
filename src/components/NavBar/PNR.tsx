import React, {FC} from "react";

interface InputProps {
  productsRef: React.MutableRefObject<HTMLButtonElement>
  resourcesRef: React.MutableRefObject<HTMLButtonElement>
}

export const PNR: FC<InputProps> = ({productsRef, resourcesRef}): JSX.Element => {
  return (
    <div className="flex py-2 space-x-4">
      <button ref={productsRef} className="text-sm text-white font-bold py-2 px-4 rounded h-10 flex group-hover:text-white">
        PRODUCTS{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <button className="text-sm text-white font-bold py-2 px-4 rounded h-10">
        TEMPLATE
      </button>
      <button ref={resourcesRef} className="text-sm text-white font-bold py-2 px-4 rounded h-10 flex">
        RESOURCES{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default PNR;