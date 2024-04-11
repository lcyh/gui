/*
 * @Author: changluo
 * @Description:
 * @LastEditors:
 */
import { App, reactive, ref } from 'vue';
const modules = import.meta.globEager('./lang/*.ts');
const langMessages = {};
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  langMessages[key] = mod;
});
const lang = ref('zh_cn');
const useCustomLocale = () => {
  const state = reactive({
    langMessages
  });

  const getLang = () => {
    return lang.value.toLocaleLowerCase();
  };

  const getMessages = () => {
    const lanPath = `./lang/${getLang()}.ts`;
    const lan = state.langMessages[lanPath];
    return lan;
  };

  const setLang = (newLang: string): void => {
    lang.value = newLang;
  };
  return {
    getLang,
    setLang,
    getMessages
  };
};

export { useCustomLocale };

export default {
  title: 'locale 国际化',
  status: '100%',
  install(app: App): void {
    const lang = useCustomLocale().getMessages();
    app.config.globalProperties.langMessages = ref(lang);
  }
};
