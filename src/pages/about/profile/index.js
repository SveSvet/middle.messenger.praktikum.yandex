import Handlebars from "handlebars";
import tpl from 'bundle-text:./tpl.hbs';
import '../../../../node_modules/normalize.css/normalize.css';
import './styles.pcss';

import { userInfoField } from "../../../smart-components/user-info-field";
import { userInfoStub } from "../../../stubs/user-info-stubs";
import { buttonComponent } from "../../../components/button";
import userStubImage from "../../../../static/image/user-stub.svg";

// Components
const changeInfoButton = buttonComponent(
  'button button--secondary profile__button--border',
  'Изменить данные'
);
const changePasswordButton = buttonComponent(
  'button button--secondary profile__button--border',
  'Изменить пароль'
);
const logoutButton = buttonComponent(
  'button button--secondary button--red',
  'Выйти'
);
const profileFields = userInfoStub.map(({ rightField, leftField }) => {
  return userInfoField(
    rightField,
    leftField,
  )
});

// Add template to pages
const comp = Handlebars.compile(tpl);
const template = comp({
  userImage: userStubImage,
  fields: profileFields.join(''),
  buttonChangeFields: changeInfoButton,
  buttonChangePassword: changePasswordButton,
  buttonLogout: logoutButton
});

document.getElementById('profile').innerHTML = template;
