import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './styles.pcss';
import {textComponent} from "../../components/text";

const comp = Handlebars.compile(tpl);

const leftFieldText = (text) => textComponent(
  'text text--size-xs text--bold',
  text
);

const rightFieldText = (text) => textComponent(
  'text text--size-xs text--grey',
  text
);

export const userInfoField = (
  leftField,
  rightField,
) => {
  return comp({
    leftField: leftFieldText(leftField),
    rightField: rightFieldText(rightField),
  });
};
