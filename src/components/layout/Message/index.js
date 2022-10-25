/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import style from './style.module.css';

function Message({ type, message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }

    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [message]);

  return (
    <>
      {visible && (
        <span className={`${style.message} ${style[type]}`}>{message}</span>
      )}
    </>
  );
}

export default Message;
