import React from 'react';
import Button from "src/components/UI/Button/Button";
import { usePagination } from "src/hooks/usePagination";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePagination(totalPages);

  return (
      <ul className="pagination">
        {
          pagesArray.map((p) => {
            return(
                <li key={p}>
                  <Button
                      className={p === page ? 'page active' : 'page'}
                      onClick={() => changePage(p)}
                  >
                    {p}
                  </Button>
                </li>
            );
          })
        }
      </ul>
  );
};

export default Pagination;