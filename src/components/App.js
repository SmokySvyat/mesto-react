import '../App.css';
import { useEffect, useState } from 'react';
import { api } from '../utils/Api.js';

import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ConfirmPopup from './ConfirmPopup.js';

function App() {
  const [isAvatarPopupOpen, setAvatarPopupOpen] = useState(false)
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false)
  const [isAddCardPopupOpen, setAddCardPopupOpen] = useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = useState(false)
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [cards, setCards] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleUpdateAvatar = (value) => {
    setIsLoading(true);

    api.setUserAvatar(value)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEditProfileClick = () => {
      setProfilePopupOpen(true)
  }

  const handleUpdateUser = (value) => {
    setIsLoading(true);

    api.patchProfile(value)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleAddCardClick = () => {
      setAddCardPopupOpen(true)
  }

  const handleAddCard = (value) => {
    setIsLoading(true);

    api.postCard(value)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardClick = (card)=>{
    setSelectedCard(card)
    setImagePopupOpen(true)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.like(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((i) => (i._id === card._id ? newCard : i))
        );
      })
      .catch((err) => console.log(err));
  }

  const handleDeleteClick = (card) => {
    setSelectedCard(card)
    setDeletePopupOpen(true)
  }

  function handleCardDelete(card) {
    setIsLoading(true);

    api.deleteCard(card._id)
      .then((item) => {
        setCards(cards.filter((item) => item._id !== card._id));
        closeAllPopups()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function closeAllPopups() {
    setAvatarPopupOpen(false)
    setProfilePopupOpen(false)
    setAddCardPopupOpen(false)
    setImagePopupOpen(false)
    setDeletePopupOpen(false)
    setSelectedCard(null)
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
          <Header />
          <Main 
            onEditProfile = {handleEditProfileClick}
            onAddCard = {handleAddCardClick}
            onEditAvatar = {handleEditAvatarClick}
            onDelete = {handleDeleteClick}
            onClose ={closeAllPopups}
            cards = {cards}
            user = {currentUser}
            onCardClick = {handleCardClick}
            onCardLike = {handleCardLike}
            
          />
          <Footer />

          <EditProfilePopup
            isOpen={isProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />

          <AddPlacePopup
            isOpen={isAddCardPopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddCard}
            isLoading={isLoading}
          />

          <EditAvatarPopup
            isOpen={isAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
          />

          <ConfirmPopup
            card = {selectedCard}
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            isLoading={isLoading}
            onDeleteCard = {handleCardDelete}
          />

          <ImagePopup
            card = {selectedCard}
            isOpen = {isImagePopupOpen}
            onClose = {closeAllPopups}
          />
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
