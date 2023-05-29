

function PicturePopup ({card, isOpen, onClose}) {
  const className = `popup popup-image ${isOpen? 'popup_active' : ''}`
  console.log(card)
  return((
    <div id="popup-img" className={className}>
      <div className="popup__image-container">
        <button className="popup__close" type="button" aria-label="Закрыть картинку" onClick={onClose}/>
        <img className="popup__image" src={card} alt="" />
        <h2 className="popup__heading"></h2>            
      </div>
    </div>
  ))
}

export default PicturePopup;




// import Popup from "./Popup.js";

// export default class PicturePopup extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);
//     this._image = this._popup.querySelector('.popup__image');
//     this._title = this._popup.querySelector('.popup__heading');
//   }

//   open({link, name}) {
//     this._image.src = link;
//     this._image.alt = name;
//     this._title.textContent = name;
//     super.open();
//   }
// };