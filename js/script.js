//toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scrol section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset +  height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }

    })
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

const form = document.getElementById("#formAction");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Realiza el envío del formulario

  // Redirige a tu página después de enviar el formulario
  window.location.href = "index.html"; // Reemplaza "tu-pagina.html" con la URL de tu página

});
