import {Application, Router} from './deps.ts'
import type {RouterContext} from './deps.ts';
import { database } from './db.ts'

const app = new Application();
const router = new Router();

router.get('/', (context: RouterContext) => {
    context.response.headers.set('Content-Type',"application/json");
    context.response.status = 200;
    context.response.body = database
})

router.get('/me', (context: RouterContext) => {
    context.response.status = 200;
    context.response.body = 'Hello zahidin'
})
    
app.use(router.routes())
app.use(router.allowedMethods())

export default app

console.log(`API server running on port 3000`);

