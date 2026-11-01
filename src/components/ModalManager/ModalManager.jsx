import './ModalManager.css';
import PopExit from '../PopExit/PopExit';
import PopNewCard from '../PopNewCard/PopNewCard';
import PopBrowse from '../PopBrowse/PopBrowse';

const ModalManager = ({
  isOpen,
  modalType,
  onClose,
  onConfirmExit,
  currentCard /* Данные текущей карты */
}) => {
  if (!isOpen) return null; 
  const backdropStyle = { 
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 9998
  };

  let content;

  switch (modalType) {
    case 'exit':
      content = <PopExit onClose={onClose} onConfirm={onConfirmExit} />;
      break;
    
    case 'new-card':
      content = (
        <PopNewCard 
          onCreate={(title, category, date) => {
            console.log('Создана задача:', title);
            onClose(); // Закрываем после создания
          }}
          onCancel={onClose}
        />
      );
      break;

    case 'browse': // Просмотр / редактирование
      content = (
        <PopBrowse 
          {...currentCard} // Передаем сюда title, description, category, date
          onEdit={() => console.log('Редактируем задачу')}
          onDelete={() => console.log('Удаляем задачу')}
          onClose={onClose}
        />
      );
      break;

    default:
      content = null;
  }

  return (
    <>
      {/* Полупрозрачный фон */}
      <div style={backdropStyle}></div>
      
      {/* Само содержимое окна */}
      {content && <div className="PopUp__container">{content}</div>}
    </>
  )
};

export default ModalManager;