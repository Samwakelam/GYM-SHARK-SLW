// packages
import React, { useEffect, useState, useCallback, useContext } from 'react';
// styles
import './Nav.css';
// context
import GenderContext from '../../context/GenderContext';


const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}

const Pagination = ({ totalRecords, pageLimit, pageNeighbours, onPageChanged }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages ] = useState([]);
  console.log('pages =', pages);
  console.log('currentPage =', currentPage);

  const { gender } = useContext(GenderContext);

  // If not specified, pageLimit defaults to 30
  pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
  totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
  // page Neighbours can be 0, 1, 2
  // number of additional page numbers to show on each side of the current page.
  pageNeighbours = typeof pageNeighbours === 'number'
    ? Math.max(0, Math.min(pageNeighbours, 2))
    : 0;
  console.log('pageNeighbours =', pageNeighbours);
  // Math.ceil ensures there is a page for any remaning records 
  // ie page limit 10, records 22 pages = 3
  const totalPages = Math.ceil(totalRecords / pageLimit);
  console.log('totalPages =', totalPages);

  const leftPage = 'left';
  const rightPage = 'right';

  const fetchPageNumbers = useCallback(() => {
    // this allows for (1) {pageNeighbours} [active page] {pageNeighbours} (x)
    const pageNumbersToShow = (pageNeighbours * 2) + 3;
    // allows for (<) (>)
    const totalBlocks = pageNumbersToShow + 2;
    // console.log('pageNumbersToShow =', pageNumbersToShow);
    // console.log('totalBlocks =', totalBlocks);

    // If totalPages is not greater than totalBlocks, 
    // you return a range of numbers from 1 to totalPages. 
    // Otherwise, you return the array of page numbers, 
    // with LEFT_PAGE and RIGHT_PAGE at points where you have 
    // pages spilling to the left and right, respectively.
    // console.log('(totalPages > totalBlocks) =', (totalPages > totalBlocks));
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      // console.log('startPage =', startPage);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      // console.log('endPage =', endPage);
      let pages = range(startPage, endPage);
      // console.log('function pages =', pages);
      const hiddenPagesLeft = startPage > 2;
      const hiddenPagesRight = (totalPages - endPage) > 1;
      const hiddenPagesTotal = pageNumbersToShow - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case (hiddenPagesLeft && !hiddenPagesRight): {
          const extraPages = range(startPage - hiddenPagesTotal, startPage - 1);
          pages = [leftPage, ...extraPages, ...pages];
          break;
        }
        // handle: (1) {2 3} [4] {5 6} > (10)
        case (!hiddenPagesLeft && hiddenPagesRight): {
          const extraPages = range(endPage + 1, endPage + hiddenPagesTotal);
          pages = [...pages, ...extraPages, rightPage];
          break;
        }
        // handle: (1) < {4 5} [6] {7 8} > (10)
        case (hiddenPagesLeft && hiddenPagesRight):
        default: {
          pages = [leftPage, ...pages, rightPage];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  },[ currentPage, pageNeighbours, totalPages]);

  const goToPage = (page) => {
    console.log('goToPage =', page); 
    // Math.max, retrun the number with the highest value
    // Math.min, return the number with the lowest value
    // page cant be more or less that total pages or 0 respectivley.
    const currentPage = Math.max(0, Math.min(page, totalPages));
    const paginationData = {
      currentPage: currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords,
    };

    setCurrentPage(currentPage); 
    onPageChanged(paginationData);
  }

  const handleMoveLeft = (event) => {
    event.preventDefault();
    console.log('move left currentPage =', currentPage);
    goToPage(currentPage - (pageNeighbours * 2) - 1 );
  }

  const handleMoveRight = (event) => {
    event.preventDefault();
    console.log('move right currentPage =', currentPage);
    goToPage(currentPage + (pageNeighbours * 2) + 1 );
  }

  const handleClick = (page) => (event) => {
    console.log('click page =', page);
    event.preventDefault();
    goToPage(page);
  }

  useEffect(() => {
    setPages(() => fetchPageNumbers());
    goToPage(currentPage);
  },[fetchPageNumbers]);

  // console.log('totalRecords =', totalRecords);
  // console.log('(!totalRecords || totalPages === 1) =', (!totalRecords || totalPages === 1));

  return (<>
    { (!totalRecords || totalPages === 1)
      ? null
      : (
        <nav className='nav-pagination' aria-label='exercise pagination'>
          <ul className='pagination'>
            {pages.map((page, index) => {

              if (page === leftPage) {
                return (
                  <li key={index} className={`page-item ${gender}`}>
                    <button
                      className="page-link"
                      // aria-label="Previous"
                      onClick={handleMoveLeft}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      {/* <span className="sr-only">Previous</span> */}
                    </button>
                  </li>
                );
              }

              if (page === rightPage) {
                return (
                  <li key={index} className={`page-item ${gender}`}>
                    <button
                      className="page-link"
                      // aria-label="Next"
                      onClick={handleMoveRight}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      {/* <span className="sr-only">Next</span> */}
                    </button>
                  </li>
                );
              }

              return (
                <li key={index} className={`page-item ${currentPage === page ? 'active' : ''} ${gender}`} >
                  <button
                    className="page-link"
                    onClick={handleClick(page)}
                  >
                    {page}
                  </button>
                </li>
              );

            })}
          </ul>
        </nav>
      )}
  </>);

}


export default Pagination;

