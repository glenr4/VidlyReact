import React from "react";
import lodash from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChanged } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = lodash.range(1, pageCount + 1);

  if (pageCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(pageNum => (
          <li
            key={pageNum}
            className={
              pageNum === currentPage ? "page-item active" : "page-item"
            }
          >
            <a onClick={() => onPageChanged(pageNum)} className="page-link">
              {pageNum}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
