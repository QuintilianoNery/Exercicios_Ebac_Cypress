<h1 align="center">Exercício EBAC Testes de API e GUI</h1>

---

## Configurando o Ambiente :gear:

- [Cypress.io](http://www.cypress.io)

- [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

### Requisitos para instalação

- [Node.js](https://nodejs.org/en/)
- [Java 8 ou superrior caso use o Allure Report](https://javadl.oracle.com/webapps/download/AutoDL?BundleId=244036_89d678f2be164786b292527658ca1605)

### Instalação do NPM e instalação do Cypress

Na pasta do projeto abra o terminal ou no VSCode use o Ctrl + ' (aspas simples), e digite os comandos abaixo:

```shell
npm init -y
npm install --yes
npm install cypress -d
npm i faker-br --dev
```

### Comandos para iniciar o Cypress :gear:

#### Iniciar o Cypress no navegador:

```shell
   npx cypress open
```

#### Para executar em modo headless:

```shell
   npx cypress run
```

#### Dependências
```
    "@shelex/cypress-allure-plugin": "^2.28.0",
    "cypress": "^10.3.0",
    "faker-br": "^0.4.1",
    "leite": "^0.2.0"
    "cypress-tesults-reporter": "^1.2.0"

```
