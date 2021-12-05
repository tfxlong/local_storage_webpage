## Task 2 - Local Storage
---

This page was a little more complex to create, as it required the extraction of data that was encapsulated within dictionaries. I have left some of my debugging code. After utilising just the square colors, I added characteristics such as font-color and number_of_clicks so that it could display a collection of properties in a dictionary, rather than just a single property.

There were a few options to store the data.

1) Single Key = all information as one JSON string
2) Key per Square = properties of each square as JSON string
3) Key per property of Square = specific property value as JSON string

While all are usable, number 2 is a good balance, allowing data to be compressed sufficiently, while making it easier to save and reload as required. It is also suitable for this program. 

It is also acknowledged that while there was some examples for a list design, the Assessment requirement was non-specific on how to demonstrate the local Storage. As such, I thought that this was a creative way to still demonstrate how the local storage operates, while using CSS effects for interest, and creating a page that one could imagine for further evolution. 