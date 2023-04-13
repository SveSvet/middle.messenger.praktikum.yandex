import Handlebars from "handlebars";
import tpl from 'bundle-text:./tpl.hbs';
import '../../../../node_modules/normalize.css/normalize.css';
import './styles.pcss';

import { textComponent } from "../../../components/text";
import { userImageComponent } from "../../../components/userImage";
import { linkComponent } from "../../../components/link";
import { chat } from "../../../smart-components/chat";
import {chatsStub} from "../../../stubs/chat-stubs";

// Components
const _image = (url) => userImageComponent(
  'image-blob',
  url,
  'user-image'
);
const _chatName = (text) => textComponent(
  'text text--size-xs text--bold',
  text
);
const _chatPreview = (previewText) => textComponent(
  'text text--size-xxs',
  previewText
);
const _date = (date) => textComponent(
  'text text--size-xxs',
  date
);

// Smart-components
const renderChats = chatsStub.map(
  ({
     chatName,
     chatImage,
     previewMessage,
     date,
     unreadMessage,
     unreadMessageNumber
  }) => {
  return chat(
    'chat-list-wrapper',
    _chatName(chatName),
    _image(chatImage),
    _chatPreview(previewMessage),
    _date(date)
  );
})

// Create template
const comp = Handlebars.compile(tpl);
export const chatsLine = comp({
  chats: renderChats.join(''),
});
