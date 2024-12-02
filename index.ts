interface IProdotto {
    tipo: string;
    ID: number;
    taglia: string;
    colore: string;
    disponibilita: boolean;
    assegnaCliente(cliente: ICliente): void
}
interface ICliente {
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: string,
    ordinaProdotto(prodotto: IProdotto): void
}
interface IProcessoProduzione {
    nome: string,
    descrizione: string,
    prodotti: IProdotto[],
    aggiungiProdotto(prodotto: IProdotto): void
}

class Prodotto implements IProdotto{
    constructor (tipo: string, ID: number, taglia: string, colore: string, disponibilita: boolean) {
        this.tipo = tipo,
        this.ID = ID,
        this.taglia = taglia,
        this.colore = colore,
        this.disponibilita = disponibilita,
        this.clienteAssegnato = null,
        this.ordinato = false
    }
    tipo: string;
    ID: number;
    taglia: string;
    colore: string;
    disponibilita: boolean;
    clienteAssegnato: ICliente | null;
    ordinato: boolean
    assegnaCliente(cliente: ICliente): void {
        if (this.disponibilita){
            this.clienteAssegnato = cliente;
            this.ordinato = true;
            console.log(`Ciao ${this.clienteAssegnato.nome}! Grazie per aver ordinato da Sunnee, stai aiutando a rendere il mondo più sostenibile! Ecco un riepilogo del tuo ordine:
            Prodotto: ${this.tipo}, Taglia: ${this.taglia}, Colore: ${this.colore}`)
        }
    }
}

class Cliente implements ICliente{
    constructor(nome: string,cognome: string,email: string,metodoPagamento: string){
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento
    }
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    ordinaProdotto(prodotto: IProdotto): void {
        if (prodotto.disponibilita){
            prodotto.assegnaCliente(this);
            console.log('Prodotto ordinato con successo!');
        } else {
            console.log('Il prodotto non è disponibile');
        }
    }
}

class ProcessoProduzione implements IProcessoProduzione{
    constructor(nome: string, descrizione: string, prodotti: IProdotto[] = []){
        this.nome = nome;
        this.descrizione = descrizione;
        this.prodotti = prodotti
    }
    nome: string;
    descrizione: string;
    prodotti: IProdotto[];
    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodotti.push(prodotto)
        console.log(`Prodotto ${prodotto.tipo} aggiunto al processo di produzione.`);
    }
}

// test 
let cliente = new Cliente('Marta','Penna','marta.penna@gmail.it','carta di credito')
let cliente2 = new Cliente('Anna','Bianchi','anna.bianchi@gmail.it','carta di credito')
let cliente3 = new Cliente('Sandro','Neri','sandro.neri@gmail.it','carta di credito')
let cliente4 = new Cliente('Matteo','Rossi','matteo.rossi@gmail.it','carta di credito')

let prodotto = new Prodotto('costume da bagno', 1, 'M', 'verde', true)
let prodotto2 = new Prodotto('pareo', 2, 'XL', 'blu', true)
let prodotto3 = new Prodotto('cappello', 3, 'unica', 'giallo', true)
let prodotto4 = new Prodotto('costume da bagno', 4, 'S', 'rosso', true)

let prodottiRelax = new ProcessoProduzione('relax', 'per una normale giornata al mare', [])
let prodottiActive = new ProcessoProduzione('active', 'per i più sportivi e attivi', [])
let prodottiExtreme = new ProcessoProduzione('extreme', 'per attività a livello professionale per il nuoto e il surf', [])

prodottiRelax.aggiungiProdotto(prodotto3)
prodottiRelax.aggiungiProdotto(prodotto2)
prodottiActive.aggiungiProdotto(prodotto)
prodottiExtreme.aggiungiProdotto(prodotto4)

cliente.ordinaProdotto(prodotto)
cliente3.ordinaProdotto(prodotto2)
cliente2.ordinaProdotto(prodotto4)
cliente4.ordinaProdotto(prodotto3)

console.log(prodottiRelax)
console.log(prodottiActive)
console.log(prodottiExtreme)

// tipo: ['costume_da_bagno','pareo', 'cappello'],
// ID: 1,
// taglia: ['XS','S','M','L','XL','XXL'],
// colore: ['verde','blu','giallo','rosso'],
// disponibilita: [true,false]