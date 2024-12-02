var Prodotto = /** @class */ (function () {
    function Prodotto(tipo, ID, taglia, colore, disponibilita) {
        this.tipo = tipo,
            this.ID = ID,
            this.taglia = taglia,
            this.colore = colore,
            this.disponibilita = disponibilita,
            this.clienteAssegnato = null,
            this.ordinato = false;
    }
    Prodotto.prototype.assegnaCliente = function (cliente) {
        if (this.disponibilita) {
            this.clienteAssegnato = cliente;
            this.ordinato = true;
            console.log("Ciao ".concat(this.clienteAssegnato.nome, "! Grazie per aver ordinato da Sunnee, stai aiutando a rendere il mondo pi\u00F9 sostenibile! Ecco un riepilogo del tuo ordine:\n            Prodotto: ").concat(this.tipo, ", Taglia: ").concat(this.taglia, ", Colore: ").concat(this.colore));
        }
    };
    return Prodotto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        if (prodotto.disponibilita) {
            prodotto.assegnaCliente(this);
            console.log('Prodotto ordinato con successo!');
        }
        else {
            console.log('Il prodotto non è disponibile');
        }
    };
    return Cliente;
}());
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nome, descrizione, prodotti) {
        if (prodotti === void 0) { prodotti = []; }
        this.nome = nome;
        this.descrizione = descrizione;
        this.prodotti = prodotti;
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodotti.push(prodotto);
        console.log("Prodotto ".concat(prodotto.tipo, " aggiunto al processo di produzione."));
    };
    return ProcessoProduzione;
}());
// test 
var cliente = new Cliente('Marta', 'Penna', 'marta.penna@gmail.it', 'carta di credito');
var cliente2 = new Cliente('Anna', 'Bianchi', 'anna.bianchi@gmail.it', 'carta di credito');
var cliente3 = new Cliente('Sandro', 'Neri', 'sandro.neri@gmail.it', 'carta di credito');
var cliente4 = new Cliente('Matteo', 'Rossi', 'matteo.rossi@gmail.it', 'carta di credito');
var prodotto = new Prodotto('costume da bagno', 1, 'M', 'verde', true);
var prodotto2 = new Prodotto('pareo', 2, 'XL', 'blu', true);
var prodotto3 = new Prodotto('cappello', 3, 'unica', 'giallo', true);
var prodotto4 = new Prodotto('costume da bagno', 4, 'S', 'rosso', true);
var prodottiRelax = new ProcessoProduzione('relax', 'per una normale giornata al mare', []);
var prodottiActive = new ProcessoProduzione('active', 'per i più sportivi e attivi', []);
var prodottiExtreme = new ProcessoProduzione('extreme', 'per attività a livello professionale per il nuoto e il surf', []);
prodottiRelax.aggiungiProdotto(prodotto3);
prodottiRelax.aggiungiProdotto(prodotto2);
prodottiActive.aggiungiProdotto(prodotto);
prodottiExtreme.aggiungiProdotto(prodotto4);
cliente.ordinaProdotto(prodotto);
cliente3.ordinaProdotto(prodotto2);
cliente2.ordinaProdotto(prodotto4);
cliente4.ordinaProdotto(prodotto3);
console.log(prodottiRelax);
console.log(prodottiActive);
console.log(prodottiExtreme);
// tipo: ['costume_da_bagno','pareo', 'cappello'],
// ID: 1,
// taglia: ['XS','S','M','L','XL','XXL'],
// colore: ['verde','blu','giallo','rosso'],
// disponibilita: [true,false]
