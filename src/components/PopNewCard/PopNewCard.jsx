import './PopNewCard.css';
import Categories from '../Categories/Categories';


const PopNewCard = ({ onCreate }) => {
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('_orange');
  const [date, setDate] = React.useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Введите название задачи');
      return;
    }
    console.log('Данные новой задачи:', { title, category, date });
    onCreate(); 
  };

  
  const categoriesList = [
    { name: 'Web Design', colorClass: '_orange' },
    { name: 'Research', colorClass: '_green' },
    { name: 'Meeting', colorClass: '_purple' },
  ];
  

  return (
    <div className="PopNewCard">
      <div className="PopNewCard__container">
        <div className='PopNewCard__block'> 
          <div className='PopNewCard__content'>  
             <h2 className="PopNewCard__ttl">Создание задачи</h2>
             <a href="#" className="PopNewCard__close">&#10006;</a>
              <div className="PopNewCard__wrap">



          <form onSubmit={handleCreate} className="PopNewCard__form form-new" id="formNewCard" action="#">
         <label for="formTitle" className="subttl">Название задачи</label>
          <input
            type="text"
            className="PopNewCard__input"
            
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <Categories
            activeCategory={category}
            categories={categoriesList}
            onSelect={(selected) => setCategory(selected)}
          />

          <input
            type="date"
            className="PopNewCard__input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div className="PopNewCard__actions">
            <button type="submit" className="_btn-bg _hover01">
              Создать
            </button>
          </div>
        </form>  
              </div>
          </div>
          
        
        
          </div>
        
      </div>
    </div>
  );
};

// Важно: импортируем React, если он не импортирован глобально
import React from 'react';

export default PopNewCard;
