# Instalação

1. Faz clone do repositório e extrai
2. Roda `npm install` para instalar as dependencias
3. Crie um arquivo chamado `credentials.json` e o estruture dessa forma:
```json
{
  "email": "teste@email.com",
  "password": "senhateste123"
}
```
e está pronto!

---
## Criando automatização para executar o script
1. Descubra o caminho do seu node com `which node`
2. Depois crie as crontabs:
`crontab -e`

```
# Entrada
40 8 * * * {caminho do node}/node ~/caminho/do/script/index.js
# Almoço
00 12 * * * {caminho do node}/node ~/caminho/do/script/index.js
# Volta do almoço
30 13 * * * {caminho do node}/node ~/caminho/do/script/index.js`
```

Alternativamente,
Pode utilizar o `crontab-ui` para facilitar a criação das crontabs

`npm install -g crontab-ui`

`crontab-ui`

### TODO
- [ ] Criar para o PontoMais
- [ ] Fazer para encerrar o dia também
