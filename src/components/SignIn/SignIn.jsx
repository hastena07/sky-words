

/**
 * Форма входа.
 *
 * @param {function} onSwitchToSignUp - Обработчик переключения на регистрацию.
 * @param {function} onSubmit - Обработчик отправки формы (логин/пароль).
 */
const SignIn = ({ onSwitchToSignUp, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.login.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
      alert('Заполните все поля');
      return;
    }

    onSubmit({ email, password });
  };

  return (
    <div className="modal">
      <div className="modal__block">
        {/* Заголовок */}
        <div className="modal__ttl">
          <h2>Вход</h2>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="modal__form-login" id="formLogIn">
          <input 
            type="email" 
            name="login" 
            id="formlogin" 
            placeholder="Эл. почта"
            required
          />
          <input 
            type="password" 
            name="password" 
            id="formpassword" 
            placeholder="Пароль"
            required
          />

          <button type="submit" className="modal__btn-enter _hover01">
            Войти
          </button>

          {/* Навигация по страницам */}
          <div className="modal__form-group">
            <p>Нужно зарегистрироваться?</p>
            <button
              type="button"
              className="modal__link _hover04"
              onClick={onSwitchToSignUp}
            >
              Регистрируйтесь здесь
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
