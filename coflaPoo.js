class Celulares{
    //Constructor de la clase
    constructor(color, peso,rdp,rdc,ram){
        //Atributos de la clase    
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram =ram;
        this.encendido = false;
    }
    //Metodos de la clase
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        }else{
            alert("celular apagado");
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular");
        }else{
            alert("el celular esta apagado");
        }
    }
    tomarFotos(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en: ${this.resolucionDeCamara}`);
    }
    mostrarInfo(){
        return `
        Color: <b> ${this.color} </b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.resolucionDePantalla}</b><br>
        RAM: <b>${this.ram}</b><br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b><br>`;
    }
}

//Implementando Herencia
class CelularAltaGama extends Celulares{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a reiniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return (this.mostrarInfo() + `Resolucion de camara Trasera:<b> ${this.resolucionDeCamaraExtra}</b><br>`);
    }
}
/*
celuar1 = new Celulares("rojo","100g","5","full hd","2GB");
celuar2 = new Celulares("negro","150g","9","1080p","16GB");
celuar3 = new Celulares("rojo","180g","3.5","full hd","8GB");

celuar1.presionarBotonEncendido();
celuar1.tomarFotos();
celuar1.grabarVideo();
celuar1.reiniciar();
celuar1.presionarBotonEncendido();

document.write(`
${celuar1.mostrarInfo()}<br>
${celuar2.mostrarInfo()}<br>
${celuar3.mostrarInfo()}<br>
`)*/

celuar1 = new CelularAltaGama("rojo","130g","5.2","4k","16GB","full hd");
celuar2 = new CelularAltaGama("negro","120g","6","4k","32GB", "hd");
celuar3 = new CelularAltaGama("gris","140g","5.5","4k","64GB", "4k");

document.write(`
${celuar1.infoAltaGama()}<br>
${celuar2.infoAltaGama()}<br>
${celuar3.infoAltaGama()}<br>
`);