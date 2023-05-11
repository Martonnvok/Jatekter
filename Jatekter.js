import Kartya from "./Kartya.js";
class Jatekter {
    #kepekLista = [];
    #kivalasztottKepekLista = [];

    constructor(kepekLista) {
        this.#kepekLista = kepekLista;
        console.log(this.#kepekLista);
        this.#kartyaMegjelenito(this.#kepekLista);

        $(window).on("fordít", (event) =>{
            console.log(event.detail);
            $(this).attr("src", event.detail);

        })
    }

    #kartyaMegjelenito(lista){
        let hatter = lista[0];
        const ARTICLE = $("article");
        for (let index = 1; index < lista.length; index++) {
            const kartyak = new Kartya(lista[index], ARTICLE, hatter);
            
        }
    }
}


export default Jatekter