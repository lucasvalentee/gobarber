import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

/**
 * Toda rota que inicie com "appointments" vai para o "appointmentsRouter".
 * Exemplo: se o usuário colocar localhost:3333/appointments => vai para o appointmentsRouter buscar as rotas de lá.
 */
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
