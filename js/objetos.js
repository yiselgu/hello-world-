var CuentaAhorro = 
        {
            titular: " Alex",
            saldo : 0,
            ingresar: function(cantidad)
            {
                console.log("Has ingresado" + cantidad + "Euros");
                return this.saldo += cantidad;
            },

            extraer: function(cantidad)
            {
                console.log("Has extraido" + cantidad + "Euros");
                return this.saldo -= cantidad;
            },

            informar: function(){
                return "Nombre del Titular:" + this.titular + "El Saldo de la Cuenta es \n" + this.saldo;
            },
            
        } 

console.log(CuentaAhorro.titular);
console.log(CuentaAhorro.saldo)
console.log("------------------");
console.log(CuentaAhorro.ingresar(80));
console.log(CuentaAhorro.extraer(20));

console.log(CuentaAhorro.informar());









