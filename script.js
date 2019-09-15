// create the lightbox div and add id 'lightbox', then add this to the body of doc
const lightbox = document.createElement('div');
lightbox.id="lightbox";
document.body.appendChild(lightbox);

// first iteration added event listener in each loop forEach
// second added img tag, assigned source to it, & added it to lightbox
// commented out my error that made all imgs come up in lightbox, & put logic within event listener.
// now logic to remove any child in the lightbox before adding the new one, so one at a time.
const images = document.querySelectorAll('img');
images.forEach(image =>{
  // const img = document.createElement('img');
  // img.src = image.src;
  // lightbox.appendChild(img);
  image.addEventListener('click', e=> {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while(lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  })
}) 

// add event listener to remove class active, showing lightbox,  and return to grid
// next, if we click anywhere except lightbox, ie on the image, it stays there.
lightbox.addEventListener('click', e=>{
  if(e.target!==e.currentTarget) return;
  lightbox.classList.remove('active');
})