pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Use the Node.js version configured in Jenkins
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
                sh '''
                docker run --rm \
                  -v $(pwd):/app \
                  -w /app \
                  --shm-size=2gb \
                  mcr.microsoft.com/playwright:focal \
                  npm run e2e:test
                '''
            }
        }
    }
}
