
const contenedorVehiculos = document.getElementById("contenedorVehiculos");


function mostrarVehiculos (vehiculos){
    for(const vehiculo of vehiculos){
        const {marca, modelo, img} = vehiculo
        console.log(vehiculo);
        let div = document.createElement("div");
        div.className = 'autos';
        div.innerHTML +=
        `<section class="car">
                <div class="box">
                    <!-- VEHICULO -->
                    <div class="textCar">
                        <p>
                            <strong>${marca}</strong> ${modelo}
                        </p>
                    </div>
                    <!-- IMAGEN VEHICULO -->
                    <div class="flexImgBoxCar">
                        <img class="imgBoxCar" src="${img}" alt="chevrolet-onix">
                    </div>
                    <!-- ICONOS -->
                    <div class="flexIcon">
                        <div>
                            <i class="fas fa-user margTop5"></i>
                            5
                        </div>
                        <div>
                            <i class="fas fa-suitcase-rolling margTop5"></i>
                            2
                        </div>
                        <div>
                            <i class="fas fa-gas-pump margTop5"></i>
                            Nafta
                        </div>
                        <div>
                            <i class="far fa-snowflake margTop5"></i>
                            A/C
                        </div>
                        <div>
                            <i class="fas fa-music margTop5"></i>
                            AM FM MP3
                        </div>
                        <div>
                            <i class="fab fa-bluetooth margTop5"></i>
                            Bluetooth
                        </div>              
                    </div>
                    <!-- BTN COTIZAR -->
                    <div class="buttonCarCotizar">
                        <p>
                            Cotizar
                        </p>
                    </div>   
                </div>`

        contenedorVehiculos.appendChild(div);
   
    }


}

mostrarVehiculos(vehiculos)
