import React from 'react';

function InfoTooltip( {popupOpen, closePopup, message, isClosed, isOpened, closePopupsOnOutsideClick, closePopupHello  } ) {
  return (
    <div className={`popup ${message ? "popup__opened" : "popup__notactive"}`}>
      <div className="popup__box">
        <p className="popup__message">
          {message ? message.text : ' '}</p>
        <div className="popup__button-close" onClick={closePopupsOnOutsideClick}></div>
      </div>
    </div>
  );
}

export default InfoTooltip;
