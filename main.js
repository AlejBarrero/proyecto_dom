const products = [
    {
        name: 'HP Essentials 255 G8 AMD',
        price: 289,
        stars: 4,
        reviews: 250,
        seller: 'PcComponentes',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
    },
    {
        name: 'Apple MacBook Air M1',
        price: 999,
        stars: 5,
        reviews: 1500,
        seller: 'Apple Store',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1056/10569477/129-apple-macbook-air-apple-m1-8gb-512gb-ssd-gpu-hepta-core-133-gris-espacial.jpg'
    },
    {
        name: 'Lenovo ThinkPad X1',
        price: 1249,
        stars: 4.5,
        reviews: 320,
        seller: 'Lenovo',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1063/10637970/1784-lenovo-thinkpad-x1-carbon-gen-10-intel-core-i5-1240p-16gb-512gb-ssd-14.jpg'
    },
    {
        name: 'Dell Inspiron 3530',
        price: 699,
        stars: 4,
        reviews: 500,
        seller: 'Dell',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1086/10861013/133-dell-inspiron-3530-intel-core-i7-1355u-16gb-1tb-ssd-156.jpg'
    },
    {
        name: 'Asus ROG Zephyrus',
        price: 1499,
        stars: 4.8,
        reviews: 210,
        seller: 'Asus',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10815884/1338-asus-rog-zephyrus-g14-oled-ga403ui-qs049-amd-ryzen-9-8945hs-32gb-1tb-rtx-4070-14.jpg'
    },
    {
        name: 'Acer Aspire 5',
        price: 549,
        stars: 3.5,
        reviews: 80,
        seller: 'Acer',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1081/10814405/157-acer-aspire-5-a515-57-57hq-intel-core-i5-12450h-16gb-512gb-ssd-156-teclado-italiano-opiniones.jpg'
    },
    {
        name: 'Microsoft Surface Laptop 7',
        price: 1099,
        stars: 4.7,
        reviews: 900,
        seller: 'Microsoft Store',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10848679/1993-microsoft-surface-laptop-7-negro-qualcomm-snapdragon-x-elite-x1e-80-100-16gb-512gb-ssd-15-tactil.jpg'
    },
    {
        name: 'Samsung Galaxy Book Pro 4',
        price: 899,
        stars: 4.2,
        reviews: 450,
        seller: 'Samsung',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1083/10832869/1749-samsung-galaxy-book-4-pro-360-intel-core-ultra-7-155h-16gb-512gb-ssd-16-tactil-fr.jpg'
    },
    {
        name: 'Razer Blade 15',
        price: 1799,
        stars: 4.9,
        reviews: 600,
        seller: 'Razer',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1037/10377614/1129-razer-blade-15-advanced-model-qhd-intel-core-i7-11800h-16-gb-1tb-ssd-rtx-3070-156.jpg'
    },
    {
        name: 'HP Pavilion 15',
        price: 799,
        stars: 4.3,
        reviews: 300,
        seller: 'HP Store',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1073/10733273/1864-hp-pavilion-15-eg3014ns-intel-core-i7-1355u-16gb-512gb-ssd-156.jpg'
    },
    {
        name: 'MSI GF63 Thin',
        price: 849,
        stars: 4.2,
        reviews: 350,
        seller: 'MSI',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/76/760044/1893-msi-gf63-thin-11ud-271xes-intel-core-i7-11800h-16gb-512gb-ssd-rtx-3050ti-156-opiniones.jpg'
    },
    {
        name: 'ASUS ExpertBook B5 Flip',
        price: 1159,
        stars: 4.5,
        reviews: 270,
        seller: 'ASUS',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1079/10791131/1476-asus-expertbook-b5-flip-b5402fva-ka0186x-intel-core-i5-1340p-8gb-256gb-ssd-14-tactil.jpg'
    },
    {
        name: 'LG Gram 16',
        price: 1299,
        stars: 4.8,
        reviews: 180,
        seller: 'LG',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1084/10840032/1108-lg-gram-16zd90s-gax75b-intel-core-ultra-7-155h-16gb-512gb-ssd-16.jpg'
    },
    {
        name: 'Toshiba Dynabook Satellite Pro',
        price: 599,
        stars: 4.1,
        reviews: 110,
        seller: 'Toshiba',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1009/10097417/1468-dynabook-toshiba-satellite-pro-c50-j-112-intel-core-i5-1135g7-8gb-256gb-ssd-156.jpg'
    },
    {
        name: 'Acer Chromebook Plus 514',
        price: 369,
        stars: 4.4,
        reviews: 200,
        seller: 'Acer',
        image: 'https://thumb.pccomponentes.com/w-150-150/articles/1079/10790215/1146-acer-chromebook-plus-514-cb514-3h-r81b-amd-ryzen-3-7320c-8gb-256gb-ssd-14-c0b91ac8-92bd-4c37-bea0-f753089ca7e8.jpg'
    }
];


