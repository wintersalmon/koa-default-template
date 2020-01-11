/* eslint-disable no-console */
import dotenv from 'dotenv';
import Koa from 'koa';
import chalk from 'chalk';

dotenv.config();
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

app.listen(process.env.PORT, () => {
  const { red, yellow } = chalk.bold;
  console.log(yellow('######################################'));
  console.log(yellow(`NODE_ENV            : ${red(process.env.NODE_ENV || '-')}`));
  console.log(yellow(`NODE_CONFIG_ENV     : ${red(process.env.NODE_CONFIG_ENV || '-')}`));
  console.log(yellow(`SERVER_PORT         : ${red(process.env.PORT || '-')}`));
  console.log(yellow('######################################'));
});
