class Kartya{
    #adat
    #divElem
    #imgElem
    
    constructor(adat, szuloElem, hatter){
        this.#adat=adat;

        szuloElem.append(
            `<div><img src="kepek/${hatter}" alt="ez egy kep"></div>`
            
        )
        this.#divElem = szuloElem.children("div:last-child");
        this.#imgElem = this.#divElem.children("img:last-child");
        this.#divElem.on("click",()=>{
            this.setKep(this.#adat);
            this.trigger("fordít");
        })
    }

    getAdat(){
        return this.#adat;
    }

    setKep(kep){
        this.#imgElem.attr("src", "kepek/"+kep);
    }

    trigger(esemenyNev){
        const ev = new CustomEvent(esemenyNev,{detail: this.#adat})
        dispatchEvent(ev);
    }
}

export default Kartya