// CABECERA
let cabecera = document.querySelector("header");

let imagenLogo = document.createElement("img");
imagenLogo.src = "./assets/img/logo.png";
imagenLogo.alt = "Logo empresa";
imagenLogo.className = "imagenLogo";

let nombre = document.createElement("h2");
nombre.innerHTML = "PcComponentes";
nombre.className = "nombre";

let busqueda = document.createElement("input");
busqueda.className = "busqueda";
busqueda.type = "text";
busqueda.placeholder = "Buscar";
cabecera.appendChild(busqueda);

let cuenta = document.createElement("a");
cuenta.href = "#";
cuenta.className = "cuenta";

let imagenCuenta = document.createElement("img");
imagenCuenta.src = "./assets/img/usuario.png"
imagenCuenta.alt = "Icono usuario";
cuenta.appendChild(imagenCuenta);
cuenta.appendChild(document.createTextNode("Mi cuenta"));
imagenCuenta.className = "imagenCuenta";

let carrito = document.createElement("a");
carrito.href = "#";
carrito.className = "carrito";

let imagenCarrito = document.createElement("img");
imagenCarrito.src = "./assets/img/carrito.png";
imagenCarrito.alt = "Icono carrito";
carrito.appendChild(imagenCarrito);
carrito.appendChild(document.createTextNode("Mi cesta"));
imagenCarrito.className = "imagenCarrito";

cabecera.appendChild(imagenLogo);
cabecera.appendChild(nombre);
cabecera.appendChild(busqueda);
cabecera.appendChild(cuenta);
cabecera.appendChild(carrito);


// BARRA "ACCESO DIRECTO"
let accesoDirecto = document.querySelector(".acceso-directo");

let nuevoSamsung = document.createElement("p");
nuevoSamsung.innerHTML = "Nuevo Samsung -100€";

let calefaccion = document.createElement("p");
calefaccion.innerHTML = "Especial Calefacción";

let ofertasEnero = document.createElement("p");
ofertasEnero.innerHTML = "¡Ofertas de enero!";
ofertasEnero.className = "ofertasEnero";

accesoDirecto.appendChild(nuevoSamsung);
accesoDirecto.appendChild(calefaccion);
accesoDirecto.appendChild(ofertasEnero);

document.body.appendChild(accesoDirecto);


// BANNER OFERTAS
let bannerOfertas = document.querySelector(".ofertas");

let parrafoOfertas = document.createElement("p");
parrafoOfertas.innerHTML = "<strong>Expertos en tecnología</strong> con un servicio 5 estrellas";

bannerOfertas.appendChild(parrafoOfertas);

document.body.appendChild(bannerOfertas);

let imagenOFertas = document.createElement("img");
imagenOFertas.src = "./assets/img/ofertas.png";

bannerOfertas.appendChild(imagenOFertas);


// FILTROS
let listaFiltros = document.querySelector(".filtros");

let divFiltroBusqueda = document.createElement("div");
divFiltroBusqueda.className = "divFiltroBusqueda";

let pBuscar = document.createElement("p");
pBuscar.className = "pBuscar";
pBuscar.innerHTML = "Búsqueda de filtros";
divFiltroBusqueda.appendChild(pBuscar);

let buscarFiltro = document.createElement("input");
buscarFiltro.className = "buscarFiltro";
buscarFiltro.placeholder = "Buscar...";
divFiltroBusqueda.appendChild(buscarFiltro);

let divPrecio = document.createElement("div");
divPrecio.className = "divPrecio";

let pPrecio = document.createElement("p");
pPrecio.innerHTML = "Precio";
divPrecio.appendChild(pPrecio);
pPrecio.className = "pPrecio";
let barraPrecio = document.createElement("input");
barraPrecio.type = "range";
divPrecio.appendChild(barraPrecio);

let divOrdenadores = document.createElement("div");
divOrdenadores.className = "divOrdenadores";
divOrdenadores.innerHTML = "Ordenadores";

let divPortatiles = document.createElement("div");

let checkPortatiles = document.createElement("input");
checkPortatiles.type = "checkbox";
checkPortatiles.className = "checkPortatiles";

