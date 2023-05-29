

function PopupWithForm (props) {
    const className = `popup ${props.isOpen ? 'popup_active' : ''}`
    return ((
    <div id={props.name} className={className}>
        <div className="popup__container">
            <form name="form-confirm-delete" className="popup-form">
              <button className="popup__close" type="button" aria-label="Закрыть картинку" onClick={props.onClose}/>
              <h2 className="popup-form__heading">{props.title}</h2>
              {props.children}
              <input className="popup-form__btn" type="submit" defaultValue={props.buttonValue} />
            </form>
        </div>
    </div>
    ))
};

export default PopupWithForm;






// import Popup from "./Popup.js";

// export default class PopupWithForm extends Popup {
//     constructor(popupSelector, {submitCallback}) {
//         super(popupSelector);
//         this._submitCallback = submitCallback;
//         this._form = this._popup.querySelector('.popup-form');
//         this._inputsList = Array.from(this._form.querySelectorAll('.popup-form__input'));
//         this._inputsValues = {};
//         this._buttonSubmit = this._popup.querySelector('.popup-form__btn');
//         this._buttonSubmitText = this._buttonSubmit.value;
//     }

//     _getInputValue() {
//         this._inputsList.forEach((input) => {
//             this._inputsValues[input.name] = input.value;
//         });

//         return this._inputsValues
//     };

//     setEventListeners() {
//         super.setEventListeners();
//         this._form.addEventListener('submit', (event) => {
//             event.preventDefault();
//             this._submitCallback(this._getInputValue());
//         });
//     };

//     renderLoading(isLoading, loadingText) {
//         if (!this._buttonSubmit) return;
//         if (isLoading) {
//             this._buttonSubmit.value = loadingText;
//         } else {
//           this._buttonSubmit.value = this._buttonSubmitText
//         }
//     };

//     close() {
//         super.close();
//         this._form.reset();
//     };

//     fillInputs(userData) {
//         this._inputsList.forEach((input) => {
//             input.value = userData[input.name] ?? '';
//         });
//       }
// }