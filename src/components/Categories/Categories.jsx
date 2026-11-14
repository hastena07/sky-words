import { topics } from '../../data.js';
import {
  CategoriesBlock, CategoriesTitle, CategoriesThemes, CategoryItem,
} from './Categories.styled.js';

const topicKey = {
  'Web Design': 'orange',
  Research: 'green',
  Copywriting: 'purple',
};

export default function Categories({
  selected,
  onSelect,
  readOnly = false,
  variant = 'default', // 'default' | 'top' | 'down'
}) {
  const items = readOnly && selected ? [selected] : topics;

  return (
    <CategoriesBlock $variant={variant}>
      <CategoriesTitle>Категория</CategoriesTitle>
      <CategoriesThemes>
        {items.map((topic) => (
          <CategoryItem
            key={topic}
            $type={topicKey[topic]}
            $active={selected === topic}
            $readOnly={readOnly}
            onClick={() => !readOnly && onSelect?.(topic)}
          >
            {topic}
          </CategoryItem>
        ))}
      </CategoriesThemes>
    </CategoriesBlock>
  );
}