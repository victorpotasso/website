#!/usr/bin/env groovy

pipeline {
  agent any

  stages {
    stage('Dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        echo 'Building files...'
        sh 'npm run build'
      }
    }
  }
}