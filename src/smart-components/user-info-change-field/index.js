import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './styles.pcss';
import { textComponent } from "../../components/text";

const comp = Handlebars.compile(tpl);

const leftFieldText = (text) => textComponent(
  'text text--size-xs text--bold',
  text
);

export const userInfoChangeField = (
  leftField,
  inputValue,
  inputType,
  inputName,
) => {
  return comp({
    leftField: leftFieldText(leftField),
    inputType,
    inputName,
    inputValue,
  });
};
