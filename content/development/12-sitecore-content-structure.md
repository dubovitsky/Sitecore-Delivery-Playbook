---
title: "Sitecore Content Structure"
metaTitle: "Sitecore Content Structure"
metaDescription: ""
---

The following Sitecore Data Structure was proposed: 
```
* Content
  * Home
  * Yoursite
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
* ...
* Layout
  * Yoursite
    * Foundation
    * Feature
    * Project
* Media Library
  * Yoursite
    * Foundation
    * Feature
    * Project
* Templates
  * Yoursite
    * Foundation
    * Feature
    * Project
```
**Content / Yoursite / Home** item contains only pages that are accessible for users.

**Content / Yoursite / Data** item contains data source items for componentns e.g. Navigation or any other reusable component.

**Content / Yoursite / Data / Dictionary** item contains dictionary items in Sitecore.

**Content / Yoursite / Settings** item contains configuration