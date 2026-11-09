import { Block, Ttl, Buttons, BtnBgExit, BtnBorderExit } from './PopExit.styled';

/**
 * Модальное окно подтверждения выхода.
 *
 * @param {function} onConfirm - Действие при подтверждении «Да, выйти»
 * @param {function} onClose - Действие при отмене («Нет, остаться»)
 */
const PopExit = ({ onConfirm, onClose }) => {
  return (
    <Block>
      <Ttl>Выйти из аккаунта?</Ttl>
      <form id="formExit" action="#" onSubmit={(e) => e.preventDefault()}>
        <Buttons>
          <BtnBgExit type="button" onClick={onConfirm}>
            Да, выйти
          </BtnBgExit>

          <BtnBorderExit type="button" onClick={onClose}>
            Нет, остаться
          </BtnBorderExit>
        </Buttons>
      </form>
    </Block>
  );
};

export default PopExit;
