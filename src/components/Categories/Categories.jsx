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
};

export default Categories;
