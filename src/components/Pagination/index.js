import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PaginationButton, PaginationItem } from './styles';

import * as actions from '../../store/modules/list/actions';

function Pagination(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.list.page);
  const [maxPages, setMaxPages] = useState([]);
  const numbersOfPages = Math.ceil(props.maxOfPage / 15);

  function Paginator() {
    const arrayPages = [];
    let pagesToShow = [];

    if (numbersOfPages <= 11) {
      for (let i = 1; i < numbersOfPages; i++) {
        pagesToShow.push(i);
      }
      return setMaxPages(pagesToShow);
    }

    for (let i = 1; i <= numbersOfPages; i++) {
      arrayPages.push(i);
    }
    for (let i = 1; i <= 10; i++) {
      pagesToShow.push(currentPage + i);
    }
    if (pagesToShow.indexOf(numbersOfPages) !== -1) {
      pagesToShow = [];
      for (let i = 1; i <= 10; i++) {
        pagesToShow.push(numbersOfPages - i);
        pagesToShow.sort((a, b) => a - b);
        setMaxPages(pagesToShow);
      }
    }

    if (currentPage !== numbersOfPages) {
      setMaxPages(pagesToShow);
    } else {
      pagesToShow = [];
      for (let i = 1; i <= 10; i++) {
        pagesToShow.push(numbersOfPages - i);
        pagesToShow.sort((a, b) => a - b);
        setMaxPages(pagesToShow);
      }
    }
  }

  useEffect(() => {
    Paginator();
  }, [currentPage]);

  function handleClick(page) {
    dispatch(actions.changePage({ page }));
  }

  return (
    <PaginationButton>
      {currentPage !== 1 && (
        <PaginationItem onClick={() => handleClick(1)} isSelect>
          1
        </PaginationItem>
      )}

      <PaginationItem onClick={() => handleClick(currentPage)} isSelect>
        {currentPage}
      </PaginationItem>

      {maxPages.map((i) => {
        return (
          <PaginationItem onClick={() => handleClick(i)} key={i} className={i}>
            {i}
          </PaginationItem>
        );
      })}

      <PaginationItem onClick={() => handleClick(numbersOfPages)}>
        {numbersOfPages}
      </PaginationItem>
    </PaginationButton>
  );
}

export default Pagination;
