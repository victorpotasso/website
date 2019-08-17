#!/usr/bin/env groovy

pipeline {
  agent any

  stages {
    stage('Dependencies') {
      steps {
        sh 'sudo rm -rf package-lock.json'
        sh 'sudo rm -rf node_modules'
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