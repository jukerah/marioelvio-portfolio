# Mario Elvio Portfólio

<img src="preview/preview.jpg"/>

<br>

Sumário
=================
<!--ts-->
   * [Descrição do Projeto](#about)
   * [Deploy do Projeto](#demo-project)
   * [Features](#features)
   * [Pré-requisitos e instalação do projeto](#pre-req)
<!--te-->

<hr/>

<h2 id="about">Descrição do Projeto</h2>
<br />

> Este projeto é um site pessoal para falar sobre mim e publicar os projetos que desenvolvi ou trabalhei. As tecnologias utilizadas para o desenvolvimento deste site foram escolhidas de acordo com a necessidade do projeto de reutilização de código, fácil manutenção, legibilidade e todo o design foi pensado para mobile first.


<br />

### Design da interface com Figma:
### Link: <a align="left" href="https://www.figma.com/file/t85caWsRB2xisvnuplY9An/Mario-Elvio?node-id=0%3A1">https://www.figma.com/file/t85caWsRB2xisvnuplY9An/Mario-Elvio?node-id=0%3A1</a>

<br />

### Tecnologias e dependências utilizadas no projeto:
* <strong>Figma</strong> - Editor para criar o design da interface.
* <strong>PhotoShop</strong> - Software usado para edição de imagens.
* <strong>HTML5</strong> - Linguagem de marcação.
* <strong>React.js</strong> - Biblioteca para desenvolvimento front-end.
* <strong>TypeScript</strong> - Linguagem de programação usada no desenvolvimento.
* <strong>Styled Components</strong> - Usada para estilização.
* <strong>Node.js</strong> - É um runtime, que nada mais é do que um conjunto de códigos, API’s, ou seja, são bibliotecas responsáveis pelo tempo de execução (é o que faz o seu programa rodar) que funciona como um interpretador de JavaScript fora do ambiente do navegador web..
* <strong>MySQL</strong> - Banco de dados.
* <strong>Express</strong> - Framework para Node.js que fornece recursos mínimos para construção de servidores web.
* <strong>Prisma</strong> - Biblioteca open source, um ORM de próxima geração cuja arquitetura é desenhada em três camadas fundamentais: Prisma Client: um construtor de queries gerado automaticamente e type-safe para Node.js e TypeScript.
* <strong>Cors</strong> - Biblioteca para um sistema que consiste na transmissão de HTTP headers (en-US), que determina se navegadores vão bloquear código JavaScript de acessarem respostas provindas de requisições entre origens.
* <strong>Bcryptjs</strong> - Biblioteca para encriptação de dados.
* <strong>Dotenv</strong> - Biblioteca que carrega automaticamente as variáveis de ambiente de um arquivo.
* <strong>Jsonwebtoken</strong> - Biblioteca para criação de dados com assinatura opcional e/ou criptografia cujo payload contém o JSON que afirma algum número de declarações.
* <strong>Multer</strong> - Biblioteca middleware que vai interceptar o upload e salvar o arquivo em uma pasta do disco.

<hr/>

<h2 id="demo-project">Deploy do Projeto</h2>

<br />

### Deploy front-end:
> O deploy do front-end foi realizado na hostinger.

<br />

### Link: <a align="left" href="https://www.marioelvio.com/" target="_blank">https://www.marioelvio.com/</a>

<br />

### Deploy do back-end:
> Em breve.

<br />

### Deploy do banco de dados:
> Em breve.

<hr/>

<h2 id="features" align="center">Features</h2>

<br />

> Projeto ainda está em desenvolvimento e os próximos passos serão atualizados abaixo:

* [X] Requirements gathering.
* [X] Interface design.
* [X] Svgs adjustments.
### Front-end:
* [X] Project structure (folders, color palette, fonts and routes).
* [X] Header.
* [X] Menu.
* [X] Footer.
* [X] Multi-language.
* [X] Home page.
* [X] About page.
* [X] Portfolio page.
* [X] Project page.
* [X] Blog page.
* [X] Contact page.

### AdminPanel:
* [ ] Login page.
* [ ] Settings page.
* [ ] About page.
* [ ] Resume page.
* [ ] Personal details page.
* [ ] My interests page.
* [ ] Work Experience page.
* [ ] Education page.
* [ ] Certificates page.
* [ ] Courses page.
* [ ] Soft Skills page.
* [ ] Hard Skills page.
* [ ] Portfolio list page.
* [ ] Edit portfolio page.
* [ ] Technologies page.

### Back-end:
* [X] Configurar Prisma schema.

* [X] Cadastrar usuário (Limite de apenas um usuário).
  #### Método:
  > POST

  #### Rota:
  > /user

  #### json:
  ``` json
   {
      "username": "username",
      "email": "exemplo@exemplo.com",
      "password": "12345678"
   }
  ```

* [X] Listar dados do usuário.
  #### Método:
  > GET

  #### Rota:
  > /user

* [X] Login do usuário.
  #### Método:
  > POST

  #### Rota:
  > /session

  #### json:
  ``` json
   {
      "username": "username",
      "password": "12345678"
   }
  ```

  > Ao fazer login irá retornar os dados do usuário e o token que será utilizado para as proximas APIs.

  #### resposta exemplo:
  ``` json
   {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "username": "username",
      "email": "exemplo@exemplo.com",
      "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   }
  ```

* [X] Editar usuário.
  #### Método:
  > PUT

  #### Rota:
  > /user

  #### json:
  ``` json
   {
      "id_user": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "email": "exemplo@exemplo.com",
      "phone": "+55 99 99999-9999",
      "linkedin": "https://www.linkedin.com/in/marioelvio/",
      "github": "https://github.com/jukerah/",
      "youtube": "https://www.youtube.com/channel/UCIuG63VswXMTYUuzeZgqRjw"
   }
  ```
  
  #### Bearer Token:
  `TOKEN: token recebi ao logar usuário`

  `PREFIX: Bearer`

* [ ] Cadastrar idiomas (ao criar um idioma deve ser inserido uma linha para cada idioma cadastrato na tabela "about").
* [ ] Editar idiomas.
* [ ] Listar idiomas.

* [ ] Editor about (fornecer um idioma para editar os dados).
* [ ] Listar about.

* [ ] Cadastrar meus interesses.
* [ ] Listar meus interesses.
* [ ] Deletar interesse.

* [ ] Cadastrar experiencia de trabalho (ao iniciar o cadastro deve ser criar uma linha na tabela "work_experience" e uma linha para cada idioma na tabela "work_details").
* [ ] Listar experiencias de trabalho.
* [ ] Editar experiencia de trabalho (após abrir cadastro fornecer um idioma para editar os dados).
* [ ] Deletar experiencia de trabalho.

* [ ] Cadastrar curso (ao iniciar o cadastro deve ser criar uma linha na tabela "courses" e uma linha para cada idioma na tabela "course_details").
* [ ] Listar cursos.
* [ ] Editar curso (após abrir cadastro fornecer um idioma para editar os dados).
* [ ] Deletar curso.

* [ ] Cadastrar educação (ao iniciar o cadastro deve ser criar uma linha na tabela "education" e uma linha para cada idioma na tabela "education_details").
* [ ] Listar educação.
* [ ] Editar educação (após abrir cadastro fornecer um idioma para editar os dados).
* [ ] Deletar educação.

* [ ] Cadastrar certificados (ao iniciar o cadastro deve ser criar uma linha na tabela "certificates" e uma linha para cada idioma na tabela "certificate_details").
* [ ] Listar certificados.
* [ ] Editar certificado (após abrir cadastro fornecer um idioma para editar os dados).
* [ ] Deletar certificado.

* [ ] Cadastrar soft skill (ao iniciar o cadastro deve ser criar uma linha na tabela "soft_skills" e uma linha para cada idioma na tabela "soft_skills_details").
* [ ] Listar soft skills.
* [ ] Editar soft skill (após abrir cadastro fornecer um idioma para editar os dados).
* [ ] Deletar soft skills.

* [ ] Cadastrar hard skill (ao iniciar o cadastro deve ser criar uma linha na tabela "hard_skills" e uma linha para cada idioma na tabela "hard_skills_details").
* [ ] Listar hard skills.
* [ ] Editar hard skill (após abrir cadastro fornecer um idioma para editar os dados).
* [ ] Deletar hard skills.

* [ ] Cadastrar tecnologia.
* [ ] Listar tecnologias.
* [ ] Editar tecnologia.
* [ ] Deletar tecnologia.

* [ ] Cadastrar projeto (ao iniciar o cadastro deve ser criar uma linha na tabela "projects" e uma linha para cada idioma na tabela "project_description").
* [ ] Listar projetos.
* [ ] Editar projeto.
* [ ] Deletar projeto.

#### Database:
* [X] Database model

<img src="preview/database_model.png"/>

* [X] Create database.

<hr/>

<h2 id="pre-req">Pré-requisitos e instalação do projeto</h2>

### Public (Front-end):
#### Instalação:
#### `npm install`
#### Execução:
#### `npm start`

#### Build:
#### `npm run build`

<br />

### Server (Back-end):
#### Instalação:
#### `npm install`
#### Execução:
#### `yarn dev`

<br />

#### Banco de dados localhost:

- Instalar MySQL.
- Abrir o MySQL Workbench no localhost.
- Executar as queries abaixo:

``` sql
CREATE DATABASE db_name;
```

``` sql
USE db_name;
```

<br>

#### Configurando variavel de ambiente:

#### Arquivo: `marioelvio-portfolio/back-end/.env`

<br>

#### `DATABASE_URL="mysql://user:password@host:port/db_name"`

<br>

#### Criando a Migrate em desenvolvimento:

#### marioelvio-portfolio\back-end>
`yarn prisma migrate dev`

<br>

#### Criando a Migrate em produção:

#### marioelvio-portfolio\back-end>
`yarn prisma migrate deploy`


<hr/>

<h2 align="center">Autor</h2>

<a href="https://marioelvio.com" target="_blank">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81795443?v=4" width="100px;" alt=""/>
</a> <a href="https://marioelvio.com" title="Mario Elvio" target="_blank"></a>

<p>Desenvolvido por <a href="https://marioelvio.com">Mario Elvio</a>.</p>

[![Linkedin Badge](https://img.shields.io/badge/-Mario_Elvio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marioelvio/)](https://www.linkedin.com/in/marioelvio/)

