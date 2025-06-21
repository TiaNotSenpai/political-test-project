// File: js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const introSezione = document.getElementById('intro-sezione');
    const sezioneTest = document.getElementById('sezione-test');
    const risultatiSezione = document.getElementById('risultati-sezione');
    const btnHome = document.getElementById('btn-home');
    const btnTestBreve = document.getElementById('btn-test-breve');
    const btnTestLunga = document.getElementById('btn-test-lunga');
    const titoloTest = document.getElementById('titolo-test');
    const domandaCorrenteSpan = document.getElementById('domanda-corrente');
    const domandeTotaliSpan = document.getElementById('domande-totali');
    const temaDomandaSpan = document.getElementById('tema-domanda');
    const barraProgressoFill = document.getElementById('barra-progresso-fill');
    const testoDomandaP = document.getElementById('testo-domanda');
    const opzioniRispostaContainer = document.getElementById('opzioni-risposta-container');
    const btnIndietro = document.getElementById('btn-indietro');
    const btnAvanti = document.getElementById('btn-avanti');
    const etichettaDefinizioneGenerale = document.getElementById('etichetta-definizione-generale');
    const asseEconomicoRisultatoP = document.getElementById('asse-economico-risultato');
    const asseSocialeRisultatoP = document.getElementById('asse-sociale-risultato');
    const asseEuropeoRisultatoP = document.getElementById('asse-europeo-risultato');
    const asseAmbientaleRisultatoP = document.getElementById('asse-ambientale-risultato');
    const descrizioneProfiloDettagliataP = document.getElementById('descrizione-profilo-dettagliata');
    const vicinanzaPartitiContainer = document.getElementById('vicinanza-partiti-container');
    const btnRifaiTest = document.getElementById('btn-rifai-test');
    const currentYearSpan = document.getElementById('current-year');

    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();

    let tipoTestSelezionato = null, domandeDelTest = [], partitiDelTest = [];
    let indiceDomandaCorrente = 0, risposteUtente = {};

    const mappaturaTemaAsse = {
        "Fisco": "economico", "Lavoro": "economico", "Intervento Statale": "economico", "Infrastrutture": "economico",
        "Debito Pubblico": "economico", "Privatizzazioni": "economico", "Controllo Prezzi": "economico",
        "Spesa Pubblica": "economico", "Modello Economico": "economico", "Welfare": "economico", "Sanità": "economico",
        "Pensioni": "economico", "Casa": "economico", "Istruzione Pubblica": "economico", "Scuole Paritarie": "economico",
        "Ricerca Scientifica": "economico", "Fine Vita": "sociale", "Diritti LGBTQ+": "sociale", "Bioetica": "sociale",
        "Cittadinanza": "sociale", "Legalizzazioni": "sociale", "Antidiscriminazione": "sociale",
        "Libertà Online": "sociale", "Aborto": "sociale", "Parità di Genere": "sociale", "Laicità e Simboli": "sociale",
        "Modelli Familiari": "sociale", "Immigrazione": "sociale", "Integrazione": "sociale", "Giustizia e Pene": "sociale",
        "Riforma Giustizia": "sociale", "Legittima Difesa": "sociale", "Sorveglianza e Privacy": "sociale",
        "Identità Culturale": "sociale", "Accesso Università": "sociale", "Forma di Governo": "istituzionale",
        "Autonomia Regionale": "istituzionale", "Legge Elettorale": "istituzionale", "Finanziamento Politica": "istituzionale",
        "Costi Politica": "istituzionale", "Democrazia Diretta": "istituzionale", "Magistratura e Politica": "istituzionale",
        "Energia Nucleare": "ambientale", "Energie Rinnovabili": "ambientale", "Tassazione Ambientale": "ambientale",
        "Fonti Fossili Nazionali": "ambientale", "Priorità Ambientale": "ambientale", "OGM": "ambientale",
        "Caccia": "ambientale", "Rifiuti e Plastica": "ambientale", "Allevamenti Intensivi": "ambientale",
        "Mobilità Urbana": "ambientale", "Sperimentazione Animale": "ambientale", "Integrazione UE": "europeo",
        "Sovranità vs UE": "europeo", "Patto di Stabilità UE": "europeo", "Allargamento UE": "europeo",
        "Spese Militari e NATO": "europeo", "Conflitto Ucraina": "europeo", "Questione Palestinese": "europeo",
        "Geopolitica Globale": "europeo", "Intelligenza Artificiale": "digitale", "Regolamentazione Big Tech": "digitale",
        "Identità Digitale": "digitale", "Proprietà Intellettuale": "digitale", "Space Economy": "digitale",
        "Smart Working": "digitale", "Cybersicurezza": "digitale", "Criptovalute": "digitale", "Gioco d'Azzardo": "sociale"
    };

    btnHome.addEventListener('click', resetEAprimiPassi);
    btnTestBreve.addEventListener('click', () => avviaTest('breve'));
    btnTestLunga.addEventListener('click', () => avviaTest('lunga'));
    btnIndietro.addEventListener('click', vaiDomandaPrecedente);
    btnAvanti.addEventListener('click', vaiDomandaSuccessivaOMostraRisultati);
    btnRifaiTest.addEventListener('click', resetEAprimiPassi);

    function mostraSezione(sezioneId) {
        [introSezione, sezioneTest, risultatiSezione].forEach(s => s.className = 'hidden-section');
        document.getElementById(sezioneId).className = 'active-section';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetEAprimiPassi() {
        tipoTestSelezionato = null; domandeDelTest = []; partitiDelTest = [];
        indiceDomandaCorrente = 0; risposteUtente = {};
        titoloTest.textContent = ""; domandaCorrenteSpan.textContent = "0";
        domandeTotaliSpan.textContent = "0"; temaDomandaSpan.textContent = "";
        barraProgressoFill.style.width = '0%'; testoDomandaP.textContent = "";
        opzioniRispostaContainer.innerHTML = "";
        etichettaDefinizioneGenerale.textContent = ""; asseEconomicoRisultatoP.innerHTML = "";
        asseSocialeRisultatoP.innerHTML = ""; asseEuropeoRisultatoP.innerHTML = "";
        asseAmbientaleRisultatoP.innerHTML = ""; descrizioneProfiloDettagliataP.textContent = "";
        vicinanzaPartitiContainer.innerHTML = "";
        btnHome.style.display = 'none';
        mostraSezione('intro-sezione');
    }

    function avviaTest(tipo) {
        tipoTestSelezionato = tipo;
        domandeDelTest = (tipo === 'breve') ? partitiDB.domandeBreve : partitiDB.domandeLunga;
        partitiDelTest = (tipo === 'breve') ? partitiDB.partitiBreve : partitiDB.partitiLunga;
        if (!domandeDelTest.length || !partitiDelTest.length) {
            alert("Errore: Dati test non caricati."); return;
        }
        indiceDomandaCorrente = 0; risposteUtente = {};
        titoloTest.textContent = tipo === 'breve' ? "Test Rapido" : "Test Completo";
        domandeTotaliSpan.textContent = domandeDelTest.length;
        btnHome.style.display = 'inline-block';
        mostraSezione('sezione-test');
        caricaDomanda();
    }

    function caricaDomanda() {
        if (indiceDomandaCorrente >= domandeDelTest.length) return;
        const d = domandeDelTest[indiceDomandaCorrente];
        domandaCorrenteSpan.textContent = indiceDomandaCorrente + 1;
        testoDomandaP.textContent = d.testo;
        temaDomandaSpan.textContent = d.tema || "N/A";
        opzioniRispostaContainer.innerHTML = '';
        partitiDB.opzioniRisposta.forEach(op => {
            const btn = document.createElement('button');
            btn.textContent = op.testo; btn.dataset.valore = op.valore;
            btn.onclick = () => selezionaRisposta(d.id, op.valore, btn); // Corretto
            if (risposteUtente[d.id] === op.valore) btn.classList.add('selected');
            opzioniRispostaContainer.appendChild(btn);
        });
        aggiornaStatoPulsantiNavigazione(); aggiornaBarraProgresso();
    }

    function selezionaRisposta(id, val, btnSel) {
        risposteUtente[id] = val;
        Array.from(opzioniRispostaContainer.children).forEach(b => b.classList.remove('selected'));
        btnSel.classList.add('selected');
        aggiornaStatoPulsantiNavigazione();
        setTimeout(() => { if (risposteUtente[domandeDelTest[indiceDomandaCorrente]?.id] !== undefined) vaiDomandaSuccessivaOMostraRisultati(); }, 200);
    }

    function aggiornaStatoPulsantiNavigazione() {
        btnIndietro.disabled = indiceDomandaCorrente === 0;
        const ultima = indiceDomandaCorrente === domandeDelTest.length - 1;
        btnAvanti.textContent = ultima ? "Vedi Risultati" : "Avanti";
        btnAvanti.disabled = risposteUtente[domandeDelTest[indiceDomandaCorrente]?.id] === undefined;
    }

    function aggiornaBarraProgresso() { barraProgressoFill.style.width = `${((indiceDomandaCorrente + 1) / domandeDelTest.length) * 100}%`; }
    function vaiDomandaPrecedente() { if (indiceDomandaCorrente > 0) { indiceDomandaCorrente--; caricaDomanda(); } }
    function vaiDomandaSuccessivaOMostraRisultati() {
        if (risposteUtente[domandeDelTest[indiceDomandaCorrente]?.id] === undefined && indiceDomandaCorrente < domandeDelTest.length -1) return;
        (indiceDomandaCorrente < domandeDelTest.length - 1) ? (indiceDomandaCorrente++, caricaDomanda()) : calcolaERendiRisultati();
    }

    function calcolaVicinanzaPartito(partito) {
        let sim = 0, count = 0;
        for (const id in risposteUtente) {
            if (partito.posizioni?.[id] !== undefined) {
                sim += (1 - (Math.abs(risposteUtente[id] - partito.posizioni[id]) / 2));
                count++;
            }
        }
        return count > 0 ? (sim / count) * 100 : 0;
    }

    function calcolaPunteggiAssi() {
        const assi = { economico: 0, sociale: 0, europeo: 0, ambientale: 0, istituzionale: 0, digitale: 0 };
        const conti = { economico: 0, sociale: 0, europeo: 0, ambientale: 0, istituzionale: 0, digitale: 0 };
        domandeDelTest.forEach(d => {
            if (risposteUtente[d.id] === undefined) return;
            const asseTema = mappaturaTemaAsse[d.tema];
            if (asseTema && assi.hasOwnProperty(asseTema)) {
                let valRisposta = risposteUtente[d.id];
                let polarita = d[`polaritaAsse${asseTema.charAt(0).toUpperCase() + asseTema.slice(1)}`];
                if (polarita === undefined) { 
                    polarita = d.polaritaAsseEco ?? d.polaritaAsseSoc ?? d.polaritaAsseAmb ?? d.polaritaAsseEur ?? 1; 
                }
                assi[asseTema] += valRisposta * polarita;
                conti[asseTema]++;
            }
        });
        for (const asse in assi) if (conti[asse] > 0) assi[asse] /= conti[asse];
        return assi;
    }

    function descriviPosizioneAsse(nomeAsse, val, labels) {
        let desc = labels.neutrale;
        if (val > 0.66) desc = labels.moltoPositivo; else if (val > 0.33) desc = labels.positivo;
        else if (val < -0.66) desc = labels.moltoNegativo; else if (val < -0.33) desc = labels.negativo;
        return `${nomeAsse}: <strong>${desc}</strong> <span class="punteggio-asse">(~${val.toFixed(2)})</span>`;
    }
    
    function getDescrizioneTestualeAsse(val, labels) {
        if (val > 0.66) return labels.moltoPositivo; if (val > 0.33) return labels.positivo;
        if (val < -0.66) return labels.moltoNegativo; if (val < -0.33) return labels.negativo;
        return labels.neutrale;
    }
    
    function determinaDefinizionePoliticaComplessiva(risultatiPartiti, assi) {
        const pMax = risultatiPartiti.length > 0 ? risultatiPartiti.reduce((max, p) => p.vicinanza > max.vicinanza ? p : max, risultatiPartiti[0]) : null;
        let defGen = "Profilo Politico Unico e Articolato";
        let descr = "Le tue risposte delineano un profilo che attinge da diverse prospettive, suggerendo una visione politica personale e non strettamente incasellabile. ";

        const lblEco = {moltoPositivo:"Fortemente Liberista/Pro-Mercato",positivo:"Orientato al Mercato",neutrale:"Posizione Economica Bilanciata",negativo:"Orientato all'Intervento Statalista",moltoNegativo:"Fortemente Statalista/Collettivista"};
        const lblSoc = {moltoPositivo:"Fortemente Conservatore/Tradizionalista",positivo:"Moderatamente Conservatore",neutrale:"Posizione Sociale Moderata",negativo:"Orientato al Progressismo",moltoNegativo:"Fortemente Progressista/Libertario"};
        const lblEur = {moltoPositivo:"Fortemente Euro-entusiasta/Federalista",positivo:"Favorevole all'Integrazione Europea",neutrale:"Posizione Europea Pragmatica",negativo:"Critico verso l'UE/Euroscettico Moderato",moltoNegativo:"Fortemente Sovranista/Euroscettico Radicale"};
        const lblAmb = {moltoPositivo:"Fortemente Ecologista/Ambientalista",positivo:"Sensibile alle Tematiche Ambientali",neutrale:"Approccio Ambientale Bilanciato",negativo:"Priorità a Sviluppo su Ambiente",moltoNegativo:"Scettico su Emergenza Ambientale"};

        asseEconomicoRisultatoP.innerHTML = descriviPosizioneAsse("Economico", assi.economico, lblEco);
        asseSocialeRisultatoP.innerHTML = descriviPosizioneAsse("Sociale/Civile", assi.sociale, lblSoc);
        asseEuropeoRisultatoP.innerHTML = descriviPosizioneAsse("Europeo", assi.europeo, lblEur);
        asseAmbientaleRisultatoP.innerHTML = descriviPosizioneAsse("Ambientale", assi.ambientale, lblAmb);

        descr += `Analizzando i principali assi tematici: In ambito <strong>economico</strong> (${assi.economico.toFixed(2)}), ti collochi verso ${getDescrizioneTestualeAsse(assi.economico, lblEco).toLowerCase()}. `;
        descr += `Sui temi <strong>sociali/civili</strong> (${assi.sociale.toFixed(2)}), tendi a ${getDescrizioneTestualeAsse(assi.sociale, lblSoc).toLowerCase()}. `;
        descr += `Riguardo all'<strong>Europa</strong> (${assi.europeo.toFixed(2)}), la tua visione è ${getDescrizioneTestualeAsse(assi.europeo, lblEur).toLowerCase()}. `;
        descr += `Infine, sulle questioni <strong>ambientali</strong> (${assi.ambientale.toFixed(2)}), dimostri ${getDescrizioneTestualeAsse(assi.ambientale, lblAmb).toLowerCase()}.`;

        if (pMax && pMax.vicinanza > 35) {
            defGen = `Orientamento affine a: ${pMax.partito.short_desc_area}`;
            descr += `\n\nIl partito con cui mostri maggiore affinità è <strong>${pMax.partito.nome}</strong> (vicinanza: ${pMax.vicinanza.toFixed(0)}%). Questa vicinanza, unita all'analisi per assi, suggerisce che le tue convinzioni trovano una risonanza significativa in questa area politica, pur con le tue specificità.`;
            if (pMax.vicinanza > 65) {
                defGen = `Forte affinità con: ${pMax.partito.short_desc_area}`;
                let parteInizialeDescr = descr.split('\n\n')[0] || descr; // Prende la parte degli assi
                descr = `Il tuo profilo politico mostra una chiara e forte congruenza con le posizioni di <strong>${pMax.partito.nome}</strong> (${pMax.partito.short_desc_area}), con una vicinanza del <strong>${pMax.vicinanza.toFixed(0)}%</strong>. ${parteInizialeDescr}`;
            }
        } else {
            descr += "\n\nLe tue posizioni sembrano riflettere una visione indipendente. Questo test è uno spunto di riflessione, non un'etichetta definitiva."
        }
        etichettaDefinizioneGenerale.textContent = defGen;
        descrizioneProfiloDettagliataP.textContent = descr;
    }

    function calcolaERendiRisultati() {
        const risultatiPartito = partitiDelTest.map(p => ({ partito: p, vicinanza: calcolaVicinanzaPartito(p) }))
            .sort((a,b) => b.vicinanza - a.vicinanza);
        const assi = calcolaPunteggiAssi();
        determinaDefinizionePoliticaComplessiva(risultatiPartito, assi);
        vicinanzaPartitiContainer.innerHTML = '';
        const partitiVisibili = risultatiPartito.filter(r => r.vicinanza > 10).slice(0, tipoTestSelezionato === 'breve' ? 15 : 30);

        if (!partitiVisibili.length) {
            vicinanzaPartitiContainer.innerHTML = "<p><em>Nessun partito mostra una significativa affinità (>10%) con le tue risposte.</em></p>";
        } else {
            partitiVisibili.forEach(ris => {
                const el = document.createElement('div'); el.className = 'risultato-partito';
                el.innerHTML = `
                    <img src="${ris.partito.logo || 'img/default-logo.png'}" alt="Logo ${ris.partito.nome}" class="logo-partito-risultato" onerror="this.src='img/default-logo.png';">
                    <div class="info-partito">
                        <span class="nome-partito">${ris.partito.nome}</span>
                        <span class="area-partito-label">${ris.partito.short_desc_area || ris.partito.areaPolitica}</span>
                    </div>
                    <span class="percentuale-vicinanza">${ris.vicinanza.toFixed(0)}%</span>`;
                vicinanzaPartitiContainer.appendChild(el);
            });
        }
        mostraSezione('risultati-sezione');
    }
    resetEAprimiPassi();
});