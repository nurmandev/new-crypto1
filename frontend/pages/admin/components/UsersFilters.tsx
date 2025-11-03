import React from "react";
import { Filter, Calendar } from "lucide-react";

interface UsersFiltersProps {
  onFilterClick: () => void;
  onDateRangeClick: () => void;
}

export const UsersFilters: React.FC<UsersFiltersProps> = ({
  onFilterClick,
  onDateRangeClick,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onFilterClick}
        className="flex items-center gap-2.5 h-[29px] px-2.5 py-1.5 bg-black text-white text-xs rounded hover:bg-gray-800 transition-colors"
      >
        <Filter className="w-3 h-3" />
        <span>Filter</span>
      </button>
      <button
        onClick={onDateRangeClick}
        className="flex items-center gap-2.5 h-[29px] px-2.5 py-1.5 bg-black text-white text-xs rounded hover:bg-gray-800 transition-colors"
      >
        <Calendar className="w-3 h-3" />
        <span>Date Range</span>
      </button>
    </div>
  );
};
