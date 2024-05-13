import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
// import List from '@editorjs/list'
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  header: Header,
  delimiter: Delimiter,
  list: List,
  code: Code,
  image: SimpleImage,
  warning: {
    class: Warning,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+W',
    config: {
      titlePlaceholder: 'Title',
      messagePlaceholder: 'Message',
    },
  },
};
