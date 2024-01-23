***Primeiros passos***

- Criar servidor na google cloud

- São Paulo

- Processador N1

- Sistema Ubuntu 20.04 LTS

- 10GB

- Marcar checkbox de HTTP e HTTPS

- Colocar o ip externo como estático

- Baixar git

- Comandos para digitar no gitbash:

- ssh-keygen // sem senha e pulando as perguntas

- eval $(ssh-agent)

- ssh-add ~/.ssh/nome_arquivo // no meu caso era id_ed25519

- start ~/.ssh

- Abrir o arquivo pub do seu id_ed25519

- Adicionar nas chaves SSH em metadados no Google Cloud o serial inteiro que estava no arquivo pub

- ssh **ip externo da cloud**

***Para acessar o servidor em outro dia basta digitar no gitbash:***

- eval $(ssh-agent)

- ssh-add ~/.ssh/nome_arquivo

- ssh *ip externo da cloud*