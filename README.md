
# Login com React e Firebase auth

Projeto com foco em autenticação com Firebase auth e Firebase Functions


## Authors

- [@volnei-alves](https://www.github.com/volnei-alves)

  
## Documentation

Com Firebase-functions foi desenvolvido uma Api em node, onde enviamos os dados do formulário de login, a Api valida os dados e retorna um Token que será armazenado no local-storage, ao tenta acessar o dashboard da aplicação, a rota privada valida o acesso com o Token.

Ao fazer uma requisição a Api, a aplicação front-end envia o Token por header que é validada pela api e então retorna os dados caso de sucesso na validação.

  
## 

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/minhasimagens-7043c.appspot.com/o/loginReact.png?alt=media&token=789693b9-ef1d-4cfa-afc6-76aacf30c828)

  
## Executar localmente

Clone projeto

```bash
  git clone https://github.com/volnei-alves/react-firebase-login
```

Vá para o diretório do projeto

```bash
  cd react-firebase-login
```

Instale dependências

```bash
  cd src
  npm install

  cd functions
  npm install
```

Inicie o servidor

```bash
  firebase serve --only "hosting,functions"
```

  