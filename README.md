<img src="https://github.com/user-attachments/assets/3d6a0399-3f89-456d-a2c2-31d5767e5c77" alt="MercadoBot Logo" width="300" height="200"> <br>
# Bot de Busca Mercado Livre para Discord

Este bot usa o Discord.js, Axios e Cheerio para buscar o primeiro resultado de um produto no Mercado Livre diretamente de um comando no Discord.

## Funcionalidades

- Comando `!mercadoLivre <produto>` retorna:
  - Nome do produto
  - Preço
  - Link para o Mercado Livre
  - Thumbnail ilustrativa

## Pré-requisitos

- Node.js v16 ou superior
- Um token válido de bot do Discord
- Permissões de leitura e envio de mensagens no canal

## Instalação

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
npm install
```

Crie um arquivo `.env` com a variável `TOKEN` do seu bot:

```env
TOKEN=seu_token_aqui
```

## Uso

Inicie o bot com:

```bash
node index.js
```

No Discord, digite:

```
!mercadoLivre nome-do-produto
```

Exemplo:

```
!mercadoLivre celular samsung
```

## Observações

- O bot usa scraping no site do Mercado Livre, sujeito a alterações no layout do site.
- O comando ignora mensagens do próprio bot.
- A busca é feita usando a estrutura de URL padrão do Mercado Livre Brasil.

## Dependências

- [discord.js](https://discord.js.org/)
- [axios](https://github.com/axios/axios)
- [cheerio](https://cheerio.js.org/)

## Licença

MIT
