import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './styles.pcss';

const comp = Handlebars.compile(tpl);

export const textComponent = (textClass, text) => {
  return comp({
    textClass,
    text
  });
};
