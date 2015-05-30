# accordify.js - jQuery accordion plugin #

Accordify.js is a simple barebones accordion plugin for jQuery with a few basic options.

## Source files ##

- **src/accordify.js** - Main js plugin file
- **css/style.css** - Basic style for demo including icon rotation
- **index.html** - Simple demo
- **images/plus-icon.png** - example open icon (rotates 45 degrees for close)

## Installation/Usage ##

Include the latest version of jQuery along with the plugin file:
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="src/accordion.js"></script>
```

Set a trigger class or id on your trigger element:
```html
<h2 class="accordion-trigger">Trigger 1</h2>
```
Add the accordion class to the element that will be collapsed/expanded - this element should come immediately after the trigger element.
```html
<ul class="accordion">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
```

Call the plugin:
```javascript
$('.accordion-trigger').accordify();
```

## Options ##
Various options can be added to customise the accordion e.g.
```javascript
	$('.accordion-trigger').accordify({
		singleOpen: true,
		openSpeed: 500,
		closeSpeed: 200
	});
```


| Option        | Value           | Description  |
| ------------- |---------------| -----|
| singleOpen      | true/false | default: true - Setting to false will allow several accordions to be open at the same time |
| startOpen      | true/false      |   default: false - Whether or not accordion is open or closed on page load |
| target | string      |  default: ".accordion" - The target element to be collapsed/epanded|
| activeClass | string      |   default "acActive" -  The classname to be applied to active trigger element|
| openSpeed | int      |   default: 500 - The speed the accordion slides down |
| closeSpeed | int      |  default: 500 - The speed the accordion slides up |
| openIcon | string (html)      |   default: '`<img src="images/plus-icon.png" />`' This can be simple text e.g. "+" or html img tag |
| closeIcon | string (html)      | default: "rotate" -   This can be simple text e.g. "x" or html img tag, or "rotate". Setting it to rotate will rotate the openIcon if using an img |
