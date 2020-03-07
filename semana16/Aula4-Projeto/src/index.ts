import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user: 'eduardo',
    password: 'v$vdxCYsib9BsCY38k0k',
    database: `bouman-eduardo`
  }
});

app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/getAllUser': 'busca todos os usuários',
      '/createUser': 'cria usuário',
      '/editUser/:id': 'altera o apelido do usuário',
      '/deleteUser/:id': 'deleta o usuário',
      '/getUser/:id': 'busca o usuário através do Id',
      '/createTask': 'cria uma tarefa',
      '/updateTask/:': 'atualização da descrição da tarefa e a data limite',
      '/getAllUsers/': 'busca todos os usuários em ordem',
    }
  };
  res.send(resposta)
});


app.get('/getAllUser', (request: Request, response: Response) => {
  const query = connection.select('*')
    .from('usuario')
  query.then((result: any) => {
    response.send(result)
  });
});

app.post('/createUser', (req: Request, res: Response) => {
  const nonQuery = connection.insert(req.body).into('usuario');

  nonQuery.then(() => {
    res.send(`O usuário ${req.body.nome} foi criado`);
  }).catch((err) => {
    res.send(err);
  })
})

app.put('/editUser/:id', async (req: Request, res: Response) => {
  const novoApelido = req.body.apelido

  const nonQuery = connection('usuarios')
    .where('id', req.params.id)
    .update({
      apelido: novoApelido
    })

  try {
    const result = await nonQuery;
    res.send(result);
  } catch (err) {
    res.send(err)
  }
});

app.delete('/deleteUser/:id', async (req: Request, res: Response) => {
  const nonQuery = connection('users').where("id", req.params.id).del()
  try {
    const result = await nonQuery;
    res.send(result);
  } catch (err) {
    res.send(err)
  }
});

app.get('/getUser/:id', async (req: Request, res: Response) => {
  const nonQuery = req.params.id
  const getQuery = connection('users').select('nome', 'apelido', 'email', 'data_de_nascimento').where("id", nonQuery)

  try {
    const result = await getQuery;
    res.send(result);
  } catch (err) {
    res.send(err)
  }
});

app.get('/getAllUsers/', async (req: Request, res: Response) => {
  const ordem = req.query.ordem
  const idade = req.query.idade
  let query = connection.select("*").from('usuario')

  if (ordem) {
    query = query.orderBy("name", ordem)
  }
  if (idade) {
    query = query.where({ "data_de_nascimento": idade })
  }
  try {
    const result = await query;
    res.send(result)
  } catch (err) {
    res.send(err)
  }
});

app.post('/createTask', async (req: Request, res: Response) => {
  const nonQuery = connection.insert(req.body).into('tarefa');

  try {
    const result = await nonQuery
    res.send(result)
  } catch (err) {
    res.send(`Erro: ${err}`)
  }
})

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
