import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './styles.pcss';

const comp = Handlebars.compile(tpl);

export const userImageComponent = (imageClass, src, alt) => {
  return comp({
    imageClass,
    src,
    alt,
  });
};
