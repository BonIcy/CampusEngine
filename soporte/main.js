import myAcordion from "./components/myAcordion.js";
import myHeader from "/components/myHeader.js";
myHeader.show();
myAcordion.show();

setTimeout(function(){
var accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(function(header) {
  header.addEventListener('click', function() {
    var accordionContent = this.nextElementSibling;
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  });
});
}, 1000)