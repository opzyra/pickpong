import app from './app';
import sync from './database/sync';

const initialize = async () => {
  await sync();

  app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running ! => ${process.env.APP_NAME}`);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`SERVER: ${process.env.APP_SERVER}`);
    console.log(`CLIENT: ${process.env.APP_CLIENT}`);
    console.log(`PORT: ${process.env.APP_PORT}`);
  });
};

initialize();
