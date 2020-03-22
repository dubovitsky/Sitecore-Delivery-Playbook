---
title: "Content Deployment Process"
metaTitle: "Content Deployment Process"
metaDescription: "Defining the right content deployment process is important on the project. It affects perfomance of the team members including developers and qa engineers. Choosing the right approach can improve product quality and team velocity."
---

Defining the right content deployment process is important on the project. It affects perfomance of the team members including developers and QA engineers. Choosing the right approach can improve product quality and team velocity.

Content in Sitecore is stored under the `/sitecore/content` and `/sitecore/media library` sections.

All custom items under `/sitecore/layout`, `/sitecore/system`, `/sitecore/templates` should be synced across all environments and not be available for content editors by default.

![Development Process](/images/content-deployment-process.png)

## Content Development and Deployment Workflow 

1. *Sitecore developer* in addition to code changes prepares test content and commits it to the **source control** and preapares content configuration specification in the project wiki.
1. *Sitecore developers* sync and deploy test content in **local** environments from the source control.
1. CD deploys code and test content on **AQA** environment.
1. CD deploys code on **QA** environment. *QA engineer* manually configures components using specifications prepared by developers.
1. CI/CD builds and deploys code on the **UAT** environment. Then the *client* manually configures components using the specification the development team provided.
1. CI/CD builds and deploys code on the **Production** environment. Then *content managers* manually configures components using the specification the development team provided.

### Sync Rules
All items in Sitecore are overwritted with items from the source control after a deployment on **Local**, **Development** and **AQA** environments. 

Only new items are deployed from the source control into Sitecore on the **QA**, **UAT**, **Production** environments.

### Exceptions
There are some exceptions in this process.

1. The first-level content structure is synced across all the environments:

    * sitecore
        * Content
        * Site
            * Home
            * Settings
            * Global

1. `Dictionary/*` and `Settings/*` items are synced across all the environments.

1. First-level children items under `Global/*` are synced as well. 

### Benefits
⚖️ Synced content across all local and AQA environments brings consistency and makes all features available without any manual configuration.

📄 Taking into account configuration of some components are not trivial task from configuration point of view all components are delivered along with configuration specification.

🧪 Components and related documentation are tested together and delivered to content editors.

### Auto Tests
Tests on the AQA environemnt should not rely on static state of the content but include scenarious for various content creation and configuration.

## Content Synchronization from Production
Taking into account that production content creation is executed directly in production environment the delivery process should include the process of production content synchronization into lower environments including UAT, QA, AQA, Local after a release is made.