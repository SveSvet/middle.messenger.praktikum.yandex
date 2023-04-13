import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './styles.pcss';

const comp = Handlebars.compile(tpl);

export const buttonComponent = (buttonClass, text, type) => {
  return comp({
    buttonClass,
    text,
    type,
  });
};
