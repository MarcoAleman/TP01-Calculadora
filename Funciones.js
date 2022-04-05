
let Funciones = {
    Sumar: function (a,b){
        return a + b;
    },
    Restar: function (a,b) {
        return a - b;
    },
    Dividir: function (a,b) {
        if (a == 0 || b == 0){
            return 'No se puede dividir por cero.';
        } else {
            return a / b;
        }
    },
    Multiplicar: function (a,b) {
        return a*b;
    }
}

module.exports = Funciones;