---
title: "Sitecore Content Structure"
metaTitle: "Sitecore Content Structure"
metaDescription: ""
---

The following Sitecore Data Structure was proposed: 
```
* Content
  * Home
  * YOURSITE
    * Home
      * Login
      * Registration
      * ...
    * Data
      * Dictionary
      * Navigation
      * Header
      * ...
    * Settings
      * Login
      * Registration
      * ...
```
**Content / YOURSITE / Home** item contains only pages that are accessible for users.

**Content / YOURSITE / Data** item contains data source items for componentns e.g. Navigation or any other reusable component.

**Content / YOURSITE / Data / Dictionary** item contains dictionary items in Sitecore.

**Content / YOURSITE / Settings** item contains configuration