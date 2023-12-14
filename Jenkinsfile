pipeline {
    agent any
    
    options {
        timeout(time: 1, unit: 'HOURS') // set timeout 1 hour
    }
    
    environment {   // 전역 변수
        CONTAINER_URI = '864172178598.dkr.ecr.ap-northeast-2.amazonaws.com/kotech-hub-manager-repository'  // ECR 레포지토리 URI
        ECR_URI = '864172178598.dkr.ecr.ap-northeast-2.amazonaws.com'  // ECR 레포지토리 URI
        CLUSTER_NAME = 'kotech-hub-manager'                     // ECS 클러스터
        TASK_NAME = 'hub-manager'
        AWS_CREDENTIALS = 'aws_access_key'
        GIT_CREDENTIAL_ID = 'github_access_token'
    }

    stages {
        stage('Checkout') {
            steps {
                // 소스 코드 체크아웃
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Docker 이미지 빌드
                script {
                    // gitcommit number -> build / imagename 
                    def gitCommit = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
                    sh "docker build -t ${CONTAINER_URI}:${gitCommit} ."
                }
            }
            post {
                success {
                    echo 'Success dockerzing project'
                }
                failure {
                    error 'Fail dockerizing project' // exit pipeline
                }
            }
        }
        
        stage('Push') {
            steps {
                script {
                    def gitCommit = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
                    sh 'rm -f ~/.dockercfg ~/.docker/config.json || true'
                    sh "docker login -u AWS -p \$(aws ecr get-login-password --region ap-northeast-2) ${ECR_URI}"
                    sh "docker push ${CONTAINER_URI}:${gitCommit}"
                    sh "docker rmi ${CONTAINER_URI}:${gitCommit}"
                }
            }
            post {
                success {
                    echo 'Success upload image'
                }
                failure {
                    error 'Fail upload image' // exit pipeline
                }
            }
        }
        
        stage('Prepare Deploy') {
            steps {
                // taskdef.json 변경/업데이트
                script {
                    def gitCommit = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
                    sh "sed -e 's;%GIT_HASH%;${gitCommit};g' taskdef.json > taskdef-${gitCommit}.json"
                    sh "aws ecs register-task-definition --family ${TASK_NAME} --cli-input-json file://taskdef-${gitCommit}.json"
                }
            }
        }
        stage('Deploy') {
            steps {
                // ECS Fargate에 배포
                script {
                    def gitCommit = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
                    def TASK_DEFINITION = sh (returnStdout: true, script: "aws ecs describe-task-definition --task-definition ${TASK_NAME} | egrep 'taskDefinitionArn' | tr ',' ' ' | awk '{print \$2}' | tr '\"' ' '").trim()
                    sh "aws ecs update-service --cluster ${CLUSTER_NAME} --service dev --task-definition ${TASK_DEFINITION}"
                }
            }
        }
    }
}