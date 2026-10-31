import './PopExit.css';

/**
 * Модальное окно подтверждения выхода.
 *
 * @param {function} onConfirm - Действие при подтверждении «Да, выйти»
 * @param {function} onClose - Действие при отмене («Нет, остаться»)
 */
const PopExit = ({ onConfirm, onClose }) => {
  return (
    <div className="PopExit">
      <div className="PopExit__container">
        <div className="PopExit__block">
          <h2 className="PopExit__ttl">Выйти из аккаунта?</h2>
          <form className="PopExit__form" id="formExit" action="#">
            <div className="PopExit__buttons">
              <button
                type="button"
                className="PopExit__exit-yes _hover01"
                onClick={onConfirm}
              >
                Да, выйти
              </button>

              <button
                type="button"
                className="PopExit__exit-no _hover03"
                onClick={onClose}
              >
                Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopExit;
