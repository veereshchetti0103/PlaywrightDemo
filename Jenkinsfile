pipeline {
    agent any  // Uses any available agent
    stages {
        stage('Build and Test') {
            steps {
                script {
                    // Ensure Docker is correctly used
                    def playwrightImage = docker.image('mcr.microsoft.com/playwright:v1.40.0')
                    playwrightImage.pull()  // Pull latest image
                    playwrightImage.inside {
                        sh 'npm install'
                        sh 'npx playwright e2e:test'
                    }
                }
            }
        }
    }
}
