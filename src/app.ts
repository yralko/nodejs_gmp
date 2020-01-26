import express, { Express } from 'express';
import config from './config';
import routes from './routes';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', routes.usersRoutes);
app.use('/user', routes.userRoutes);

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));
