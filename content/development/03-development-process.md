---
title: "Development Process"
metaTitle: "Development Process"
metaDescription: "The development process describes all the main activities related to Sitecore developers on the project."
---

The development process describes all the main activities related to Sitecore developers on the project.

![Development Process](/images/development-process.png)

## Locally
Developer creates a branch in accordance to the [branching strategy](/development/09-branching-strategy), then adds commits with code changes, [unit tests](/development/05-unit-tests.md), [integration tests](/development/06-integration-testing.md), finally opens a Pull Request.

### Quality Gate
The Code complies with the [code convention](/development/04-coding-guidelines.md), [code standards](/development/04-coding-guidelines.md), passed [unit tests](/development/05-unit-tests.md) and [code coverage agreements](/development/5-unit-tests.md).

## Continuous Integration (CI)
CI builds the code, performs unit tests and generates a code coverage report.

### Quality Gate
The Code is successfully built, passed all unit tests, complies with static code metrics.

## Code Review
Development team reviewing and discussing the changes and approves it in case of there are no any issue.

### Quality Gate
The coding style matches project guidelines.

## Continuous Deployment (CD)
CD spin up an ephemeral environment, deploys the code and run integration tests to verify changes on the remote server.

### Quality Gate
The build is successfully deployed and passed all white box automated tests.

## Finally
Developer merges the branch.



<!--
https://kb.epam.com/display/EPMDMO/05.03+Development+Process

https://kb.epam.com/pages/viewpage.action?pageId=552624297
Process Steps
Code Crafting – the step when the team is creating the code, so code quality should be verified
Continuous Build – the step when source code of component/application is verified in terms of compellability and correctness
Continuous Deploy in Test – the step when the application as a whole is verified in terms of deployment correctness and quality
Deploy in Pre-Prod (integration environment) – the step when the solution as a whole is verified in terms of deployment for the other environment (almost production), and in terms of functional and non functional quality characteristics
Product ready for release - last step which implies deploy in Prod or if it is not possible then handover to the team responsible for production environment support all relevant documentation and artifacts. This team should deploy and verify that application works fine.


Quality Gateways
Gateway 1 – reflects condition that code submitted into version control system complies with code convention, code standards and passed code review.
Gateway 2 – reflects condition that code submitted into version control system passed all unite tests, complies with static code metrics and has successfully built. Also this gateway implies that build is tested in development environment and passed all white box automated tests.
Gateway 3 – reflects condition that build successfully deployed and passed all automated tests in Test environment and complies with quality criteria verified by QA team.
Gateway 4 – reflects condition that build successful passed all automated tests in the integrated environment similar to production, complies with quality criteria verified by QA team, passed user acceptance tests and other type of testing, which may include performance, stress, security testing etc. -->
