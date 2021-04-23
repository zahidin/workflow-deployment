import { assertEquals } from "https://deno.land/std@0.94.0/testing/asserts.ts";
import {superoak, Application,Router} from './deps.ts'
import app from './server.ts'

Deno.test('check response',async () => {
    // await superoak(app).get('/').expect(200)
    const request = await superoak(app)
    await request.get("/").expect(200)
    //  const req = await superdeno(new Application().handle.bind(app)).get('/')
    //  assertEquals(req.body[0].id,'abys');
})