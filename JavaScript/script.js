// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

// scroll section active in
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar on click
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

};
// about tabs
var aboutlinks = document.getElementsByClassName('about-links')
var tabcontents = document.getElementsByClassName('tab-contents')

opentab = (tabname) => {
    for(aboutlink of aboutlinks){
        aboutlink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}


// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .contact form',  { origin: 'bottom' }); 
ScrollReveal().reveal('.home-content h1, .about-img, .portfolio-box' , { origin: 'left' }); 
ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' }); 
    
// Form 

const scriptURL = 'https://script.google.com/macros/s/AKfycbz-bLpBurl2P1BVln_rOFChKD0oYPUByIx7sNxf3Gg11zXFBbB2TRUb4qQTT8OOYatc/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form autosubmission
    var isValid = true;
    var inputs = document.getElementsByTagName('input');
    var textarea = document.getElementsByTagName('textarea');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
        isValid = false;
        alert('Please fill all the fields');
        inputs[i].focus();
        break;
      }
    }

    for (var i = 0; i < textarea.length; i++) {
        if (textarea[i].value === '') {
        isValid = false;
        alert('Please fill all the fields');
        inputs[i].focus();
        break;
      }
    }
      
    if (isValid) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = 'Message <span>Sent!!!</span>'
          setTimeout(function(){
              msg.innerHTML = ''
          },5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    }
  });
