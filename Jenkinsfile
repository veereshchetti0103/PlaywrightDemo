pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:focal' // Official Playwright image
            args '--user root'  // Run as root to avoid permission issues
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/veereshchetti0103/PlaywrightDemo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx run e2e:test'
            }
        }
    }
}
