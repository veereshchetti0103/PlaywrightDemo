pipeline {
    agent any

    tools {
        nodejs "NodeJS 23.9.0"  // Ensure the correct NodeJS version is configured
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/veereshchetti0103/PlaywrightDemo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npx playwright install --with-deps'  // Install browsers outside Docker
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests in Docker') {
            steps {
                sh 'docker run --rm -v $(pwd):/app -w /app --shm-size=2gb --user=root mcr.microsoft.com/playwright:focal npm run e2e:test'
            }
        }
    }
}
