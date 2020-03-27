---
title: "Coding Guidelines"
metaTitle: "Coding Guidelines"
metaDescription: ""
---

## Sitecore Components

### Data Templates

Folder structure for data templates:

* **/YOURSITE/[Layer]/[Module]**
* **/Content Types** - all templates for content
* **/[Group]** (optional)
* **/Folders** - special folder templates with insert options
* **/Rendering Parameters** - rendering parameters templates

### Rendering Parameters

Rendering Parameters template location:

* **/YOURSITE/[Layer]/[Module]**
* **/Rendering Parameters**

If Rendering Parameter is a drop-down list, put the list of values to:

* **/Settings/[Module]/[Feature]**
* **/Rendering Parameters**
* **/[Rendering Name]**
* **/[Parameter Name]**

### General

🖼️ Always set Icon for all renderings and data templates. Use icons from Office icon set.

⚡ If rendering has a data source – always specify data source template and data source location.

⚡ Update insert options for page and data templates.

⚡ Update placeholder settings for page templates.