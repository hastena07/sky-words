import { TOPIC_NAMES } from '../../theme';
import {
  Root, Container, Block, Content, TopBlock, Ttl, CloseBtn,
  Category, Description, Actions,
} from './PopBrowse.styled';
import { BtnBg, BtnBorder } from '../ui/Buttons.styled';

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
    <Root>
      <Container>
        <Block>
          <CloseBtn type="button" aria-label="Закрыть окно" onClick={onClose}>
            &#10006;
          </CloseBtn>

          <Content>
            <TopBlock>
              <Ttl>{title}</Ttl>
            </TopBlock>

            <Category $class={category}>
              <p>{TOPIC_NAMES[category] || 'Без темы'}</p>
            </Category>

            <Description>
              <p>Срок: {date}</p>
              <p>{description || 'Описание отсутствует'}</p>
            </Description>

            <Actions>
              <BtnBg type="button">Редактировать</BtnBg>
              <BtnBorder type="button" onClick={onClose}>
                Закрыть
              </BtnBorder>
            </Actions>
          </Content>
        </Block>
      </Container>
    </Root>
  );
};

export default PopBrowse;
