
# Comandos dentro do server SSH no gitbash
```
- sudo apt update
- sudo apt upgrade
- sudo reboot **// levara 40 segundos para reiniciar pela cloud**

- mkdir agenda
- mkdir repo-agenda

- cd repo-agenda
- git init --bare
- cd ..
- cd agenda
- git init
- git remote add agenda /home/nome_user/repo-agenda/
```

## No seu sistema

- Deve ser criada uma pasta com os arquivos do projeto que será enviado por git para a pasta **agenda** do servidor
# Comandos em outro gitbash separado
***Dentro da pasta criado no seu sistema***
```
- git init
- git add .
- git commit -am "Commit inicial"
- git remote add agenda ip_do_server:repo-agenda
- git push agenda master
```