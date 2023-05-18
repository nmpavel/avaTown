import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className=" my-12 flex justify-center ">
      <ul className=" bg-gray-200 p-4 rounded-2xl shadow-2xl flex items-center justify-center space-x-2">
        <li>
          <button
            className={`${
              currentPage === 1 ? "bg-red-600 cursor-not-allowed" : ""
            } bg-black text-white font-bold rounded-md p-2`}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>

        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`${
              currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-white"
            } rounded-md p-2 hover:bg-blue-500 hover:text-white`}
          >
            <button onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}

        <li>
          <button
            className={`${
              currentPage === totalPages
                ? " bg-red-600 cursor-not-allowed"
                : " "
            } bg-black text-white font-bold rounded-md p-2`}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
