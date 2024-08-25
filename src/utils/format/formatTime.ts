export const fDate = (date: string) => {
 return new Intl.DateTimeFormat("fa-IR").format(new Date(date));
};
