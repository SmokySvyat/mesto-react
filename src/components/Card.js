function Card({ card, onCardClick }) {
    function handleClick() {
      onCardClick(card)
    }
  return((
    <li className="card">
      <button className="card__del" type="button" aria-label="Удалить" />
      <img className="card__img" src={card.link} alt={card.name} onClick={handleClick}/>
      <h2 id="place-name" className="card__text">{card.name}</h2>
      <div>
        <button id="like" className="card__like" type="button" aria-label="Нравится" data-path="template">
        </button>
        <p className="card__like-counter">{card.likes.length}</p>
      </div>
    </li>
  ))
}

export default Card;