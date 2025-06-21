// File: js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Elementi DOM
    const selezioneTestSection = document.getElementById('selezione-test');
    const sezioneTestSection = document.getElementById('sezione-test');
    const risultatiSezione = document.getElementById('risultati-sezione');

    const btnTestBreve = document.getElementById('btn-test-breve');
    const btnTestLunga = document.getElementById('btn-test-lunga');

    const titoloTest = document.getElementById('titolo-test');
    const domandaCorrenteSpan = document.getElementById('domanda-corrente');
    const domandeTotaliSpan = document.getElementById('domande-totali');
    const barraProgressoFill = document.getElementById('barra-progresso-fill');
    const testoDomandaP = document.getElementById('testo-domanda');
    const opzioniRispostaContainer = document.getElementById('opzioni-risposta-container');
    const btnIndietro = document.getElementById('btn-indietro');
    const btnAvanti = document.getElementById('btn-avanti');

    const etichettaDefinizione = document.getElementById('etichetta-definizione');
    const compassTextPlaceholder = document.getElementById('compass-text-placeholder');
    const vicinanzaPartitiContainer = document.getElementById('vicinanza-partiti-container');
    const btnRifaiTest = document.getElementById('btn-rifai-test');

    // Stato dell'applicazione
    let tipoTestSelezionato = null; // 'breve' o 'lunga'
    let domandeDelTest = [];
    let partitiDelTest = [];
    let indiceDomandaCorrente = 0;
    let risposteUtente = {}; // es: { q1: 1, q2: -0.5, ... }

    // --- INIZIALIZZAZIONE ---
    btnTestBreve.addEventListener('click', () => avviaTest('breve'));
    btnTestLunga.addEventListener('click', () => avviaTest('lunga'));
    btnIndietro.addEventListener('click', vaiDomandaPrecedente);
    btnAvanti.addEventListener('click', vaiDomandaSuccessivaOMostraRisultati);
    btnRifaiTest.addEventListener('click', resetTest);

    function mostraSezione(sezioneDaMostrare) {
        [selezioneTestSection, sezioneTestSection, risultatiSezione].forEach(s => {
            s.classList.remove('active-section');
            s.classList.add('hidden-section');
        });
        sezioneDaMostrare.classList.remove('hidden-section');
        sezioneDaMostrare.classList.add('active-section');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function avviaTest(tipo) {
        tipoTestSelezionato = tipo;
        domandeDelTest = (tipo === 'breve') ? partitiDB.domandeBreve : partitiDB.domandeLunga;
        partitiDelTest = (tipo === 'breve') ? partitiDB.partitiBreve : partitiDB.partitiLunga;

        if (!domandeDelTest || domandeDelTest.length === 0) {
            alert("Errore: Domande non caricate per questo tipo di test.");
            return;
        }
        if (!partitiDelTest || partitiDelTest.length === 0) {
            alert("Errore: Partiti non caricati per questo tipo di test.");
            return;
        }
        indiceDomandaCorrente = 0;
        risposteUtente = {};
        titoloTest.textContent = (tipo === 'breve') ? "Test Breve (35 Domande)" : "Test Lungo (80 Domande)";
        domandeTotaliSpan.textContent = domandeDelTest.length;
        mostraSezione(sezioneTestSection);
        caricaDomanda();
    }

    function caricaDomanda() {
        if (indiceDomandaCorrente < 0 || indiceDomandaCorrente >= domandeDelTest.length) {
            console.error("Indice domanda non valido:", indiceDomandaCorrente);
            return;
        }
        const domanda = domandeDelTest[indiceDomandaCorrente];
        domandaCorrenteSpan.textContent = indiceDomandaCorrente + 1;
        testoDomandaP.textContent = domanda.testo;

        opzioniRispostaContainer.innerHTML = '';
        partitiDB.opzioniRisposta.forEach(opzione => {
            const btnOpzione = document.createElement('button');
            btnOpzione.textContent = opzione.testo;
            btnOpzione.dataset.valore = opzione.valore;
            btnOpzione.addEventListener('click', () => selezionaRisposta(domanda.id, opzione.valore, btnOpzione));

            if (risposteUtente[domanda.id] !== undefined && parseFloat(risposteUtente[domanda.id]) === opzione.valore) {
                btnOpzione.classList.add('selected');
            }
            opzioniRispostaContainer.appendChild(btnOpzione);
        });

        aggiornaStatoPulsantiNavigazione();
        aggiornaBarraProgresso();
    }

    function selezionaRisposta(idDomanda, valoreRisposta, btnSelezionato) {
        risposteUtente[idDomanda] = valoreRisposta;
        Array.from(opzioniRispostaContainer.children).forEach(btn => btn.classList.remove('selected'));
        btnSelezionato.classList.add('selected');
        aggiornaStatoPulsantiNavigazione();

        setTimeout(() => {
            const domandaCorrenteId = domandeDelTest[indiceDomandaCorrente]?.id;
            if (risposteUtente[domandaCorrenteId] !== undefined) { // Solo se ha risposto
                 vaiDomandaSuccessivaOMostraRisultati();
            }
        }, 200);
    }

    function aggiornaStatoPulsantiNavigazione() {
        btnIndietro.disabled = indiceDomandaCorrente === 0;
        const domandaCorrenteId = domandeDelTest[indiceDomandaCorrente]?.id;
        btnAvanti.disabled = risposteUtente[domandaCorrenteId] === undefined && indiceDomandaCorrente < domandeDelTest.length;


        if (indiceDomandaCorrente === domandeDelTest.length - 1 && risposteUtente[domandaCorrenteId] !== undefined) {
            btnAvanti.textContent = "Vedi Risultati";
            btnAvanti.disabled = false; // Abilita specificamente per vedere i risultati
        } else if (indiceDomandaCorrente === domandeDelTest.length) { // Caso in cui siamo già oltre l'ultima domanda (solo per sicurezza)
             btnAvanti.textContent = "Vedi Risultati";
             btnAvanti.disabled = false;
        }
        else {
            btnAvanti.textContent = "Avanti";
        }
    }


    function aggiornaBarraProgresso() {
        const domandeRisposte = Object.keys(risposteUtente).length;
        // Il progresso è basato sull'indice della domanda corrente per dare un senso di avanzamento anche prima della risposta
        const progressoPercentuale = ((indiceDomandaCorrente +1) / domandeDelTest.length) * 100;
        barraProgressoFill.style.width = `${progressoPercentuale}%`;
    }


    function vaiDomandaPrecedente() {
        if (indiceDomandaCorrente > 0) {
            indiceDomandaCorrente--;
            caricaDomanda();
        }
    }

    function vaiDomandaSuccessivaOMostraRisultati() {
        const domandaCorrenteId = domandeDelTest[indiceDomandaCorrente]?.id;
        if (risposteUtente[domandaCorrenteId] === undefined && indiceDomandaCorrente < domandeDelTest.length -1) {
            // alert("Per favore, rispondi alla domanda corrente prima di procedere."); // Rimosso per flusso più rapido
            return;
        }

        if (indiceDomandaCorrente < domandeDelTest.length - 1) {
            indiceDomandaCorrente++;
            caricaDomanda();
        } else if (indiceDomandaCorrente === domandeDelTest.length -1 && risposteUtente[domandaCorrenteId] !== undefined) {
            calcolaERendiRisultati();
        } else if (indiceDomandaCorrente >= domandeDelTest.length -1) { // Già all'ultima domanda o oltre
             calcolaERendiRisultati();
        }
    }

    function calcolaVicinanzaPartito(partito) {
        let punteggioTotalePartito = 0;
        let domandeConsiderate = 0;
        let maxPunteggioPossibilePerPartito = 0;

        for (const idDomanda in risposteUtente) {
            if (partito.posizioni && partito.posizioni.hasOwnProperty(idDomanda)) {
                const rispostaUtente = risposteUtente[idDomanda];
                const posizionePartito = partito.posizioni[idDomanda];

                // Similarità: 1 se identici, 0.5 se distanti 0.5, 0 se distanti 1, -0.5 se distanti 1.5, -1 se opposti (distanza 2)
                // Questo è un calcolo di "accordo".
                // Punteggio = 1 - (distanza / 2) normalizza tra 0 e 1, dove 1 è identico.
                // Max distanza è 2 (utente -1, partito 1). Min distanza 0.
                const distanza = Math.abs(rispostaUtente - posizionePartito);
                const similarita = 1 - (distanza / 2); // Valore da 0 (opposti) a 1 (identici)

                punteggioTotalePartito += similarita;
                domandeConsiderate++;
                maxPunteggioPossibilePerPartito += 1; // Ogni domanda contribuisce con max 1 alla similarità
            }
        }
        // La percentuale è (similarità_ottenuta / max_similarità_possibile) * 100
        return maxPunteggioPossibilePerPartito > 0 ? (punteggioTotalePartito / maxPunteggioPossibilePerPartito) * 100 : 0;
    }

    function determinaDefinizionePolitica(risultatiPartiti) {
        if (!risultatiPartiti || risultatiPartiti.length === 0) {
            compassTextPlaceholder.textContent = "Non è stato possibile determinare una posizione generale.";
            return "Non determinabile";
        }

        let partitoPiuVicino = risultatiPartiti.reduce((max, p) => p.vicinanza > max.vicinanza ? p : max, risultatiPartiti[0]);

        let definizioneTesto = "";
        let descrizioneCompass = "";

        if (partitoPiuVicino && partitoPiuVicino.vicinanza > 10) { // Soglia minima
            definizioneTesto = `Ti avvicini maggiormente a: ${partitoPiuVicino.partito.nome}`;
            descrizioneCompass = `Le tue risposte indicano una maggiore affinità con le posizioni di tipo "${partitoPiuVicino.partito.definizioneBreve}". Questo suggerisce un orientamento politico in linea con tale area. (Vicinanza: ${partitoPiuVicino.vicinanza.toFixed(0)}%)`;

            if (partitoPiuVicino.vicinanza > 75) {
                descrizioneCompass = `Le tue risposte mostrano una forte congruenza con le posizioni di tipo "${partitoPiuVicino.partito.definizioneBreve}". Il tuo profilo politico sembra decisamente allineato con quest'area. (Vicinanza: ${partitoPiuVicino.vicinanza.toFixed(0)}%)`;
            } else if (partitoPiuVicino.vicinanza > 50) {
                descrizioneCompass = `Le tue risposte indicano una significativa affinità con le posizioni di tipo "${partitoPiuVicino.partito.definizioneBreve}". Ti collochi prevalentemente in quest'area dello spettro politico. (Vicinanza: ${partitoPiuVicino.vicinanza.toFixed(0)}%)`;
            }
        } else {
            // Calcolo media risposte utente per una definizione più generica
            let sommaRisposte = 0;
            let numRisposteValide = 0;
            for (const idDomanda in risposteUtente) {
                sommaRisposte += risposteUtente[idDomanda];
                numRisposteValide++;
            }
            const mediaRisposte = numRisposteValide > 0 ? sommaRisposte / numRisposteValide : 0; // Valore da -1 a 1

            if (mediaRisposte > 0.6) {
                definizioneTesto = "Orientamento di Destra Conservatrice / Sovranista";
                descrizioneCompass = "Le tue risposte suggeriscono un forte orientamento verso valori tradizionali, sovranità nazionale e un approccio liberista in economia.";
            } else if (mediaRisposte > 0.2) {
                definizioneTesto = "Orientamento di Centro-Destra Liberale";
                descrizioneCompass = "Mostri una preferenza per l'iniziativa privata e libertà individuali, con attenzione al welfare e valori moderati.";
            } else if (mediaRisposte > -0.2) {
                definizioneTesto = "Orientamento Centrista / Moderato";
                descrizioneCompass = "Le tue posizioni sono prevalentemente equilibrate, cercando un compromesso tra intervento statale e libertà individuali, con approccio pragmatico.";
            } else if (mediaRisposte > -0.6) {
                definizioneTesto = "Orientamento di Centro-Sinistra Progressista";
                descrizioneCompass = "Indichi una preferenza per politiche progressiste, giustizia sociale, diritti civili e un ruolo attivo dello stato per l'uguaglianza.";
            } else {
                definizioneTesto = "Orientamento di Sinistra Radicale / Progressista";
                descrizioneCompass = "Le tue risposte suggeriscono una forte adesione a ideali di uguaglianza, critica al sistema attuale e un intervento statale preponderante.";
            }
             if(numRisposteValide < domandeDelTest.length / 2) { // Se poche risposte, definizione vaga
                definizioneTesto = "Posizione Politica Non Chiaramente Definita";
                descrizioneCompass = "Hai risposto a un numero limitato di domande o le tue risposte non delineano un profilo politico specifico. Prova a completare più domande per un'analisi più accurata.";
            }
        }
        compassTextPlaceholder.textContent = descrizioneCompass;
        return definizioneTesto;
    }


    function calcolaERendiRisultati() {
        const risultatiPerPartito = partitiDelTest.map(partito => {
            return {
                partito: partito,
                vicinanza: calcolaVicinanzaPartito(partito)
            };
        });

        risultatiPerPartito.sort((a, b) => b.vicinanza - a.vicinanza);

        etichettaDefinizione.textContent = determinaDefinizionePolitica(risultatiPerPartito);

        vicinanzaPartitiContainer.innerHTML = '<h3>Vicinanza ai Partiti (%):</h3>';
        const partitiDaMostrare = risultatiPerPartito.filter(r => r.vicinanza > 0).slice(0, tipoTestSelezionato === 'breve' ? 15 : 30); // Mostra top N con vicinanza > 0

        if (partitiDaMostrare.length === 0) {
             const noMatch = document.createElement('p');
             noMatch.textContent = "Nessun partito sembra avere una significativa vicinanza con le tue risposte, oppure hai risposto a poche domande.";
             noMatch.style.fontStyle = "italic";
             vicinanzaPartitiContainer.appendChild(noMatch);
        } else {
            partitiDaMostrare.forEach(ris => {
                const divPartito = document.createElement('div');
                divPartito.classList.add('risultato-partito');

                const imgLogo = document.createElement('img');
                imgLogo.src = ris.partito.logo || 'img/default.png';
                imgLogo.alt = `Logo ${ris.partito.nome}`;
                imgLogo.classList.add('logo-partito-risultato');
                imgLogo.onerror = function() { this.src = 'img/default.png'; }; // Fallback se il logo non carica

                const nomePartitoSpan = document.createElement('span');
                nomePartitoSpan.textContent = `${ris.partito.nome}:`;

                const barraSfondo = document.createElement('div');
                barraSfondo.classList.add('barra-percentuale-sfondo');

                const barraFill = document.createElement('div');
                barraFill.classList.add('barra-percentuale-fill');

                // Forza l'aggiornamento del layout prima di impostare la larghezza per l'animazione
                requestAnimationFrame(() => {
                    barraFill.style.width = `${Math.max(0, Math.min(100, ris.vicinanza.toFixed(0)))}%`;
                });
                barraFill.textContent = `${ris.vicinanza.toFixed(0)}%`;

                barraSfondo.appendChild(barraFill);
                divPartito.appendChild(imgLogo);
                divPartito.appendChild(nomePartitoSpan);
                divPartito.appendChild(barraSfondo);
                vicinanzaPartitiContainer.appendChild(divPartito);
            });
        }
        mostraSezione(risultatiSezione);
    }

    function resetTest() {
        mostraSezione(selezioneTestSection);
        indiceDomandaCorrente = 0;
        risposteUtente = {};
        tipoTestSelezionato = null;
        barraProgressoFill.style.width = '0%';
        // Pulisci i risultati precedenti
        etichettaDefinizione.textContent = "";
        compassTextPlaceholder.textContent = "(La tua posizione generale sarà descritta qui)";
        vicinanzaPartitiContainer.innerHTML = '<h3>Vicinanza ai Partiti (%):</h3>';

    }
    mostraSezione(selezioneTestSection);
});