/* let montousuario = Number (prompt("ingrese un monto"))
let resultado = 0

function cuotas () {


    let opciones = prompt(`1. 3 cuotas
                            2. 6 cuotas
                            3. 9 cuotas
                            4. 12 cuotas`)

    if (opciones==="1") {
        resultado = montousuario/3
        alert (resultado)
        console.log ("resultado 1 " + resultado)
    }

    if (opciones==="2") {
        resultado = montousuario/6
        alert (resultado)
        console.log ("resultado 2 " + resultado)
    }

    if (opciones==="3") {
        resultado = montousuario/9
        alert (resultado)
        console.log ("resultado 3 " + resultado)
    }

    if (opciones==="4") {
        resultado = montousuario/12
        alert(resultado)
        console.log ("resultado 4 " + resultado)
    }
}

cuotas () 
 */


let divContainer = document.getElementById("row");

function rellenarPagina(arrayProductos) {

    for (let productos of arrayProductos) {

        let div = document.createElement("div");
        div.classList = "col-4 mt-3"

        div.innerHTML = `
        <div class="">
            <img src="${productos.img}" alt="${productos.id}" witdh="150px" height="150px">
            <div class="card-body tituloDiscos">
                <h2>Nombre: ${productos.name}</h2>
                <p class="">$ <strong>${productos.price}</strong></p>
                <button class="">Añadir al Carrito</button>
            </div>
        </div>`
        divContainer.appendChild(div)
    }}
    rellenarPagina(productos)
