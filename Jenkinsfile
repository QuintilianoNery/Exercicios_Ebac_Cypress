pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'master', url:'https://github.com/QuintilianoNery/Exercicios_Ebac_Cypress.git'
            }
        }
        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                sh 'NO_COLOR=1 npx cypress run'
            }
        }
    }
}