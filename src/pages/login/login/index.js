import Handlebars from "handlebars";
import tpl from 'bundle-text:./tpl.hbs';
import '../../../../node_modules/normalize.css/normalize.css';
import { LOGIN_FORM_CONFIG } from "../../../constants/formConfigs";
import './styles.pcss';

import { titleComponent } from "../../../components/caption";
import { buttonComponent } from "../../../components/button";
import { inputComponent } from "../../../components/input";

const mapInputsConfig = LOGIN_FORM_CONFIG.map(({
  labelClass,
  labelText,
  inputType,
  inputClass,
  inputName,
}) => {
  return inputComponent(
    labelClass,
    labelText,
    inputType,
    inputClass,
    inputName,
  );
})

// Components
const loginInputs = mapInputsConfig.join('');
const registrationTitle = titleComponent(
  'title login-page__title title--size-m title--dark',
  'Вход'
);
const registrationButton = buttonComponent(
  'button button--main card__buttons--login',
  'Войти'
);
const loginButton = buttonComponent(
  'button button--secondary',
  'Зарегистрироваться'
);


// Add template to pages
const comp = Handlebars.compile(tpl);
const template = comp({
  title: registrationTitle,
  children: loginInputs,
  registrationButton,
  loginButton,
});

document.getElementById('root').innerHTML = template;
