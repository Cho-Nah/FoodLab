// TS не ругается на svg изображения

declare module "*.svg" {
  const content: string;
  export default content;
}
