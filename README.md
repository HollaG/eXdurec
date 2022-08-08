# eXdurec
Functions to help ease the pain of selecting modules on EduRec

### fullscreen_modal.js
**Use Cases**
- Select Tutorials / Labs --> Select Tutorials/Labs
- Select Tutorials / Labs --> Rank Tutorials/Labs

**Usage Guide**
1. After opening the popup to select / rank tutorials/labs, open the Chrome DevTools console by pressing the `F12` key on your keyboard.
2. Paste the following code into the terminal and run the code by pressing `enter`.
```
fetch('https://raw.githubusercontent.com/HollaG/eXdurec/main/fullscreen_modal.js')
    .then(response => response.text())
    .then(text => eval(text))
    .then(() => console.log("Loaded!"))
```
3. If you exit the modal, just paste and run the code again.