import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './styles.css';

const comp = Handlebars.compile(tpl);

export const titleComponent = (titleClass, title) => {
  return comp({
    titleClass,
    title
  });
};
