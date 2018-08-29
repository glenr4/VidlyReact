import React from "react";
import lodash from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">{createPageNav(pageCount)}</ul>
    </nav>
  );
};

const createPageNav = pageCount => {
  let component = [];

  for (let i = 1; i <= pageCount; i++) {
    component.push(
      <li key={i} className="page-item">
        <a className="page-link" href="#">
          {i}
        </a>
      </li>
    );
  }
  return component;
};

// const Pagination = props => {
// const { itemsCount, pageSize } = props;
// const pageCount = Math.ceil(itemsCount / pageSize);
//   const pages = lodash.range(1, pageCount + 1);
//   return (
//     <nav>
//       <ul className="pagination">
//         {pages.map(pageNum => (
//           <li key={pageNum} className="page-item">
//             <a className="page-link">{pageNum}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

export default Pagination;
