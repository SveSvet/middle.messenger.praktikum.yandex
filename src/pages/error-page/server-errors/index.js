import Handlebars from "handlebars";
import tpl from 'bundle-text:./tpl.hbs';
import '../../../../node_modules/normalize.css/normalize.css';
import './styles.pcss';

import { textComponent } from "../../../components/text";
import { titleComponent } from "../../../components/caption";
import { linkComponent } from "../../../components/link";

// Components
const errorTitle = titleComponent(
  'title error-page__title title--size-l title--dark',
  '505'
);
const errorDescription = textComponent(
  'description error-page__description text--size-m',
  'Летим поверять сервера'
);
const link = linkComponent(
  'link','https://google.com',
  'Назад к чатам'
);

// Add template to pages
const comp = Handlebars.compile(tpl);
const template = comp({
  children: `${errorTitle} ${errorDescription} ${link}`,
});

document.getElementById('root').innerHTML = template;
