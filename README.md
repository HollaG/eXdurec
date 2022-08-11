# eXdurec
Functions to help ease the pain of selecting modules on EduRec

### fullscreen_modal.js
**Use Cases**

To enlarge the viewable area when viewing and ranking Tutorials and Labs.
- Select Tutorials / Labs --> Select Tutorials/Labs
- Select Tutorials / Labs --> Rank Tutorials/Labs

*Before*
![Before](https://i.imgur.com/ciQmsM3.png)

*After*
![After](https://i.imgur.com/01Dqs97.png)

**Usage Guide**
1. After opening the popup to select / rank tutorials/labs, open the Chrome DevTools console by pressing the `F12` key on your keyboard.
2. Paste the following code into the terminal and run the code by pressing `enter`.
```
fetch('https://raw.githubusercontent.com/HollaG/eXdurec/main/fullscreen_modal.js')
    .then(response => response.text())
    .then(text => eval(text))
    .then(() => console.log("Loaded!"))
```
3. If you exit the popup, just paste and run the code again.
* The code only changes the style of the web page. It does not modify any data. You are welcome to read through the code [here](https://github.com/HollaG/eXdurec/blob/main/fullscreen_modal.js).
* If you get an error, refresh the page and try again.
