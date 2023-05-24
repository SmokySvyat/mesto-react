import '../App.css';
import Header from '../components/Header.js'
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'

function App() {
  return (
    <div>
        <Header />
        <Main />
        <Footer />
        
        <div id="popup-edit" className="popup">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть форму редактирования" />
            <form name="form-profile" className="popup-form" noValidate>
              <h2 className="popup-form__heading">Редактировать профиль</h2>
              <div className="popup-form__input-section">
                <input id="name" className="popup-form__input" type="text" name="name" placeholder="Ваше имя" minLength={2} maxLength={40} required />
                <span className="popup__error" />
              </div>
              <div className="popup-form__input-section">
                <input id="job" className="popup-form__input" type="text" name="about" placeholder="Кратко о себе" minLength={2} maxLength={200} required />
                <span className="popup__error" />
              </div>
              <input className="popup-form__btn" type="submit" defaultValue="Сохранить" />
            </form>
          </div>
        </div>

        <div id="popup-add" className="popup">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть форму добавления картинки" />
            <form name="form-add-card" className="popup-form" noValidate>
              <h2 className="popup-form__heading">Новое место</h2>
              <div className="popup-form__input-section">
                <input id="place" className="popup-form__input" type="text" name="place" placeholder="Название" minLength={2} maxLength={30} required />
                <span className="popup__error popup__error_active" />
              </div>
              <div className="popup-form__input-section">
                <input id="place-link" className="popup-form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="popup__error popup__error_active" />
              </div>
              <input className="popup-form__btn popup-form__btn_inactive" type="submit" defaultValue="Создать" />
            </form>
          </div>
        </div>

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

        <div id="popup-change-avatar" className="popup">
          <div className="popup__container">
            <form name="form-change-avatar" className="popup-form">
              <button className="popup__close" type="button" aria-label="Закрыть картинку" />
              <h2 className="popup-form__heading">Обновить аватар</h2>
              <div className="popup-form__input-section">
                <input id="avatar-link" className="popup-form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="popup__error popup__error_active" />
              </div>
              <input className="popup-form__btn" type="submit" defaultValue="Да" />
            </form>
          </div>
        </div>

        <template id="card-template">
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
        </template>

      </div>
  );
}

export default App;
