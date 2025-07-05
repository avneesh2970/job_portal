
import React from "react";

function Pagination({ totalJobs, jobsPerPage, currentPage, setCurrentPage }) {
    const totalPages = Math.ceil(totalJobs / jobsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Function to generate page numbers dynamically
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage > 4) pages.push(1, "...");

            let start = Math.max(2, currentPage - 2);
            let end = Math.min(totalPages - 1, currentPage + 2);

            for (let i = start; i <= end; i++) pages.push(i);

            if (currentPage < totalPages - 3) pages.push("...", totalPages);
        }
        return pages;
    };

    return (
        <div className="mt-8 flex justify-center items-center space-x-2 text-sm">
            {/* Previous Button */}
            <button
                className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>

            {/* Dynamic Page Buttons */}
            {getPageNumbers().map((page, index) =>
                page === "..." ? (
                    <span key={index} className="px-2 text-white-500">
                        {page}
                    </span>
                ) : (
                    <button
                        key={page}
                        className={`px-3 py-1 rounded-md ${currentPage === page ? "bg-[#4f46e5] text-white" : "text-white-600 hover:bg-blue-400"}`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next Button */}
            <button
                className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