let pPortatiles = document.createElement("p");
pPortatiles.innerHTML = "Portátiles";
pPortatiles.className = "pPortatiles";

divPortatiles.appendChild(checkPortatiles);
divPortatiles.appendChild(pPortatiles);

divOrdenadores.appendChild(divPortatiles);

let divSobremesa = document.createElement("div");

let checkSobremesa = document.createElement("input");
checkSobremesa.type = "checkbox";
checkSobremesa.className = "checkSobremesa";

let pSobremesa = document.createElement("p");
pSobremesa.innerHTML = "Sobremesa";
pSobremesa.className = "pSobremesa";

divSobremesa.appendChild(checkSobremesa);
divSobremesa.appendChild(pSobremesa);

divOrdenadores.appendChild(divSobremesa);

let divComponentes = document.createElement("div");
divComponentes.className = "divComponentes";

let pComponentes = document.createElement("p");
pComponentes.innerHTML = "Componentes";
pComponentes.className = "pComponentes";
divComponentes.appendChild(pComponentes);

let divTarjetasGraficas = document.createElement("div");

let checkTarjetasGraficas = document.createElement("input");
checkTarjetasGraficas.type = "checkbox";
checkTarjetasGraficas.className = "checkTarjetasGraficas";

let pTarjetasGraficas = document.createElement("p");
pTarjetasGraficas.innerHTML = "Tarjetas Graficas";
pTarjetasGraficas.className = "pTarjetasGraficas";

divTarjetasGraficas.appendChild(checkTarjetasGraficas);
divTarjetasGraficas.appendChild(pTarjetasGraficas);

divComponentes.appendChild(divTarjetasGraficas);

let divDiscosDuros = document.createElement("div");

let checkDiscosDuros = document.createElement("input");
checkDiscosDuros.type = "checkbox";
checkDiscosDuros.className = "checkDiscosDuros";

let pDiscosDuros = document.createElement("p");
pDiscosDuros.innerHTML = "Discos Duros";
pDiscosDuros.className = "pDiscosDuros";

divDiscosDuros.appendChild(checkDiscosDuros);
divDiscosDuros.appendChild(pDiscosDuros);

divComponentes.appendChild(divDiscosDuros);

let divPlacasBase = document.createElement("div");

let checkPlacasBase = document.createElement("input");
checkPlacasBase.type = "checkbox";
checkPlacasBase.className = "checkPlacasBase";

let pPlacasBase = document.createElement("p");
pPlacasBase.innerHTML = "Placas Base";
pPlacasBase.className = "pPlacasBase";

divPlacasBase.appendChild(checkPlacasBase);
divPlacasBase.appendChild(pPlacasBase);

divComponentes.appendChild(divPlacasBase);

let divProcesadores = document.createElement("div");

let checkProcesadores = document.createElement("input");
checkProcesadores.type = "checkbox";
checkProcesadores.className = "checkProcesadores";

let pProcesadores = document.createElement("p");
pProcesadores.innerHTML = "Procesadores";
pProcesadores.className = "pProcesadores";

divProcesadores.appendChild(checkProcesadores);
divProcesadores.appendChild(pProcesadores);

divComponentes.appendChild(divProcesadores);

let divPerifericos = document.createElement("div");
divPerifericos.className = "divPerifericos";

let pPerifericos = document.createElement("p");
pPerifericos.innerHTML = "Perifericos";
pPerifericos.className = "pPerifericos";
divPerifericos.appendChild(pPerifericos);

let divMonitores = document.createElement("div");

let checkMonitores = document.createElement("input");
checkMonitores.type = "checkbox";
checkMonitores.className = "checkMonitores";

let pMonitores = document.createElement("p");
pMonitores.innerHTML = "Monitores";
pMonitores.className = "pMonitores";

divMonitores.appendChild(checkMonitores);
divMonitores.appendChild(pMonitores);

divPerifericos.appendChild(divMonitores);

let divTeclados = document.createElement("div");

let checkTeclados = document.createElement("input");
checkTeclados.type = "checkbox";
checkTeclados.className = "checkTeclados";

let pTeclados = document.createElement("p");
pTeclados.innerHTML = "Teclados";
pTeclados.className = "pTeclados";

divTeclados.appendChild(checkTeclados);
divTeclados.appendChild(pTeclados);

divPerifericos.appendChild(divTeclados);

let divMultifunciones = document.createElement("div");

let checkMultifunciones = document.createElement("input");
checkMultifunciones.type = "checkbox";
checkMultifunciones.className = "checkMultifunciones";

