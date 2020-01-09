---
title: "Branching Strategy"
metaTitle: "Branching strategy on Sitecore projects"
metaDescription: ""
attachments:
  - "./src/components/images/gitflow.png"
---

## GitFlow

![GitFlow](https://docs.microsoft.com/en-us/azure/architecture/framework/_images/hotfix-branches.png)

> Gitflow Workflow is a Git workflow design that was first published and made popular by Vincent Driessen at nvie. The Gitflow Workflow defines a strict branching model designed around the project release. This provides a robust framework for managing larger projects.
>
> *https://docs.microsoft.com/en-us/azure/architecture/framework/devops/gitflow-branch-workflow*

There are 5 concept branches in this model: develop, feature, release, master and hotfixes. There are only one master and one develop branches, the others can have many.

### Develop
The develop branch is the main root for feature development process.

### Feature
Feature branches, are created from develop and merged when finished with develop again.

### Release
Release branches are created from develop and merged when finished to develop and master. The release branch is the root of the project and production environment is deployed from this branch.

### Hotfix
Hotfix branches are created from the master branch and merged when finished to develop and master.
Hot fixes are created ONLY to address critical functionality issues found after a release.  For example, if a release is deployed to production, it is discovered that products can't be loaded, a hotfix branch will be created, and an incremental release will be performed including this hot fix.  It should not be used to fast track new functionality or code enhancements.
