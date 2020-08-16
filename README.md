
<h1 align="center">
    <img alt="ProffyReact" title="#ProffyReact" src="./web/src/assets/images/landing.svg" />
</h1>

<h4 align="center"> 
    <img alt="ProffyReact" title="#ProffyReact" src="./web/src/assets/images/logo-purple.svg" />
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> •  
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

O Proffy é uma plataforma de estudos online que ajuda pessoas a encontrarem professores online. O projeto foi desenvolvido durante a *next level week*,
oferecido pela [Rockseat](https://rocketseat.com.br/).

---

## 🎨 Layout

Prévia do layout:

### Web e Mobile

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="ProffyReact" title="#ProffyReact" src="https://i.ibb.co/Ws2Fxs3/Web-1280-1.png" width="400px">

  <img alt="ProffyReact" title="#ProffyReact" src="https://i.ibb.co/1ncN5t4/Screen-Shot-2020-08-16-at-18-55-14.png" width="150px">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

> 💡 O Frontend e o Mobile, precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Expo](https://expo.io/)
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)

#### Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/rbarbosa95/react-proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd react-proffy

# Vá para a pasta server
$ cd server

# Instale as dependências
$ yarn

# Gere o banco de dados
$ yarn knex:migrate

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O backend inciará na porta:4000 - acesse http://localhost:4000 

```

#### Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/rbarbosa95/react-proffy.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd react-proffy

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

#### Rodando a aplicação mobile

```bash

# Clone este repositório
$ git clone https://github.com/rbarbosa95/react-proffy.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd react-proffy

# Vá para a pasta da aplicação Mobile
$ cd mobile

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

> Para mais detalhes acesse o package.json

---

## 🎮 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 👨🏽‍💻 Autor

<div align="left">
<table>
  <tr align="center">
    <td>Coded By</td>
  </tr>
  <tr align="center">
    <td>
      <a href="https://github.com/rbarbosa95">
        <img src="https://avatars0.githubusercontent.com/u/15218743?s=460&u=d76d008067b2ee2fe2f55db081ea78cdad461e57&v=4" width="100" />
      </a>
    </td>
  </tr>
</table>
</div>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com 💚 por [Ramon Barbosa](https://www.linkedin.com/in/ramon-guimaraes/)

---
