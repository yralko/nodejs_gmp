import express, { Express } from 'express';
import config from './config';
import routes from './routes';
import sequelize from './data-access/sequelize';
import logger from './services/logger';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes.usersRoutes);
app.use('/user', routes.userRoutes);
app.use('/group', routes.userGroup);

sequelize.sync()
  .then(() => {
    app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));
  });

app.use((err, req, res, next) => {
  logger.error(err.stack)
  res.status(500).send('Server error')
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  logger.error(err.stack);
  process.exit(1);
});
