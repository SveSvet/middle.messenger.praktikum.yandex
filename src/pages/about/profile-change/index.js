import Handlebars from "handlebars";
import tpl from 'bundle-text:./tpl.hbs';
import '../../../../node_modules/normalize.css/normalize.css';
import './styles.pcss';

import { buttonComponent } from "../../../components/button";
import { userInfoChangeField } from "../../../smart-components/user-info-change-field";
import { userInfoChangeStub } from "../../../stubs/userInfoConfig";

import userStubImage from "../../../../static/image/user-stub.svg";

// Components
const saveButton = buttonComponent(
  'button button--main',
  'Сохранить',
  'submit'
);
const profileFields = userInfoChangeStub.map(
  ({ leftField,
     inputValue,
     inputType,
     inputName
   }) => {
  return userInfoChangeField(
    leftField,
    inputValue,
    inputType,
    inputName
  )
});

// Add template to pages
const comp = Handlebars.compile(tpl);
const template = comp({
  userImage: userStubImage,
  fields: profileFields.join(''),
  saveButton
});

document.getElementById('profile-change').innerHTML = template;
