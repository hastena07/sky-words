import { Link } from 'react-router-dom';
import {
  NotFoundWrap, NotFoundCode, NotFoundText, NotFoundLink,
} from './NotFoundPage.styled.js';

export default function NotFoundPage() {
  return (
    <NotFoundWrap>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundText>Страница не найдена</NotFoundText>
      <NotFoundLink as={Link} to="/">Вернуться на главную</NotFoundLink>
    </NotFoundWrap>
  );
}