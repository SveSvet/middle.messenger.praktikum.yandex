import Handlebars from "handlebars";
import tpl from 'bundle-text:./tpl.hbs';
import '../../../../node_modules/normalize.css/normalize.css';
import './styles.pcss';

import { textComponent } from "../../../components/text";

// Components
const blobText = textComponent(
  'text text--size-xxs',
  'Выберите чат чтобы отправить сообщение'
);

// Create template
const comp = Handlebars.compile(tpl);

export const emptyWindowTemplate = comp({
  text: blobText,
});
