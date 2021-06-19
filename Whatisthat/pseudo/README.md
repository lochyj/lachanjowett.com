# Pseudo elements

Pseudo elements are selectors you add to html elements that change a certain thing such as what happens when you hover over an element, you do this by ading the :Hover pseudo element to you css file and then defing which element

## ::placeholder

-use with input or textarea elements
-What it does: adds a placeholder text such as "Type here: " to a textbox, this text will disapear as soon as the user starts typing

## ::Before

Use with any body html elements
whatever styling you add here will add this before the html element specified such as: 
::Before selects here
Selected content/ Selected div

## ::After

Use with any body html elements
whatever styling you add here will add this before the html element specified such as: 
Selected content/ Selected div
::After selects here

## ::First-letter and ::First-line

### ::First-letter

::first-letter does exactally what is says, it selects the first letter of the p, h1 h2, etc...

### ::First-line

::first-line also does exactally what is says, it selects the first line of content in a: p, h1 h2... tag

## ::file-selector-button

Use with input element with this specificaly: input type="{File type}" id="fileUpload", you reference it with: 'class or element e.g: input'[type=file]::file-selector-button

## ::selection

the ::selection pseudo element effects text when its highlighted, it also affecs images and other html elements

## Sources

* Mozilla: developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

# pseudo classes

## :hover

effects elements when hovered over with a curser, this is good for ux

## :active

effects elements that have been activated. e.g: Clicked on, an input that is being typed in

## :visited

effects a tags that have been clicked on

## :link

effects a tags that haven't been clicked on
