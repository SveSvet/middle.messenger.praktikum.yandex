import Handlebars from "handlebars";
import tpl from 'bundle-text:./tpl.hbs';
import '../../../../node_modules/normalize.css/normalize.css';
import './styles.pcss';

import { textComponent } from "../../../components/text";
import { userImageComponent } from "../../../components/userImage";
import { linkComponent } from "../../../components/link";
import { chat } from "../../../smart-components/chat";

// Components
const image = userImageComponent(
  'image-blob',
  '',
  'user-image'
);
const chatName = textComponent(
  'text text--size-xs text--bold',
  'Имя чата'
);
const chatPreview = textComponent(
  'text text--size-xxs',
  'Превью чата'
);
const date = textComponent(
  'text text--size-xxs',
  '10:10'
);

// Smart-components
const renderChats = chat('chat-list-wrapper', chatName, image, chatPreview, date)

// Create template
const comp = Handlebars.compile(tpl);
export const chatsLine = comp({
  chats: renderChats,
});
