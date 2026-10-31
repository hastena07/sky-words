import '../PopBrowse/PopBrowse';

/**
 * Модальное окно просмотра карточки.
 *
 * @param {string} title - Название задачи
 * @param {string} description - Описание задачи
 * @param {string} category - Категория (например, _purple)
 * @param {string} date - Дата исполнения
 * @param {function} onClose - Обработчик закрытия окна
 */
const PopBrowse = ({ title, description, category, date, onClose }) => {
  return (
    <div className="PopBrowse">
      <div className="PopBrowse__container">
        <div className="PopBrowse__header">
          <h2 className="PopBrowse__title">{title}</h2>
          <button
            type="button"
            className="PopBrowse__close _hover03"
            aria-label="Закрыть окно"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className={`PopBrowse__category ${category}`}>
          <span>{category.replace('_', '')}</span>
        </div>

        <p className="PopBrowse__date">Срок: {date}</p>

        <div className="PopBrowse__description">
          <p>{description || 'Описание отсутствует'}</p>
        </div>

        <div className="PopBrowse__actions">
          <button type="button" className="_btn-bg _hover01">Редактировать</button>
          <button type="button" className="_btn-outline _hover03" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
