---
title: "Content Deployment Process"
metaTitle: "Content Deployment Process"
metaDescription: ""
---

![Development Process](/images/content-deployment-process.png)

## Content Workflow for Items in Development

1. A Sitecore developer prepares test content and content configuration specification together with code changes.
2. All Sitecore developers sync and deploy test content locally for consistency and make all features available without any additional configuration.
3. CI/CD instance builds and deploys code and a test content on the Integration environment. 
4. Auto tests are run on the Integration environment (AAT). Automation approach is described here 03 - Automation Approach
5. CI/CD instance builds and deploys code on Testing environment. Then QA manually configures components using the specification a developer prepared for the feature.
6. CI/CD instance builds and deploys code on UAT environment. Then QA manually configures components using the specification a developer prepared for the feature.
7. CI/CD instance builds and deploys code on Production environment. Then GE content team manually configures components using the specification a developer prepared for the feature and create content as needed.

### Benefits
Content is synced across all developer's environment.

### Issues
Auto UI tests rely on static state of the content.

### Content Synchronization
* Content creation should be executed directly in production environment and synchronized into UAT and Beta environments after a release is made.
* For Service Experience, where the content will not exist in Production initially, the content should be created in Beta and a package export should be generated, so content is not lost in case of a synchronization from Production is made. After Service Experience is in Production, then this step is not required anymore.
* The synchronization to Beta and UAT environment should be done via database backup and restore (typically just the master database, but in rare cases, the core database is also needed), but can also be done manually over package export when needed.
* Content synchronization from Production to Beta and UAT environments need to be aligned with the delivery team to avoid any content override.
* Lower environments should only for specific reasons synchronize content from Production via database backup and restore. Most of the cases, it should only be done via package export.