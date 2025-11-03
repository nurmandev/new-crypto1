import React from "react";

interface UsersPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export const UsersPagination: React.FC<UsersPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`flex items-center justify-center w-[35px] h-[35px] rounded text-[13px] font-semibold transition-colors ${
            currentPage === i
              ? "bg-[#3CC27B] text-white"
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          {i}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="text-[17px] text-[#838383]">
        Showing {startItem} out of {totalItems}
      </div>

      <div className="flex items-center gap-3 h-[35px]">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="text-[13px] font-medium text-black hover:text-[#3CC27B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>

        <div className="flex gap-3">{renderPageNumbers()}</div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="text-[13px] font-medium text-black hover:text-[#3CC27B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};
