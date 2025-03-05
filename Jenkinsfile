pipeline {
    agent any  // Change this if not using Docker as an agent
    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('mcr.microsoft.com/playwright:v1.40.0').inside {
                        sh 'npm install'
                        sh 'npx playwright e2e:test'
                    }
                }
            }
        }
    }
}
