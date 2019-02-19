# Wild Tiger Thai

### Restaurant and Bar

###### a case study in web development

## TODO

-   Add Project Outline Doc
-   Add Design Docs
-   Add Mockups
-   Add Codebase

### PROJECT ORGANIZATION

-   React JS - /wtt-react

There is likely to be a lot of inconsistencies across the codebase as I'm learning React during development

### COMPONENTS

##### App

Application entry point.
Subcomponents

-   TopBar
-   HomeSection
-   MenuSection
-   ContactSection

##### Grid

Reusable component for creating css grids. Optionally animated.
Libraries

-   React Transition Group

##### TopNav

Fixed header. Contains logo and site navigation.
Subcomponents

-   Hamburger
-   PageLinks

##### Hamburger

SVG menu for mobile.

##### PageLinks

Links to page sections.

##### HomeSection

Main landing page for website.
Subcomponents

-   Grid

##### MenuSection

Menu section. Container for menus, menu button event handlers, and food images.
Subcomponents

-   MenuNav
-   Menu
-   Grid
-   ImageGroup
    NOTE: Menus loaded as JSON data, currently in static .json files

##### MenuNav

Navigation controls for the menu.

##### Menu

Menu rendering component. Maps the 2D array of a menu to HTML elements.

##### ImageGroup

Creates a mapping of images based on the options in images.js file.

##### ContactSection

Contact information, store hours, and various images.
Subcomponents

-   Grid
-   ImageGroup
