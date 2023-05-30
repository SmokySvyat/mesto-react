import '../App.css';
import { useEffect, useState } from 'react';
import { api } from '../utils/Api.js';

import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isAvatarPopupOpen, setAvatarPopupOpen] = useState(false)
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false)
  const [isAddCardPopupOpen, setAddCardPopupOpen] = useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = useState(false)
  const [cards, setCards] = useState([])
  const [user, setCurrentUser] = useState([])
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getCard()])
    .then(([user, cards]) => {
      setCurrentUser(user)
      setCards(cards)
    })
    .catch((err) => console.log(err))
  },[])

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
    setSelectedCard(card)
    setImagePopupOpen(true)
  }

  function closeAllPopups() {
    setAvatarPopupOpen(false)
    setProfilePopupOpen(false)
    setAddCardPopupOpen(false)
    setImagePopupOpen(false)
    setSelectedCard(null)
  }


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

        <ImagePopup
        card = {selectedCard}
        isOpen = {isImagePopupOpen}
        onClose = {closeAllPopups}
        />
      </div>
  );
}

export default App;
