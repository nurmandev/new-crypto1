import React from "react";

interface RequestsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export const RequestsPagination: React.FC<RequestsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    for (let i = 1; i <= Math.min(totalPages, maxPagesToShow); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`flex w-[35px] h-[35px] items-center justify-center rounded-sm text-[13px] font-semibold ${
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
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 border-t border-[#E0E0E0]">
      <div className="text-xs sm:text-sm md:text-[17px] text-[#838383]">
        Showing {startItem} - {endItem} of {totalItems}
      </div>

      <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap justify-center">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-black disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
        >
          Prev
        </button>

        <div className="flex gap-1 md:gap-2">{renderPageNumbers()}</div>

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-black disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
        >
          Next
        </button>
      </div>
    </div>
  );
};
