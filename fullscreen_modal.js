(function adjustCss() {
    const popup = document.getElementById(
        `ptModTable_${{Array.from(Array(100).keys()).find((i) =>
            document.getElementById(`ptModTable_${i}`)
        )}`
    );
    if (!popup) {
        return console.error("Error - popup element not found");
    }

    popup.style.left = 0;
    popup.style.top = 0;
    popup.style.width = "100%";
    popup.style.height = "100%";

    const iframe = document.getElementById(
        `ptModFrame_${Array.from(Array(100).keys()).find((i) =>
            document.getElementById(`ptModFrame_${i}`)
        )}`
    );

    if (!iframe) {
        return console.error("Error - iframe element not found");
    }

    iframe.style.width = "100%";
    iframe.style.height = "100vh";

    // Observe for changes in the modal element which signifies a user just selected an option
    const observer = new MutationObserver((mutationList, observer) => {
        const mutation = mutationList[0];

        if (mutation.type === "attributes") {
            // Height / Width / whatever changed, run the function again
            // Check the target element to see if it's at the desired style values. Don't run the function again if the element already has the correct style values
            if (mutation.target.style.top !== 0) {
                adjustCss();
                observer.disconnect();
            }
        }
    });

    observer.observe(popup, {
        attributes: true,
    });
})();
