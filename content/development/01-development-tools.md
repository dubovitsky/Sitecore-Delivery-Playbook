---
title: "Development Tools"
metaTitle: "Development Tools"
metaDescription: "The following list defines software and tools commonly used on Sitecore projects:"
---

Having the same development tools and software versions across development team is very important on any project. Wasting time on resolving issues related to inconsistency of software packages on different workstation can significantly effect a project timeline.

## Software Versions

| Software    | Version     | Description |
| ----------- | ----------- | ----------- |
| Sitecore Experience Platform | 9.3 | Combines customer data, analytics, and marketing automation capabilities to nurture customers throughout their journey with personalized content in real-time, across any channel. [www.sitecore.com/products](https://www.sitecore.com/products) |
| Sitecore JavaScript Services | 13.0 | SDK for JavaScript developers that enables you to build full-fledged solutions using Sitecore and modern JavaScript UI libraries and frameworks. [jss.sitecore.com](https://jss.sitecore.com/) |
| Unicorn | 4.1.1 | Unicorn is a utility for Sitecore that solves the issue of moving templates, renderings, and other database items between Sitecore instances. [Unicorn](https://github.com/SitecoreUnicorn/Unicorn) |

### Why Sitecore Experience Platform?
Sitecore Experience Platform comparing to Experience Manager brings rich marketing functionality including personalization, A/B testing, analytics, reporting, campaign creation and email management features.

### Why Sitecore JSS?
JSS is a complete SDK for JavaScript developers allowing to build full-fledged solutions using Sitecore and modern JavaScript UI libraries and frameworks (React.js and Angular). You can develop by being completely disconnected from Sitecore and get started without a Sitecore install. And deploy apps in physically decoupled way ("headless") to any platform and virtually to any cloud with full Sitecore Experience Platform capability preserved.

### Why Unicorn?
Unicorn is free and open source. Based on our experience Unicorn works faster in solutions with big amount of projects based on [Helix](https://helix.sitecore.net/) principles. See [the differences between TDS Classic and Unicorn](https://sitecore.stackexchange.com/a/8993).


## Front-end Assets
| Software    | Version     | Description |
| ----------- | ----------- | ----------- |
| Node.js | 12.14.1 | Node.js is used to build a project and run unit tests on development machines. https://nodejs.org/ |
| npm |  | Package management for FE application dependencies. https://www.npmjs.com/ |
| Webpack |  | Bakes bundles. https://webpack.js.org/ |
| Babel |  | Adds ES2018 features to all browsers. https://babeljs.io/ |
| SASS |  | Compiles CSS. https://sass-lang.com/ |
| TypeScript |  | https://www.typescriptlang.org/ |
| Jest |  | Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more. https://jestjs.io/ |
| Enzyme |  | Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output. https://github.com/airbnb/enzyme |
| TSLint |  | Runs code style checks. https://palantir.github.io/tslint/ |

## Development Tools

| Tool        | Version     | Description |
| ----------- | ----------- | ----------- |
| Visual Studio Professional | 2019 | Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft. |
| Visual Studio Code | 1.41.0 | Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. |
| SQL Server Management Studio | 18.4 | SQL Server Management Studio (SSMS) is an integrated environment for managing any SQL infrastructure, from SQL Server to Azure SQL Database. |
| Git client |  | The most popular Git clients are TortoiseGit, GitExtensions, SourceTree, Visual Studio Code. Developers can use any Git client. |

## Static Code Analysis

| Software    | Version     | Description |
| ----------- | ----------- | ----------- |
| StyleCop |  | StyleCop is an open-source static code analysis tool from Microsoft that checks C# code for conformance to StyleCop's recommended coding styles and a subset of Microsoft's .NET Framework Design Guidelines. [StyleCop](https://github.com/StyleCop/StyleCop) |

## Unit Test

| Software    | Version     | Description |
| ----------- | ----------- | ----------- |
| xUnit |  | xUnit.net is a free, open source, community-focused unit testing tool for the .NET Framework. https://xunit.net/ |
| NSubstitute |  | A friendly substitute for .NET mocking libraries. https://nsubstitute.github.io/ |
| FakeDB |  | This is the unit testing framework for Sitecore that enables creation and manipulation of Sitecore content in memory. It is designed to minimize efforts for the test content initialization keeping focus on the minimal test data rather than comprehensive content tree representation. https://github.com/sshushliapin/Sitecore.FakeDb |
| AutoFixture |  | AutoFixture is an open source library for .NET designed to minimize the 'Arrange' phase of your unit tests in order to maximize maintainability. Its primary goal is to allow developers to focus on what is being tested rather than how to setup the test scenario, by making it easier to create object graphs containing test data. https://github.com/AutoFixture/AutoFixture |

Follow the best practices for unit tests:
- [Unit testing best practices with .NET Core and .NET Standard](https://docs.microsoft.com/en-US/dotnet/core/testing/unit-testing-best-practices).
- [Naming standards for unit tests](https://osherove.com/blog/2005/4/3/naming-standards-for-unit-tests.html).

## Sitecore Accelerators

| Software    | Version     | Description |
| ----------- | ----------- | ----------- |
| Packer for Sitecore |  | This repository contains Packer templates for a local Sitecore hosting environment with IIS and and SQL Server on Windows, SOLR and Sitecore 9.0 building virtual machine images and Vagrant boxes for VirtualBox, provisioned with Chef. [asmagin/sitecore-packer](https://github.com/asmagin/sitecore-packer) |
| Yeoman solution generator |  | The scaffold is a generator based on Yeoman. It is designed to simplify and unify initial solution setup. It can save you time on configuration on early stages of the project. [epam/sitecore-engx-scaffold](https://github.com/epam/sitecore-engx-scaffold) |
| Cake.Sitecore | 1.0.15 | The library provides a set of pre-build CAKE tasks. Those tasks could be used to simplify a configuration of CI/CD for Helix-based Sitecore projects. https://cakebuild.net/addins/sitecore/ |

### Packer for Sitecore
There are VM images for Sitecore for development accelerator that can be quickly configured and run on developer's machines with Vagrant.

Vagrant is a tool for building and managing virtual machine environments in a single workflow. With an easy-to-use workflow and focus on automation, Vagrant lowers development environment setup time, increases production parity, and makes the "works on my machine" excuse a relic of the past. Details: https://www.vagrantup.com/.

This approach brings the following list of benefits to the project:

* Local environment can be installed and run in a few minutes (VM includes Sitecore, Solr, SQL, HTTPS etc)
* Consistency of working environment across all development machines
* In case of any issue with a VM it can be easily re-created

### Yeoman solution generator
The scaffold is a generator based on [Yeoman](http://yeoman.io/). It is designed to simplify and unify initial solution setup. It can save you time on configuration on early stages of the project. Details: https://github.com/epam/sitecore-engx-scaffold.

### Cake.Sitecore

Cake (C# Make) is a cross-platform build automation system with a C# DSL for tasks such as compiling code, copying files and folders, running unit tests, compressing files and building NuGet packages. It should be familiar for a Sitecore developers as script are written in C# and it is possible to use .NET dll and NuGet packages in them. The library also provides a set of ready tasks that could be configured with environment variables, arguments and inside script, which makes it highly suitable for DevOps. As those tasks are decoupled from your build server - it makes your process highly portable (TeamCity, Jenkins, VSTS or even local machine - doesn't really matter).
