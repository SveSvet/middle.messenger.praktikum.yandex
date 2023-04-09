import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './styles.pcss';

const comp = Handlebars.compile(tpl);

export const chat = (
  chatClass,
  chatName,
  chatImage,
  previewMessage,
  date,
  unreadMessage,
  unreadMessageNumber
) => {
  return comp({
    chatClass,
    chatName,
    chatImage,
    previewMessage,
    date,
    unreadMessage,
    unreadMessageNumber,
  });
};
