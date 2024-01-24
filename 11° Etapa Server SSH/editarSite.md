# Passos para editar o projeto pelo gitbash fora do servidor

```
# Editando o site - Pull fora de fora do servidor

# Na pasta do projeto no seu sistema
- git add . 
- git commit -m "Commit"
- git push agenda master

- ssh ip_ou_dominio 'git -C /home/mathe/agenda/ pull agenda master'

ssh <ipdoservidor> 'git -C </caminho/da/pasta/do/projeto/> pull <remote> <branch>'
```