/*
***
QUE ES LO QUE TIENE QUE HACER: CALCULAR EL SUELDO
QUE ES LO QUE TIENE QUE HACER: IMPRIMIR INFO DEL EMPLEADO
***

***
REQUERIMIENTOS:
-Tiempo para terminarlo 30 minutos
-5 Instancias despues de terminado

PARAMETROS:
-Sueldo por dia = $156.78
-Sueldo por quincena y mes bruto y neto
-ISR de 31%
-7 dias laborados

OBJETO:
-Nombre
-Edad
-RFC
-Dias trabajados
-Sueldo por dia
*/



class empleadoEmpresa {
    Nombre = "";
    Edad = "";
    RFC = "";
    DiasTrabajados = 0;
    sueldoPorDia = 0;
    sueldoPorQuincenaB = 0;
    sueldoPorQuincenaN = 0;
    sueldoPorMesB = 0;
    sueldoPorMesN = 0;
    descuento1 = 0;
    descuento2 = 0;

    constructor(Nombre, Edad, RFC, DiasTrabajados, sueldoPorDia, sueldoPorQuincenaB, descuento1, sueldoPorQuincenaN, sueldoPorMesB, descuento2, sueldoPorMesN) {
        this.Nombre = Nombre;
        this.Edad = Edad;
        this.RFC = RFC;
        this.DiasTrabajados = DiasTrabajados;
        this.sueldoPorDia = sueldoPorDia;
        this.sueldoPorQuincenaB = sueldoPorQuincenaB;
        this.descuento1 = descuento1;
        this.sueldoPorQuincenaN = sueldoPorQuincenaN;
        this.sueldoPorMesB = sueldoPorMesB;
        this.descuento2 = descuento2;
        this.sueldoPorMesN = sueldoPorMesN;
    }

    imprimirInfoDelEmpleado() {
        console.log("Información del empleado:");
        console.log("Nombre:", this.Nombre);
        console.log("Edad:", this.Edad);
        console.log("RFC:", this.RFC);
        console.log("Días trabajados:", this.DiasTrabajados);
        console.log("Sueldo por día: $", this.sueldoPorDia);
        console.log("Sueldo por quincena (bruto): $", this.sueldoPorQuincenaBruto());
        console.log("Sueldo por quincena (neto): $", this.sueldoPorQuincenaNeto());
        console.log("Sueldo por mes (bruto): $", this.sueldoPorMesBruto());
        console.log("Sueldo por mes (neto): $", this.sueldoPorMesNeto());
    }

    sueldoPorQuincenaBruto() {
       return (this.DiasTrabajados * 2) * this.sueldoPorDia;
    }

    descuentoUno() {
        return this.sueldoPorQuincenaBruto() * 0.31;
    }

    sueldoPorQuincenaNeto() {
        return this.sueldoPorQuincenaBruto() - this.descuentoUno();
    }

    sueldoPorMesBruto() {
        return (this.DiasTrabajados * 4) * this.sueldoPorDia;
    }

    descuentoDos() {
        return this.sueldoPorMesBruto() * 0.31;
    }

    sueldoPorMesNeto() {
        return this.sueldoPorMesBruto() - this.descuentoDos();
    }
}

let Pedrongo = new empleadoEmpresa("Pedrongo", 30, "PDRNG30", 7, 156.78, 0, 0, 0, 0, 0, 0);

let Huachinango = new empleadoEmpresa("Huachinango", 28, "HCNGG28", 5, 156.78, 0, 0, 0, 0, 0, 0);

let Gustavongo = new empleadoEmpresa("Gustavongo", 29, "GSTVNG29", 6, 156.78, 0, 0, 0, 0, 0, 0);

let Davidongo = new empleadoEmpresa("Davidongo", 20, "DVDNG20", 6, 156.78, 0, 0, 0, 0, 0, 0);

let Brandongo = new empleadoEmpresa("Brandongo", 25, "BRNDNG25", 3, 156.78, 0, 0, 0, 0, 0, 0);

Pedrongo.imprimirInfoDelEmpleado();
Huachinango.imprimirInfoDelEmpleado();
Gustavongo.imprimirInfoDelEmpleado();
Davidongo.imprimirInfoDelEmpleado();
Brandongo.imprimirInfoDelEmpleado();