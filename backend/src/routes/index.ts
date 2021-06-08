import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

/**
 * Toda rota que inicie com "appointments" vai para o "appointmentsRouter".
 * Exemplo: se o usuário colocar localhost:3333/appointments => vai para o appointmentsRouter buscar as rotas de lá.
 */
routes.use('/appointments', appointmentsRouter);

export default routes;
