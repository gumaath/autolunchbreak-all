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
## Criando automatização para o horário do almoço
`crontab -e`

`50 11 * * * node ~/caminho/do/script/index.js`
