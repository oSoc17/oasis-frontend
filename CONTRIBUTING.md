# Contribution guidelines
## Coding Conventions
To keep out codebase clean and persistent we use the slightly tweaked standard Angular + Typescript coding conventions.

### Naming conventions & Typography
#### Local, public, private and static variables
All local, public, private and static variables should be ``camelCased`` and descriptive.
Example:
```
let connType: string;
```
#### Class names
All class names should be ``Capitalized`` and descriptive and in best case scenario only contains one word.
Example:
```
export class Connection {

}
```
#### Strings
Strings should be surrounded with single quotes ``'`` or using the ES2016 template declaration.
Example
```
let staticString = 'Hello world!';
let worldText = 'world!';
let templateString = `Hello ${worldText}`;
```

### Variables
All variables should be declared with it's type.
Example:
```
let connType: string;
```
Variables that don't change/are constant should always be declared using the ``const`` instead of ``let``.
Variables should always be declared using either ``const`` or ``let``, never using ``var``.

### File Naming
All file names should be ``camelCased``!
#### Services
Services should be named using the following template
``<serviceName>.service.ts``
#### Classes
Classes should be named using the following template
* ``<className>.class.ts``
* ``<className>.ts`` (If folder name describes it as a folder full of classes)
#### Components
Components should be named using the following template
* ``<componentName>.component.ts``
* ``<componentName>.component.html``
* ``<componentName>.component.scss``

### Requires & Imports
#### Requires
Requires should always be declared as a ``const`` and using single quotes ``'``
Example
```
const config = require('./config.json');
```
#### Imports
Requires should always be declared as a ``const`` and using single quotes ``'``
Example
```
import { NgModule } from '@angular/core';
```

### Components
#### Component naming
Components should be treated like classe and be `Capitalised`.

Selectors should be lowercase splitted by a "-" in case it's necessary.
```
@Component({
    selector: 'app-root'
...
```
#### Styles
Styles should use scss at all times, no use of using double declaration for classes or whatnot.
Example:
```
.block {
    font-family: montserrat;
    color: black;
    &:hover {
        color: grey;
    }
}
```

### Indentation
As indentation we represent a tab using 4 spaces.