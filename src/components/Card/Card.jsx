import './Card.css'; // Подключаем стили для этого компонента

/**
 * Компонент Карточки задачи.
 *
 * @param {string} title - Название задачи
 * @param {string} category - Категория (Web Design, Research...)
 * @param {string} date - Срок исполнения (например: '30.10.23')
 * @param {function} onView - Обработчик клика по меню карточки (просмотр/редактирование)
 */
const Card = ({ title, category, date, onView }) => {
  return (
    <div className="Cards__card card">
      {/* Верхняя панель с категорией и меню */}
      <div className="Card__group">
        {/* Блок категории */}
        {/* <div className={`Card__theme _${category}`}> */}
          {/* <p>_{category}</p> */}
        {/* </div>  */}
        <div className="Card__theme _green">
         <p className="_green">Research</p>
          </div>
        {/* Меню действий над карточкой (три точки) */}
        <button
          type="button"
          className="Card__btn"
          aria-label="Действия с задачей"
          onClick={onView}
        >
          <div></div><div></div><div></div>
        </button>
      </div>

      {/* Основное содержимое карточки */}
      <div className="Card__content">
          <a href="" target="_blank">
       <h3 class="Card__title">Название задачи</h3>
          </a>
          <div className="Card__date">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g clip-path="url(#clip0_1_415)">
               <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round" />
               <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                                                            <clipPath id="clip0_1_415">
                                                                <rect width="13" height="13" fill="white" />
                                                            </clipPath>
              </defs>
            </svg>
             <p>30.10.23</p>
          </div>
       </div>
    </div>
  );
};

export default Card;
