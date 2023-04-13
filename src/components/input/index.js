import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './styles.pcss';

const comp = Handlebars.compile(tpl);

export const inputComponent = (
  labelClass,
  labelText,
  inputType,
  inputClass,
  inputName,
) => {
  return comp({
    labelClass,
    labelText,
    inputType,
    inputClass,
    inputName,
  });
};

