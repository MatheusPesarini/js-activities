# Criando o servidor final com NGINX

## Pode ser utilizado ip ou domínio de site

```
- sudo apt install nginx
- sudo nano /etc/nginx/sites-enabled/nome_dominio
## Colar o texto do do arquivo nginx-HTTP com os 3 links
## de ip ou dominio para o que você esteja usando

- cd /etc/nginx/sites-enabled/ 
## Verificar se o .txt foi criado
- ls 
- sudo rm default

## Verificar se o .txt está de acordo
- sudo nginx -t

- sudo systemctl restart nginx
```

## Agora o projeto pode ser acessado pelo link ou ip colocado!

### <span style="color: yellow">Está faltando os passos para deixar o servidor com domínio mais seguro</span>