let pMultifunciones = document.createElement("p");
pMultifunciones.innerHTML = "Multifunciones";
pMultifunciones.className = "pMultifunciones";

divMultifunciones.appendChild(checkMultifunciones);
divMultifunciones.appendChild(pMultifunciones);

divPerifericos.appendChild(divMultifunciones);

let divMemoriasUSB = document.createElement("div");

let checkMemoriasUSB = document.createElement("input");
checkMemoriasUSB.type = "checkbox";
checkMemoriasUSB.className = "checkMemoriasUSB";

let pMemoriasUSB = document.createElement("p");
pMemoriasUSB.innerHTML = "Memorias USB Pendrive";
pMemoriasUSB.className = "pMemoriasUSB";

divMemoriasUSB.appendChild(checkMemoriasUSB);
divMemoriasUSB.appendChild(pMemoriasUSB);

divPerifericos.appendChild(divMemoriasUSB);

let divVideoconferencia = document.createElement("div");

let checkVideoconferencia = document.createElement("input");
checkVideoconferencia.type = "checkbox";
checkVideoconferencia.className = "checkVideoconferencia";

let pVideoconferencia = document.createElement("p");
pVideoconferencia.innerHTML = "Videoconferencia";
pVideoconferencia.className = "pVideoconferencia";

divVideoconferencia.appendChild(checkVideoconferencia);
divVideoconferencia.appendChild(pVideoconferencia);

divPerifericos.appendChild(divVideoconferencia);

let divVarios = document.createElement("div");
divVarios.className = "divVarios";

let p1Varios = document.createElement("p");
p1Varios.innerHTML = "Smartphones y tablets";

let p2Varios = document.createElement("p");
p2Varios.innerHTML = "Televisión y vídeo";

let p3Varios = document.createElement("p");
p3Varios.innerHTML = "Sonido";

let p4Varios = document.createElement("p");
p4Varios.innerHTML = "Electrodomésticos";

let p5Varios = document.createElement("p");
p5Varios.innerHTML = "Relojes Inteligentes";

let p6Varios = document.createElement("p");
p6Varios.innerHTML = "Fotografía y Accesorios";

let p7Varios = document.createElement("p");
p7Varios.innerHTML = "Marcas";

let p8Varios = document.createElement("p");
p8Varios.innerHTML = "Disponibilidad en tienda";

let p9Varios = document.createElement("p");
p9Varios.innerHTML = "Valoración";

let p10Varios = document.createElement("p");
p10Varios.innerHTML = "Vendido por";

divVarios.appendChild(p1Varios);
divVarios.appendChild(p2Varios);
divVarios.appendChild(p3Varios);
divVarios.appendChild(p4Varios);
divVarios.appendChild(p5Varios);
divVarios.appendChild(p6Varios);
divVarios.appendChild(p7Varios);
divVarios.appendChild(p8Varios);
divVarios.appendChild(p9Varios);
divVarios.appendChild(p10Varios);

listaFiltros.appendChild(divFiltroBusqueda);
listaFiltros.appendChild(divPrecio);
listaFiltros.appendChild(divOrdenadores);
listaFiltros.appendChild(divComponentes);
listaFiltros.appendChild(divPerifericos);
listaFiltros.appendChild(divVarios);


// PRODUCTOS
let listaProductos = document.querySelector(".productos");
listaProductos.className = "listaProductos";

for (let item of products) {
    let producto = document.createElement("figure");
    let imagenProducto = document.createElement("img");
    let descripcionProducto = document.createElement("figcaption");
    let precioProducto = document.createElement("span");
    precioProducto.className = "precioProducto";
    imagenProducto.src = item.image;
    descripcionProducto.innerHTML = item.name;
    precioProducto.innerHTML = item.price + "€";

    producto.appendChild(imagenProducto);
    producto.appendChild(descripcionProducto);
    producto.appendChild(precioProducto);

    listaProductos.appendChild(producto);
};

document.body.appendChild(listaProductos);


// MAIN
let main = document.querySelector(".main");

main.appendChild(accesoDirecto);
main.appendChild(bannerOfertas);
main.appendChild(listaFiltros);
main.appendChild(listaProductos);


// FOOTER
let footer = document.querySelector(".footer");
footer.className = "footer";

let parrafoFooter = document.createElement("p");
parrafoFooter.className = "parrafoFooter";
parrafoFooter.innerHTML = "© Alejandro Barrero. Avenida Constitución. 33011, La Corredoria, Oviedo. ESPAÑA";

footer.appendChild(parrafoFooter);
