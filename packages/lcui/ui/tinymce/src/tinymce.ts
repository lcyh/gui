// Any plugins you want to setting has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/
// colorpicker/contextmenu/textcolor plugin is now built in to the core editor, please remove it from your editor configuration

export const plugins = [
  'table advlist anchor autolink autosave code codesample  directionality  fullscreen hr insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace tabfocus  template  textpattern visualblocks visualchars wordcount'
];

export const toolbar = [
  'fontsizeselect bullist numlist | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright | link save'
];

export const menu = {
  file: {
    title: 'File',
    items: 'restoredraft | preview print '
  },
  edit: {
    title: 'Edit',
    items: 'undo redo | cut copy paste pastetext | selectall | searchreplace'
  },
  view: {
    title: 'View',
    items:
      'code | visualaid visualchars visualblocks | fullscreen | showcomments'
  },
  insert: {
    title: 'Insert',
    items:
      'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime'
  },
  format: {
    title: 'Format',
    items:
      'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat'
  },
  tools: {
    title: 'Tools',
    items: 'a11ycheck code wordcount'
  },
  table: {
    title: 'Table',
    items: 'inserttable | cell row column | tableprops deletetable'
  },
  help: { title: 'Help', items: 'help' }
};
