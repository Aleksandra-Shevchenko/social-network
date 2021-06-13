import React from 'react';
import preloader from '../../../images/preloader.svg';
import style from './Preloader.module.css';



function Preloader(props) {
  return (
    <img className={style.preloader} src={preloader} alt='#' />
  );
}

export default Preloader;