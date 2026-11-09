import { Backdrop, PopUpContainer } from './ModalManager.styled';
import PopExit from '../PopExit/PopExit';
import PopNewCard from '../PopNewCard/PopNewCard';
import PopBrowse from '../PopBrowse/PopBrowse';

const ModalManager = ({
  isOpen,
  modalType,
  onClose,
  onConfirmExit,
  onCreate,
  currentCard,
}) => {
  if (!isOpen) return null;

  let content;

  switch (modalType) {
    case 'exit':
      content = <PopExit onClose={onClose} onConfirm={onConfirmExit} />;
      break;

    case 'new-card':
      content = <PopNewCard onCreate={onCreate} onClose={onClose} />;
      break;

    case 'browse':
      content = (
        <PopBrowse
          {...currentCard}
          onClose={onClose}
        />
      );
      break;

    default:
      content = null;
  }

  return (
    <>
      <Backdrop />
      {content && <PopUpContainer>{content}</PopUpContainer>}
    </>
  );
};

export default ModalManager;
