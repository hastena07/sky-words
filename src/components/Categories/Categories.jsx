import './Categories.css'; 

/**
 * Компонент "Выбор категории".
 *
 * @param {string} activeCategory - Текущая активная категория ('_orange', '_green' или '_purple')
 * @param {array} categories - Массив доступных категорий с цветами.
 * @param {function} onSelect - Функция-обработчик выбора новой категории.
 */
const Categories = ({ activeCategory, categories, onSelect }) => {
  /**
   * 
   * @param {{ name: string, colorClass: string }} category Объект категории
   * @returns Элемент <div>
   */
  const renderCategoryItem = (category) => (
    <div
      key={category.colorClass}
      className={`Categories__theme ${category.colorClass} ${
        activeCategory === category.colorClass ? 'Categories__active-category' : ''
      }`}
      onClick={() => onSelect(category.colorClass)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect(category.colorClass);
      }}
    >
      {/* Цвет текста совпадает с цветом фона */}
      <p className={category.colorClass}>{category.name}</p>
    </div>
  );

  return (
    <div className="Categories">
      <p className="subttl">Категория</p>
      <div className="Categories__themes">
        {/* Рендерим все доступные категории из массива */}
        {categories.map(renderCategoryItem)}
      </div>
    </div>
  );
};

export default Categories;
