import { useCustomLocale } from '.';

export function get(object: any, path: string) {
  const keys = path.split('.');
  let result = object;

  keys.forEach((key) => {
    result = result[key] ?? '';
  });

  return result;
}

export function useI18n() {
  return (path: string): any => {
    const messages = useCustomLocale().getMessages();
    const message = get(messages, path);
    return message;
  };
}
