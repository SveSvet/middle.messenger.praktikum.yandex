import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './styles.pcss';

const comp = Handlebars.compile(tpl);

export const linkComponent = (linkClass, link, text) => {
  return comp({
    linkClass,
    link,
    text
  });
};
