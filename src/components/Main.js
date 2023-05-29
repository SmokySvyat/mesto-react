import Card from './Card.js'

function Main({
    onEditAvatar,
    onEditProfile,
    onAddCard,
    onCardClick,
    cards,
    user
  }) {

    return ((
        <main className="main">
          <section className="profile">
            <div className="profile__avatar-overlay" onClick={onEditAvatar}/>
            <img className="profile__avatar" src={user.avatar} alt="аватар пользователя" />
            <h1 className="profile__name">{user.name}</h1>
            <p className="profile__job">{user.about}</p>
            <button className="profile__edit" type="button" aria-label="Редактировать" onClick={onEditProfile}>
            </button>
            <button className="profile__add" type="button" aria-label="Добавить фотографию" onClick={onAddCard}>
            </button>
          </section>
          <section>
            <ul className="cards">
            {cards.map((card) => {return(<Card card = {card} key={card._id} onCardClick = {onCardClick}/>)
            })}
            </ul>
          </section>
        </main>
    ))
}

export default Main