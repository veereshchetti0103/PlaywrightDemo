pipeline {
    agent any

    tools {
        nodejs "NodeJS 23.9.0" // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/veereshchetti0103/PlaywrightDemo.git'  // Replace with your repo URL
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests in Docker') {
            steps {
                sh 'npx playwright install --with-deps'  // Ensure browsers are installed
                sh 'npm run e2e:test'
            }
        }
    }
}
