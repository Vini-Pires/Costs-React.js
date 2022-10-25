import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

function LinkButton({ toWhere, text, animation }) {
  return (
    <Link
      to={toWhere}
      className={`${style.btn} ${
        animation === 'pulse' && style.animation_pulse
      }`}
    >
      {text}
    </Link>
  );
}

export default LinkButton;
