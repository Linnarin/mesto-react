function Card(props) {
    const { card, onCardClick } = props;

    function handleCardClick() {
        onCardClick(card);
    }

    return (
        <article className="place">
            <img className="place__img" src={card.link}
                onClick={handleCardClick} />
            <div className="place__caption">
                <h2 className="place__title">{card.name}</h2>
                <div className="place__like-container">
                    <button type="button" aria-label="Мне нравится." className="place__like" />
                    <span className="place__like-count">{card.likes.length}</span>
                </div>
            </div>
            <button type="button" aria-label="Удалить." className="place__delete" />
        </article>
    )
}

export default Card;