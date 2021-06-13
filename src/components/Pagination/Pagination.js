import React from 'react';
import style from './Pagination.module.css';


function Pagination({ totalCount, pageSize, currentPage, onClick, portionSize = 10}) {

  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }

  const [portionNumber, setPortionNumber] = React.useState(1);

  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftBorderNumber = (portionNumber - 1) * portionSize + 1;
  const rightBorderNumber = portionNumber * portionSize;


  function handleLeftClick() {
    setPortionNumber(portionNumber - 1);
    onClick((portionNumber - 2) * portionSize + 1);
  }

  function handleRightClick() {
    setPortionNumber(portionNumber + 1);
    onClick(portionNumber * portionSize + 1);
  }

  React.useEffect(()=> {
    setPortionNumber(Math.ceil(currentPage / portionSize))
  }, [currentPage, portionSize]);

  
  return (
    <div className={style.paginator}>
      {portionNumber > 1 && (
        <button className={`${style.left} ${style.arrow}`} onClick={handleLeftClick} />
      )}
      {pages
        .filter((p) =>  p >= leftBorderNumber && p <= rightBorderNumber)
        .map((p) => { return (
          <button
            key={p}
            className={`${style.page} ${p === currentPage && style.page_active}`}
            onClick={() => onClick(p)}
          >
            {p}
          </button>
        )}
      )}
      {portionCount > portionNumber && (
        <button className={`${style.right} ${style.arrow}`} onClick={handleRightClick} />
      )}
    </div>
  );
};
  
export default Pagination;