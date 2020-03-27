---
title: "Development Process"
metaTitle: "Development Process"
metaDescription: "The development process describes all the main activities related to Sitecore developers on the project."
---

The development process describes all the main activities related to Sitecore developers on the project.

![Development Process](/images/development-process.png)

## 🧑‍💻 Local
Developer creates a branch in accordance to the [branching strategy](10-branching-strategy), then adds commits with code changes, [unit tests](06-unit-tests.md), [integration tests](07-integration-testing.md), and finally opens a pull request.

### 🧪 Quality Gate 1
The code complies with the [code convention](04-coding-guidelines.md), [code standards](04-coding-guidelines.md), passed [unit tests](06-unit-tests.md).

## 📝 Code Review
Development team reviews and discusses code changes and approves it in case of there are no issues.

### 🧪 Quality Gate 2
The coding style matches [project guidelines](04-coding-guidelines.md).

##  ⚙️ Integration
Continuous Integration (CI) builds the code, performs unit tests, generates a code coverage report, run static code analysis.

### 🧪 Quality Gate 3
Code is successfully built, passed all unit tests, complies with [code coverage agreements](06-unit-tests.md) and static code metrics.

## 🤖 AQA
Continuous Deployment (CD) spin up an ephemeral environment, deploys the code and run integration tests to verify changes on the remote server.

### 🧪 Quality Gate 4
The build is successfully deployed and passed all white box automation tests.

## 👩‍🔬👨‍🔬 QA
Developer merges the Pull Request and CD deploys build on QA environment. QA team performs manual testing. 

### 🧪 Quality Gate 5
The build complies with quality criteria verified by QA team.

## 👍 UAT
Lead developer cuts a release branch. CD deploys build on UAT environment. Client performs user acceptance testing. 

### 🧪 Quality Gate 6
The build passes user acceptance testing and other type of testing, which may include performance, stress, security testing etc. in the environment similar to production.
