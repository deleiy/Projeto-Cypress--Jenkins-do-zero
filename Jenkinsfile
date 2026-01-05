// Jenkinsfile - Cypress em Windows (com reporter JUnit)
pipeline {
  agent { label 'windows' }

  options { timestamps(); ansiColor('xterm'); buildDiscarder(logRotator(numToKeepStr: '20')) }

  environment {
    NPM_CONFIG_CACHE = "${WORKSPACE}\.npm-cache"
    CYPRESS_CACHE_FOLDER = "${WORKSPACE}\.cypress-cache"
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/deleiv/Ebac-cypress-samples-delei.git']]])
      }
    }
    stage('Prepare Caches') {
      steps { bat '''
          if not exist "%NPM_CONFIG_CACHE%" mkdir "%NPM_CONFIG_CACHE%"
          if not exist "%CYPRESS_CACHE_FOLDER%" mkdir "%CYPRESS_CACHE_FOLDER%"
          npm config set cache "%NPM_CONFIG_CACHE%"
        ''' }
    }
    stage('Install & Verify Cypress') {
      steps { bat '''
          npm ci
          npx cypress verify || npx cypress install
        ''' }
    }
    stage('Run Tests') {
      steps { bat '''
          npx cypress run --browser electron --headless --reporter mocha-junit-reporter --reporter-options mochaFile=cypress\results\results-[hash].xml,toConsole=true
        ''' }
    }
  }

  post {
    always { archiveArtifacts artifacts: 'cypress/screenshots/**, cypress/videos/**, cypress/results/**', allowEmptyArchive: true }
  }
}
