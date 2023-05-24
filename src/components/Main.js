import avatar from '../images/avatar.svg'

function Main() {
    // handleEditAvatarClick = () => {}

    // handleEditProfileClick = () => {
    //     const buttonEdit = document.querySelector('.profile-edit');
    //     const popupEdit = document.querySelector('#popup-edit');

    //     buttonEdit.addEventListener('click', () => {
    //         popupEdit.classList.add('popup_active')
    //     })
    // }

    // handleAddPlaceClick = () => {}

    return ((
        <main className="main">
          <section className="profile">
            <div className="profile__avatar-overlay" />
            <img className="profile__avatar" src={avatar} alt="аватар пользователя" />
            <h1 className="profile__name">Ninel</h1>
            <p className="profile__job">jurnalista</p>
            <button className="profile__edit" type="button" aria-label="Редактировать">
            </button>
            <button className="profile__add" type="button" aria-label="Добавить фотографию">
            </button>
          </section>
          <section>
            <ul className="cards">
            </ul>
          </section>
        </main>
    ))
}

export default Main