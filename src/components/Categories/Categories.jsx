import './Categories.css'; // Подключаем стили


const Categories = ({ activeCategory, categories, onSelect }) => {
     
  
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
