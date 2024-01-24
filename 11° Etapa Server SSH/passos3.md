# Comandos dentro do servidor da cloud na pasta do projeto
```
- sudo apt install curl -y
- curl -sL https://deb.nodesource.com/setup_18.x | sudo bash - sudo apt install nodejs -y

- sudo npm i 
- sudo npm i -g pm2

- pm2 start /home/nome_user/agenda/server.js --name Agenda
// Caso você não tenha o arquivo com o link
// que faz conexão com o banco de dados
- nano .env 

- pm2 start Agenda
- pm2 startup 
// Copiar a linha de código que aparecerá e colar 

- curl link_do_servidor_node
```