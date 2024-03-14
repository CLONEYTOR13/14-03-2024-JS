function escribir() {
    var images = [
        "img/imagen 1.jpeg",
        "img/imagen 2.jpeg",
        "img/imagen 3.jpeg",
        "img/imagen 4.jpeg",
        "img/imagen 5.jpeg",
        "img/imagen 6.jpeg",
        "img/imagen 7.jpeg",
        "img/imagen 8.jpeg",
        "img/imagen 9.jpeg",
        "img/imagen 10.jpeg"
    ];
    var texto = document.getElementById("texto");
    texto.innerHTML = '';
    images.forEach(function(imageUrl) {
        var img = document.createElement('img');
        img.src = imageUrl;
        img.alt = '';
        img.style.width = '200px';
        img.style.height = '200px';
        texto.appendChild(img);
    });
}
escribir();
function serie(){
    var y = 1;
    var x = 1;
    for (var i = 0; i < 10; i++) {
        console.log(y);
        y=y+x;
        x++;
    }
}
serie();
