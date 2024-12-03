# Progetto Sunnee Beachwear

Progetto Sunnee Beachwear è un sistema in Typescript che ho realizzato per presentare il progetto finale del corso Typescript di Start to Impact. 
Utilizza Typescript e segue gli insegnamenti appresi durante il corso. 
Il link dove poterlo visualizzare è questo: https://codepen.io/nztkxyzk-the-selector/pen/VYZLgwz 

Il progetto modella tre componenti principali:
- Prodotti: articoli come costumi, parei e cappelli.
- Clienti: utenti che ordinano i prodotti.
- Processi di Produzione: fasi di produzione che organizzano i prodotti in diverse categorie (Relax, Active, Extreme).

## Indice
- [Introduzione](#introduzione)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Contatti](#contatti)

## Introduzione
Il progetto nasce con l'obiettivo di dimostrare le competenze apprese con il corso Typescript. I requisiti principali erano:

- Sviluppare un sistema in TypeScript che modella la struttura operativa di un brand di beachwear in plastica riciclata, focalizzandosi sulle interazioni tra clienti, prodotti beachwear e processi di produzione sostenibile. 

- Definizione di interfacce e classi che rappresentano i vari componenti del sistema (IProdotto, ICliente, IProcessoProduzione).

- Il progetto richiede solo la scrittura del codice in TypeScript.

## Installazione
Per iniziare a lavorare con questo progetto, segui questi passaggi:

1. Clona il repository:
   git clone https://github.com/MaryJ-19/Progetto-Typescript.git
   
3. Entra nella directory del progetto:
  cd Progetto-Typescript

4. Installa le dipendenze:
'npm install',
'npm install typescript --save-dev',
'npx tsc --init',
'tsc index.ts --watch'

## Utilizzo
Simulare l'aggiunta di un nuovo prodotto
- let prodotto = new Prodotto('articolo', ID, 'taglia', 'colore', disponibilità);
prodottiRelax.aggiungiProdotto(prodotto);

Simulare l'ordine da parte del cliente
- let cliente = new Cliente('nome', 'cognome', 'email', 'tipo di pagamento');
cliente.ordinaProdotto(prodotto);

## Contatti
Autore: Maria Carta
Email: maria.carta1996@gmail.com
LinkedIn: https://www.linkedin.com/in/maria-carta19/
