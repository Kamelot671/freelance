
    //fetch all the elements images in the dom and store them in one variable
   //with type Array called items
   const items = document.querySelectorAll(".slider");
   //define a variable called nbSlide which contains the length of the array items
   const nbSlide = items.length;
   //fech in the dom the image rightArrow and store in a variable called next
   const next = document.getElementById("btn-right");
   //fech in the dom the image leftArrow and store in a variable called prev
   const prev = document.getElementById("btn-left");
   //create a variable count which stores the current index of the image
   let count = 0;
   //function which remove the class active on the current image so as to hide
   //the current image in order to display the next image 
   const slideNext = () => {
       items[count].classList.remove("active");
       //the condition enables to check if current index is inferior at the leghth
       //of the array which contains the images so we increment by one the variable counter
       //in other words we go to the next index of the image in the array
       if(count < nbSlide - 1) {
           count++;
       //if we are at the edge of the array we initialize again the counter to 0 so as 
       //to go to the first image of the array
       } else {
           count = 0;
       }
       //enable to make visible the image which follows the current image by adding 
       //the class active.
       items[count].classList.add("active");
       radios[count].checked;
       console.log(count);
   }

   //link a event to the button which enables by a click to display the next picture
   next.addEventListener("click", slideNext);

   //function which remove the class active on the current image so as to hide
   //the current image in order to display the previous image which is just before the 
   //the current image 
   const radios = document.querySelectorAll(".radio");
   const slidePrev = () => {
       items[count].classList.remove("active");
       //the condition enables to check if current index is superior at 0
       //and if it is the case so we decrement by one the counter so we diplay 
       //the image just before the current image
       if(count > 0) {
           count--;
       //if it is not the case we set the value of our variable to the last 
       //index of our array of images. So if the current is the first of your array
       //so go to the last image of your array of images
       } else {
           count = nbSlide - 1;
       }
       items[count].classList.add("active");
       radios[count].checked;
   }

   prev.addEventListener("click", slidePrev);

   //a function which triggers an event we push the key
   function keyPress(e) {
       console.log(e);
       //if key arrowleft pressed so call the function slidePrev()
       if(e.keyCode === 37) {
           slidePrev();
       } else if (e.keyCode === 39) {
       //if the key arrowright pressed so call the function slideNext()
           slideNext();
       }
   }

   document.addEventListener('keydown', keyPress);

   //create an event on the button radio
   const buttonRadio1 = document.getElementById("radio1");
   const buttonRadio2 = document.getElementById("radio2");
   const buttonRadio3 = document.getElementById("radio3");
   const buttonRadio4 = document.getElementById("radio4");
   buttonRadio1.addEventListener("click", () => {
       alert("button1");
   });
   console.log(radios);
   for(radio in radios) {
       radios[radio].onclick = () => {
           console.log("look");
           //radios[radio].classList.add("teal");
       }
   }
   buttonRadio2.addEventListener("click", () => {
       alert("button2");
   });
   buttonRadio3.addEventListener("click", () => {
       alert("button3");
   });
   buttonRadio4.addEventListener("click", () => {
       alert("button4");
   });