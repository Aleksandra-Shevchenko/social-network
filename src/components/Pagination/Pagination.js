import style from './Pagination.module.css';


function Pagination({ totalCount, pageSize, currentPage, onClick }) {

  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }

  
  return (
    <div>
      {pages.map((p) => {
        return <button
          key={p}
          className={`${style.page} ${p === currentPage && style.page_active}`}
          onClick={() => onClick(p)}
        >
          {p}
        </button>
        }
      )}
    </div>
  );
};
  
export default Pagination;