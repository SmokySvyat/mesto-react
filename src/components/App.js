import '../App.css';
import { useEffect, useState } from 'react';
import { api } from '../utils/Api.js';

import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PicturePopup from './PicturePopup.js';

function App() {
  const [isAvatarPopupOpen, setAvatarPopupOpen] = useState(false)
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false)
  const [isAddCardPopupOpen, setAddCardPopupOpen] = useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = useState(false)
  const [cards, setCards] = useState([])
  const [user, setCurrentUser] = useState([])
  const [selectedCard, setSelectedCard] = useState({});


  const handleEditAvatarClick = () => {
    setAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
      setProfilePopupOpen(true)
  }

  const handleAddCardClick = () => {
      setAddCardPopupOpen(true)
  }

  const handleCardClick = (card)=>{
    setSelectedCard(card);
    console.log(card)
    setImagePopupOpen(true)
  }

  function closeAllPopups() {
    setAvatarPopupOpen(false)
    setProfilePopupOpen(false)
    setAddCardPopupOpen(false)
    setImagePopupOpen(false)
    setSelectedCard({})
  }

  useEffect(() => {
    Promise.all([api.getProfile(), api.getCard()])
    .then(([user, cards]) => {
      setCurrentUser(user)
      setCards(cards)
    })
    .catch((err) => console.log(err))
  },[])

  return (
    <div>
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardClick}
          onEditAvatar={handleEditAvatarClick}
          onClose ={closeAllPopups}
          cards = {cards}
          user = {user}
          onCardClick ={handleCardClick}
        />
        <Footer />

        <PopupWithForm
        name = "popup-edit"
        title = "Редактировать профиль"
        buttonValue = "Сохранить"
        isOpen = {isProfilePopupOpen}
        onClose = {closeAllPopups}
        >
          <div className="popup-form__input-section">
            <input id="name" className="popup-form__input" type="text" name="name" placeholder="Ваше имя" minLength={2} maxLength={40} required />
            <span className="popup__error" />
          </div>
          <div className="popup-form__input-section">
            <input id="job" className="popup-form__input" type="text" name="about" placeholder="Кратко о себе" minLength={2} maxLength={200} required />
            <span className="popup__error" />
          </div>
        </PopupWithForm>

        <PopupWithForm
        name = "popup-add"
        title = "Новое место"
        buttonValue = "Создать"
        isOpen = {isAddCardPopupOpen}
        onClose = {closeAllPopups}
        >
          <div className="popup-form__input-section">
            <input id="place" className="popup-form__input" type="text" name="place" placeholder="Название" minLength={2} maxLength={30} required />
            <span className="popup__error popup__error_active" />
          </div>
          <div className="popup-form__input-section">
            <input id="place-link" className="popup-form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__error popup__error_active" />
          </div>
        </PopupWithForm>

        <PopupWithForm
        name = "popup-change-avatar"
        title = "Обновить аватар"
        buttonValue = "Да"
        isOpen = {isAvatarPopupOpen}
        onClose = {closeAllPopups}
        >
          <div className="popup-form__input-section">
            <input id="avatar-link" className="popup-form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__error popup__error_active" />
          </div>
        </PopupWithForm>

        <PicturePopup
        card = {selectedCard}
        isOpen = {isImagePopupOpen}
        onClose = {closeAllPopups}
        />

        <div id="popup-img" className="popup popup-image">
          <div className="popup__image-container">
            <button className="popup__close" type="button" aria-label="Закрыть картинку" />
            <img className="popup__image" src="#" alt="#" />
            <h2 className="popup__heading" />            
          </div>
        </div>

        <div id="popup-confirm-delete" className="popup">
          <div className="popup__container">
            <form name="form-confirm-delete" className="popup-form">
              <button className="popup__close" type="button" aria-label="Закрыть картинку" />
              <h2 className="popup-form__heading popup-form__confirm-heading">Вы уверены?</h2>
              <input className="popup-form__btn" type="submit" defaultValue="Да" />
            </form>
          </div>
        </div>

        {/* <template id="card-template">
          <li className="card">
            <button className="card__del" type="button" aria-label="Удалить" />
            <img className="card__img" src="#" alt="#" />
            <h2 id="place-name" className="card__text" />
            <div>
              <button id="like" className="card__like" type="button" aria-label="Нравится" data-path="template">
              </button>
              <p className="card__like-counter" />
            </div>
          </li>
        </template> */}

      </div>
  );
}

export default App;