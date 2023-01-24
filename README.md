# LEARN TO PRONOUNCE
#### Video Demo:  <https://youtu.be/ikNdgQqige0>
#### Description:

## Overview:

For my final project in CS50, I built a chrome extension called 'Learn to pronounce'. This chrome extension helps in easy access to pronunciation. This can be used across any web page. 

The user after installing this extension in their Google chrome will be able to select any full text(like a proper word) on a web page. Once selected, a popup appears next to it. The user can directly click on the 'speak' button to hear the default accent (American English accent). The user also has the ability to choose between three different accents namely, American English, British English and Indian English within the popup intself(instantly) and then click on the 'speak' button to listen to the respective pronunciations.

For building this project I have created 3 files namely, manifest.json, pronounce.js, and main.css. 

## Manifest.json:

In manifest.json, I have given a name and description for my extension, I have also declared the version of the manifest I am using, and also my applications's version. In icons, I have given four paths for four different sizes of the same image to be set as an icon that appears in this extension. In content scripts, under matches, I have declared that this extension should run on all web pages. I have also linked the css and javascript files.

## Pronounce.Js:

The pronounce.js file is the main javascript file which includes all the functionalities of my project. I created an element <span> and attached it to the body of a webpage. Inside the element, I added a space for the selected text to appear, three options for the user to choose any of the different English accents(American, British, Indian), and also added a submit button. Whenever a mouseup event occurs, and if a proper text(a full word) has been selected then, the popup(hidden by default) is positioned to appear near the word selected and be visible.

I am getting an instance named 'speech' of the 'SpeechSynthesisUtterance()'. Speech has properties like text, voice, rate, pitch, etc., Once the proper word gets selected the speech's text property is assigned to the text that has been selected. In the event of a 'click' on the submit button, the speech's rate is set to 0.9(moderate rate of speech)

I am using the window.speechSynthesis.getVoice() API to get an array of all the different voices with different accents. When the user selects a particular accent, then the speech's voice property is assinged to its appropriate accent. The speech's pitch properties can also be set anywhere between 0 to 2(our choice). Once finished with the above steps, using window.speechSynthesis.speak(), the text is spoken by the system. If no accent is selected the voice is set to American accent(default).

## Main.css:

The main.css is the design file. It includes the design of the popup. I have created a class selector named 'popup-box' and set the visibility as hidden(default). I have also set its position, background color, width of the popup, text color, border radius, the padding, font size and z-index(stack order of the element). 

