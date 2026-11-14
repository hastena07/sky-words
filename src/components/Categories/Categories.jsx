<<<<<<< HEAD
import { topics } from '../../data.js';
import {
  CategoriesBlock, CategoriesTitle, CategoriesThemes, CategoryItem,
} from './Categories.styled.js';

const topicKey = {
  'Web Design': 'orange',
  Research: 'green',
  Copywriting: 'purple',
=======
import { TOPIC_NAMES } from '../../theme';
import { CategoriesBlock, Subttl, Themes, ThemeChip } from './Categories.styled';

const Categories = ({ activeCategory, categories, onSelect }) => {
  const renderCategoryItem = (category) => (
    <ThemeChip
      key={category.colorClass}
      $class={category.colorClass}
      $active={activeCategory === category.colorClass}
      onClick={() => onSelect(category.colorClass)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect(category.colorClass);
      }}
    >
      <p>{TOPIC_NAMES[category.colorClass] || category.name}</p>
    </ThemeChip>
  );

  return (
    <CategoriesBlock>
      <Subttl>Категория</Subttl>
      <Themes>
        {categories.map(renderCategoryItem)}
      </Themes>
    </CategoriesBlock>
  );
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
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