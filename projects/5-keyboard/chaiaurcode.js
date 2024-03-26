const idEvent = document.getElementById("google_link");
const images = document.getElementById("images");

const gg = idEvent.addEventListener("click", function (e) {
  console.log(e);
  e.preventDefault(); // to prevent default behavior when click on

  // Event Public, Event Propogation, true capture event, false bubbling event,
  //types , timestamp,  default-prevented , target , toElement , srcElement, clientX,clientY, ScreenX, ScreenY, shiftKey, Keycode,
});

document.addEventListener("click", function () {
    // Get the container of all images
    const imagesContainer = document.getElementById("images");
  
    // Add click event listener to the container
    imagesContainer.addEventListener("click", function (event) {
      // Check if the clicked element is an image
      if (event.target.tagName === "IMG") {
        // Get the alt attribute of the clicked image
        const altName = event.target.alt;
  
        // Remove the parent container of the clicked image from the DOM
        event.target.parentNode.remove();
  
        // Create a message element
        const message = document.createElement("div");
        message.textContent = "You removed: " + altName;
  
        // Append the message to the container
        imagesContainer.appendChild(message);
  
        // Remove the message after 2 seconds
        setTimeout(function () {
          message.remove();
        }, 100);
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const showKeyDiv = document.getElementById("show_key");
  
    // Add event listener for keydown event
    document.addEventListener("keydown", function (event) {
      // Get the key pressed
      const keyPressed = event.key;
  
      // Update the content of the show_key div
      showKeyDiv.textContent = "Pressed Key: " + keyPressed;
    });
  });
  
