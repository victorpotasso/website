#!/usr/bin/env groovy

pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Building files...'
        sh 'npm run build'
      }
    }
  }
}