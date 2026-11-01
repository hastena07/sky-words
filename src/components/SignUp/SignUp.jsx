

// /**
//  * Форма регистрации.
//  *
//  * @param {function} onSwitchToSignIn - Обработчик переключения на вход.
//  * @param {function} onSubmit - Обработчик отправки формы (регистрация).
//  */
// const SignUp = ({ onSwitchToSignIn, onSubmit }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const firstName = form.elements['first-name'].value.trim();
//     const email = form.elements.login.value.trim();
//     const password = form.elements.password.value.trim();

//     if (!firstName || !email || !password) {
//       alert('Заполните все поля');
//       return;
//     }

//     onSubmit({ firstName, email, password });
//   };

//   return (
//     <div className="modal">
//       <div className="modal__block">
//         {/* Заголовок */}
//         <div className="modal__ttl">
//           <h2>Регистрация</h2>
//         </div>

//         {/* Форма */}
//         <form onSubmit={handleSubmit} className="modal__form-login" id="formLogUp">
//           <input 
//             type="text" 
//             name="first-name" 
//             id="first-name" 
//             placeholder="Имя"
//             required
//           />
//           <input 
//             type="email" 
//             name="login" 
//             id="loginReg" 
//             placeholder="Эл. почта"
//             required
//           />
//           <input 
//             type="password" 
//             name="password" 
//             id="passwordFirst" 
//             placeholder="Пароль"
//             required
//           />

//           <button type="submit" className="modal__btn-signup-ent _hover01">
//             Зарегистрироваться
//           </button>

//           {/* Навигация по страницам */}
//           <div className="modal__form-group">
//             <p>Уже есть аккаунт?</p>
//             <button
//               type="button"
//               className="modal__link _hover04"
//               onClick={onSwitchToSignIn}
//             >
//               Войдите здесь
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
