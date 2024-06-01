document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Nombre:', name);
    console.log('Correo Electrónico:', email);
    console.log('Mensaje:', message);

    // Aquí puedes agregar código para enviar la información a un servidor
    // Por ejemplo, usando AJAX o una API de backend.
});
