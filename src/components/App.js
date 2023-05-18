import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm name='avatarform' title='Обновить аватар' btnText='Создать' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input type="url" required id="avatar" name="avatar" placeholder="Ссылка на картинку" className="popup__input-text" />
        <span className="avatar-error popup__input-text-error" />
      </ PopupWithForm>

      <PopupWithForm name='popupform' title='Редактировать профиль' btnText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" id="nameform" required minLength="2" maxLength="40" name="name" placeholder="Имя" className="popup__input-text" />
        <span className="nameform-error popup__input-text-error" />
        <input type="text" id="professionform" required minLength="2" maxLength="200" name="about" placeholder="О себе" className="popup__input-text" />
        <span className="professionform-error popup__input-text-error" />
      </ PopupWithForm>

      <PopupWithForm name='popupformplace' title='Новое место' btnText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" required minLength="2" maxLength="30" id="popuptitle" name="name" placeholder="Название" className="popup__input-text" />
        <span className="popuptitle-error popup__input-text-error" />
        <input type="url" required id="popupurl" name="link" placeholder="Ссылка на картинку" className="popup__input-text" />
        <span className="popupurl-error popup__input-text-error" />
      </ PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
