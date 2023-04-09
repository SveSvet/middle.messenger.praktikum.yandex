import Handlebars from "handlebars";
import tpl from 'bundle-text:./chats.hbs';
import '../../../node_modules/normalize.css/normalize.css';
import './chats.pcss';

import { emptyWindowTemplate } from "./chat-empty-window";
import { chatsLine } from "./chats-list";

// Components


// Add template to pages
const comp = Handlebars.compile(tpl);
const template = comp({
  leftChildren: chatsLine,
  rightChildren: emptyWindowTemplate
});

document.getElementById('root').innerHTML = template;
