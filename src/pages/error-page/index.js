import Handlebars from "handlebars";
import tpl from 'bundle-text:./tpl.hbs';
import 'normalize.css';
import './styles.css';

import { textComponent } from "../../components/text";
import { titleComponent } from "../../components/caption";
import { linkComponent } from "../../components/link";

// Components
const errorTitle = titleComponent('title', '404')
const errorDescription = textComponent('description', 'Такого луга нет :(');
const link = linkComponent('link','https://google.com', 'Назад к чатам');

const comp = Handlebars.compile(tpl);

const template = comp({
  children: `${errorTitle} ${errorDescription} ${link}`,
});

document.getElementById('root').innerHTML = template;
