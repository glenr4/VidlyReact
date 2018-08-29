import React from "react";
import lodash from "lodash";
import PropTypes from "prop-types";

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

// Note: this type checking only shows a warning in the browser console
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired
};

export default Pagination;
