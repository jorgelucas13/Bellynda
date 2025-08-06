const express = require('express');
const cors = require('cors');
const { Client } = require('@notionhq/client');

const app = express();
app.use(cors());

const notion = new Client({ auth: 'ntn_Y107872033476teSWLWu8NSlHn2k5rTttxisp0y3iX89OH' });
const databaseId = '2470404bf74e80868c05f40b77ebbc51';

app.get('/', (req, res) => {
  res.send('Servidor Node.js está rodando! 🚀');
});

app.get('/produtos', async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const produtos = response.results.map(page => {
      const nome = page.properties['Nome']?.title[0]?.plain_text || '';
      // Para campo "Arquivos e mídia" (files)
      let imagem = '';
      const files = page.properties['Arquivos e mídia']?.files || [];
      if (files.length > 0) {
        if (files[0].type === 'file') {
          imagem = files[0].file.url;
        } else if (files[0].type === 'external') {
          imagem = files[0].external.url;
        }
      }
      return { nome, imagem };
    });

    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Acesse http://localhost:3000/ para testar o servidor.');
});