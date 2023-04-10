import Handlebars from "handlebars";
import tpl from 'bundle-text:./tpl.hbs';
import '../../../../node_modules/normalize.css/normalize.css';
import { REGISTRATION_FORM_CONFIG } from "../../../constants/formConfigs";
import './styles.pcss';

import { titleComponent } from "../../../components/caption";
import { buttonComponent } from "../../../components/button";
import { inputComponent } from "../../../components/input";

const mapInputsConfig = REGISTRATION_FORM_CONFIG.map(({
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
const registrationInputs = mapInputsConfig.join('');
const registrationTitle = titleComponent(
  'title registration-page__title title--size-m title--dark',
  'Регистрация'
);
const registrationButton = buttonComponent(
  'button button--main card__buttons--registration',
  'Зарегистрироваться'
);
const loginButton = buttonComponent(
  'button button--secondary',
  'Войти'
);


// Add template to pages
const comp = Handlebars.compile(tpl);
const template = comp({
  title: registrationTitle,
  children: registrationInputs,
  registrationButton,
  loginButton,
});

document.getElementById('registration').innerHTML = template;
