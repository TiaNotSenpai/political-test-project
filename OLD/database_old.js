// File: js/database.js

const partitiDB = {
    partitiBreve: [ // Circa 30 partiti, bilanciati e con diverse rilevanze
        // Destra / Centro-Destra
        { id: "fdi", nome: "Fratelli d'Italia", logo: "img/fdi.png", definizioneBreve: "Destra Conservatrice e Sovranista", areaPolitica: "destra" },
        { id: "lega", nome: "Lega Salvini Premier", logo: "img/lega.png", definizioneBreve: "Destra Populista e Sovranista", areaPolitica: "destra" },
        { id: "fi", nome: "Forza Italia", logo: "img/forzaitalia.png", definizioneBreve: "Centro-Destra Liberale e Popolare Europeo", areaPolitica: "centro-destra" },
        { id: "nm", nome: "Noi Moderati", logo: "img/noimoderati.png", definizioneBreve: "Centro-Destra Moderato e Cristianodemocratico", areaPolitica: "centro-destra" },
        { id: "italexit", nome: "Italexit per l'Italia", logo: "img/italexit.png", definizioneBreve: "Destra Sovranista ed Euroscettica", areaPolitica: "destra-estrema" },
        { id: "casapound", nome: "CasaPound Italia", logo: "img/casapound.png", definizioneBreve: "Estrema Destra Neofascista", areaPolitica: "destra-estrema" },
        { id: "fn", nome: "Forza Nuova", logo: "img/forzanuova.png", definizioneBreve: "Estrema Destra Nazionalista e Tradizionalista", areaPolitica: "destra-estrema" },
        { id: "coraggioitalia", nome: "Coraggio Italia", logo: "img/default.png", definizioneBreve: "Centro-Destra Liberale Conservatore", areaPolitica: "centro-destra" }, // Usare default.png o specifico
        { id: "udc", nome: "Unione di Centro (UdC)", logo: "img/default.png", definizioneBreve: "Centro d'ispirazione Cristianodemocratica", areaPolitica: "centro" },

        // Centro
        { id: "azione", nome: "Azione", logo: "img/azione.png", definizioneBreve: "Centro Liberale e Riformista", areaPolitica: "centro" },
        { id: "iv", nome: "Italia Viva", logo: "img/italiaviva.png", definizioneBreve: "Centro Liberale e Riformista", areaPolitica: "centro" },
        { id: "piueuropa", nome: "+Europa", logo: "img/piueuropa.png", definizioneBreve: "Centro Radicale, Liberale ed Europeista", areaPolitica: "centro-sinistra" }, // Spesso alleato CSX
        { id: "volt", nome: "Volt Italia", logo: "img/volt.png", definizioneBreve: "Centro Progressista e Federalista Europeo", areaPolitica: "centro-sinistra" },
        { id: "pr", nome: "Partito Radicale", logo: "img/partitoradicale.png", definizioneBreve: "Radicale, Libertario e per i Diritti Civili", areaPolitica: "centro" }, // Posizione storica

        // Sinistra / Centro-Sinistra
        { id: "pd", nome: "Partito Democratico", logo: "img/pd.png", definizioneBreve: "Centro-Sinistra Progressista e Socialdemocratico", areaPolitica: "centro-sinistra" },
        { id: "m5s", nome: "Movimento 5 Stelle", logo: "img/m5s.png", definizioneBreve: "Populista Trasversale, con focus su Giustizia Sociale e Ambiente", areaPolitica: "trasversale" }, // Difficile da collocare univocamente
        { id: "avs", nome: "Alleanza Verdi e Sinistra", logo: "img/alleanzaverdisinistra.png", definizioneBreve: "Sinistra Ecologista e Progressista", areaPolitica: "sinistra" },
        { id: "prc", nome: "Rifondazione Comunista - Sinistra Europea", logo: "img/rifondazionecomunista.png", definizioneBreve: "Sinistra Comunista e Anticapitalista", areaPolitica: "sinistra-estrema" },
        { id: "pap", nome: "Potere al Popolo!", logo: "img/poterealpopolo.png", definizioneBreve: "Sinistra Radicale, Comunista e Antagonista", areaPolitica: "sinistra-estrema" },
        { id: "pci", nome: "Partito Comunista Italiano", logo: "img/partitocomunistaitaliano.png", definizioneBreve: "Sinistra Comunista Marxista-Leninista", areaPolitica: "sinistra-estrema" },
        { id: "possibile", nome: "Possibile", logo: "img/possibile.png", definizioneBreve: "Sinistra Progressista e per i Diritti Civili", areaPolitica: "sinistra" },
        { id: "psi", nome: "Partito Socialista Italiano", logo: "img/psi.png", definizioneBreve: "Centro-Sinistra Socialista e Riformista", areaPolitica: "centro-sinistra" },
        { id: "sinistraitaliana", nome: "Sinistra Italiana", logo: "img/alleanzaverdisinistra.png", definizioneBreve: "Sinistra Socialista Democratica (parte di AVS)", areaPolitica: "sinistra" }, // Logo AVS per semplicità
        { id: "europa_verde", nome: "Europa Verde", logo: "img/alleanzaverdisinistra.png", definizioneBreve: "Ambientalista e Progressista (parte di AVS)", areaPolitica: "sinistra" }, // Logo AVS

        // Autonomie / Altri
        { id: "svp", nome: "Südtiroler Volkspartei", logo: "img/svp.png", definizioneBreve: "Partito Autonomista dell'Alto Adige / Südtirol", areaPolitica: "autonomista" },
        { id: "scn", nome: "Sud chiama Nord", logo: "img/sudchiamanord.png", definizioneBreve: "Autonomista Meridionalista", areaPolitica: "autonomista" },
        { id: "maie", nome: "Movimento Associativo Italiani all'Estero", logo: "img/default.png", definizioneBreve: "Rappresentanza Italiani all'Estero", areaPolitica: "altro" },
        { id: "dc_storica", nome: "Democrazia Cristiana (ispirazione)", logo: "img/default.png", definizioneBreve: "Ispirazione ai valori della DC storica", areaPolitica: "centro" },
        { id: "italia_sovrana_popolare", nome: "Italia Sovrana e Popolare", logo: "img/default.png", definizioneBreve: "Coalizione Sovranista e Anti-sistema", areaPolitica: "trasversale-critico" },
        { id: "ap", nome: "Alternativa Popolare", logo: "img/default.png", definizioneBreve: "Centro Popolare Europeo", areaPolitica: "centro" },
    ],

    get partitiLunga() { // La versione lunga include quelli della breve più altri
        const partitiAggiuntivi = [
            { id: "civici_italia", nome: "Civici d'Italia", logo: "img/default.png", definizioneBreve: "Rete di Liste Civiche Nazionali (spesso con Noi Moderati)", areaPolitica: "centro-destra" },
            { id: "verdi_ambiente_societa", nome: "Verdi Ambiente e Società (VAS)", logo: "img/default.png", definizioneBreve: "Ambientalismo Storico", areaPolitica: "sinistra" },
            { id: "partito_animalista", nome: "Partito Animalista Italiano", logo: "img/animalista.png", definizioneBreve: "Focalizzato sui Diritti degli Animali", areaPolitica: "tematico" },
            { id: "democrazia_liberale", nome: "Democrazia Liberale", logo: "img/default.png", definizioneBreve: "Liberalismo Classico", areaPolitica: "centro" },
            { id: "fronte_sovranista_italiano", nome: "Fronte Sovranista Italiano", logo: "img/default.png", definizioneBreve: "Sovranismo di Sinistra Costituzionale", areaPolitica: "trasversale-critico" },
            { id: "riconquistare_italia", nome: "Riconquistare l'Italia", logo: "img/default.png", definizioneBreve: "Sovranismo e Interesse Nazionale", areaPolitica: "destra-estrema" },
            { id: "il_popolo_della_famiglia", nome: "Il Popolo della Famiglia", logo: "img/default.png", definizioneBreve: "Valori Cristiani e Famiglia Tradizionale", areaPolitica: "destra" },
            { id: "mastella_noi_campani", nome: "Noi Campani (Mastella)", logo: "img/mastella.png", definizioneBreve: "Centro Popolare Radicato Localmente", areaPolitica: "centro" },
            { id: "demos", nome: "Democrazia Solidale - Demos", logo: "img/demos.png", definizioneBreve: "Centro-Sinistra d'ispirazione Cristiana Sociale", areaPolitica: "centro-sinistra" },
            { id: "grande_nord", nome: "Grande Nord", logo: "img/default.png", definizioneBreve: "Autonomismo e Federalismo del Nord Italia", areaPolitica: "autonomista" },
            { id: "movimento_per_le_autonomie", nome: "Movimento per le Autonomie (MPA)", logo: "img/default.png", definizioneBreve: "Autonomismo Siciliano e Meridionale", areaPolitica: "autonomista" },
            { id: "partito_comunista_lavoratori", nome: "Partito Comunista dei Lavoratori (PCL)", logo: "img/default.png", definizioneBreve: "Comunismo Trotskista e Rivoluzionario", areaPolitica: "sinistra-estrema" },
            { id: "sinistra_anticapitalista", nome: "Sinistra Anticapitalista", logo: "img/default.png", definizioneBreve: "Anticapitalismo e Internazionalismo", areaPolitica: "sinistra-estrema" },
            { id: "partito_pirata", nome: "Partito Pirata", logo: "img/default.png", definizioneBreve: "Diritti Digitali, Libertà di Informazione e Democrazia Diretta", areaPolitica: "tematico" },
            { id: "insieme_per_il_futuro", nome: "Insieme per il Futuro (ex M5S Di Maio)", logo: "img/default.png", definizioneBreve: "Centrismo e Pragmatismo (formazione recente)", areaPolitica: "centro" },
            { id: "per_italia_con_paragone", nome: "Per l'Italia con Paragone (ex Italexit)", logo: "img/italexit.png", definizioneBreve: "Sovranismo ed Euroscetticismo (evoluzione di Italexit)", areaPolitica: "destra-estrema"},
            { id: "noi_con_l_italia", nome: "Noi con l'Italia (ora in Noi Moderati)", logo: "img/noimoderati.png", definizioneBreve: "Centro-Destra Cristiano e Liberale (confluito)", areaPolitica: "centro-destra" },
            { id: "cambiamo", nome: "Cambiamo! (ora in Coraggio Italia/Noi Moderati)", logo: "img/default.png", definizioneBreve: "Centro-Destra Liberale (confluito)", areaPolitica: "centro-destra" },
            { id: "gilet_arancioni", nome: "Gilet Arancioni", logo: "img/default.png", definizioneBreve: "Movimento di Protesta Populista", areaPolitica: "trasversale-critico" },
            { id: "partito_del_sud", nome: "Partito del Sud", logo: "img/default.png", definizioneBreve: "Meridionalismo e Autonomia", areaPolitica: "autonomista" },
             // Aggiungerne altri per arrivare a un numero significativamente più alto per la versione lunga.
             // L'obiettivo è mostrare la granularità.
        ];
        // Unisci e rimuovi duplicati se un partito era già in breve
        const partitiLungaMap = new Map();
        this.partitiBreve.forEach(p => partitiLungaMap.set(p.id, p));
        partitiAggiuntivi.forEach(p => partitiLungaMap.set(p.id, p)); // Sovrascrive se ID uguale, ma gli ID dovrebbero essere univoci
        return Array.from(partitiLungaMap.values());
    },

    // --- DOMANDE ---
    // (Valori posizioni: 1=Fortemente a favore, 0.5=A favore, 0=Neutrale/Non chiaro, -0.5=Contrario, -1=Fortemente contrario)
    // Le posizioni dei partiti sono PURAMENTE ILLUSTRATIVE e richiedono ricerca reale.

    domandeBreve: [
        // Economia e Lavoro
        { id: "q1", testo: "È necessario ridurre drasticamente le tasse sulle imprese (flat tax o forte riduzione aliquote)?", tema: "Economia" },
        { id: "q2", testo: "Bisogna introdurre o rafforzare un salario minimo legale a livello nazionale?", tema: "Lavoro" },
        { id: "q3", testo: "Lo Stato dovrebbe intervenire maggiormente nell'economia, anche tramite nazionalizzazioni strategiche?", tema: "Economia" },
        { id: "q4", testo: "Le politiche di austerità e rigore nei conti pubblici sono fondamentali, anche a costo di tagli alla spesa sociale?", tema: "Economia" },
        { id: "q5", testo: "È giusto aumentare la tassazione sulle grandi ricchezze e patrimoni?", tema: "Fisco" },
        // Welfare e Sanità
        { id: "q6", testo: "Il sistema sanitario nazionale dovrebbe essere prevalentemente pubblico e universale, limitando il ruolo dei privati?", tema: "Sanità" },
        { id: "q7", testo: "È necessario un sistema di reddito di cittadinanza o di sostegno universale al reddito?", tema: "Welfare" },
        { id: "q8", testo: "L'età pensionabile dovrebbe essere abbassata o resa più flessibile?", tema: "Pensioni" },
        // Diritti Civili e Sociali
        { id: "q9", testo: "Bisogna legalizzare l'eutanasia e il suicidio assistito?", tema: "Diritti Civili" },
        { id: "q10", testo: "Si dovrebbe consentire il matrimonio egualitario e le adozioni per coppie dello stesso sesso?", tema: "Diritti Civili" },
        { id: "q11", testo: "È necessario introdurre lo Ius Soli o Ius Culturae per facilitare l'acquisizione della cittadinanza da parte di stranieri nati o cresciuti in Italia?", tema: "Immigrazione" },
        { id: "q12", testo: "Le politiche sull'immigrazione dovrebbero essere più restrittive, con maggiori controlli alle frontiere e limitazioni agli ingressi?", tema: "Immigrazione" },
        { id: "q13", testo: "Si dovrebbe legalizzare la cannabis per uso ricreativo?", tema: "Diritti Civili" },
        // Ambiente ed Energia
        { id: "q14", testo: "L'Italia dovrebbe puntare con decisione sulle energie rinnovabili, anche disincentivando le fonti fossili?", tema: "Ambiente" },
        { id: "q15", testo: "È opportuno reintrodurre o sviluppare l'energia nucleare in Italia?", tema: "Energia" },
        { id: "q16", testo: "Le politiche ambientali devono avere la priorità, anche se comportano costi economici per imprese e cittadini?", tema: "Ambiente" },
        // Istruzione e Cultura
        { id: "q17", testo: "Lo Stato dovrebbe investire significativamente di più nell'istruzione pubblica, dalla scuola all'università?", tema: "Istruzione" },
        { id: "q18", testo: "È importante difendere e promuovere le radici culturali e le tradizioni nazionali, anche in contesti multiculturali?", tema: "Cultura" },
        // Giustizia e Sicurezza
        { id: "q19", testo: "Le pene per i reati dovrebbero essere inasprite e la certezza della pena garantita con maggiore severità?", tema: "Giustizia" },
        { id: "q20", testo: "È necessario riformare profondamente il sistema giudiziario per ridurre i tempi dei processi, anche separando le carriere dei magistrati?", tema: "Giustizia" },
        { id: "q21", testo: "Il possesso e l'uso di armi da fuoco per difesa personale dovrebbero essere facilitati?", tema: "Sicurezza" },
        // Politica Estera e UE
        { id: "q22", testo: "L'Italia dovrebbe cedere ulteriori quote di sovranità all'Unione Europea per rafforzarne l'integrazione politica?", tema: "UE" },
        { id: "q23", testo: "L'Italia dovrebbe uscire dall'Euro o rinegoziare profondamente i trattati europei per recuperare sovranità monetaria e fiscale?", tema: "UE" },
        { id: "q24", testo: "L'Italia dovrebbe mantenere un forte legame con la NATO e aumentare le spese militari in linea con gli impegni internazionali?", tema: "Difesa" },
        // Riforme Istituzionali
        { id: "q25", testo: "È necessaria una riforma costituzionale verso il presidenzialismo o il premierato forte?", tema: "Istituzioni" },
        { id: "q26", testo: "Bisogna ridurre drasticamente il numero dei parlamentari e i costi della politica?", tema: "Istituzioni" }, // Già avvenuto in parte, ma tema ricorrente
        // Temi Etici e Valoriali
        { id: "q27", testo: "La famiglia tradizionale basata sul matrimonio tra uomo e donna deve essere il modello primario da sostenere?", tema: "Valori" },
        { id: "q28", testo: "Le scuole pubbliche dovrebbero dare maggiore spazio all'insegnamento della religione cattolica o rimanere strettamente laiche?", tema: "Laicità" },
        // Sviluppo e Innovazione
        { id: "q29", testo: "Lo Stato dovrebbe finanziare maggiormente la ricerca scientifica e l'innovazione tecnologica?", tema: "Innovazione" },
        { id: "q30", testo: "La costruzione di grandi opere infrastrutturali (es. TAV, Ponte sullo Stretto) è prioritaria per lo sviluppo del Paese?", tema: "Infrastrutture" },
        // Federalismo e Autonomie
        { id: "q31", testo: "Bisogna concedere maggiore autonomia fiscale e legislativa alle Regioni (autonomia differenziata)?", tema: "Autonomie" },
        // Digitale
        { id: "q32", testo: "Lo Stato dovrebbe regolamentare più severamente le grandi piattaforme digitali e i social media?", tema: "Digitale" },
        // Europa e Mondo
        { id: "q33", testo: "L'Italia dovrebbe sostenere attivamente l'Ucraina, anche con forniture militari, nel conflitto con la Russia?", tema: "Politica Estera" },
        { id: "q34", testo: "È prioritario contrastare il cambiamento climatico con politiche globali vincolanti, anche se impattano sullo stile di vita?", tema: "Ambiente Globale" },
        { id: "q35", testo: "L'Italia dovrebbe promuovere una politica di maggiore accoglienza e integrazione per rifugiati e richiedenti asilo?", tema: "Immigrazione" }
    ],

    get domandeLunga() {
        const domandeAggiuntive = [
            // Approfondimenti Economia e Lavoro
            { id: "q36", testo: "È necessario abolire o riformare profondamente il Reddito di Cittadinanza?", tema: "Welfare" },
            { id: "q37", testo: "Le privatizzazioni di aziende e servizi pubblici dovrebbero continuare o essere fermate?", tema: "Economia" },
            { id: "q38", testo: "Bisogna introdurre una 'web tax' significativa per le multinazionali digitali che operano in Italia?", tema: "Fisco" },
            { id: "q39", testo: "Il cuneo fiscale (differenza tra stipendio lordo e netto) dovrebbe essere ridotto principalmente a favore dei lavoratori o delle imprese?", tema: "Lavoro" },
            { id: "q40", testo: "È opportuno incentivare forme di lavoro più flessibili (es. part-time involontario, contratti a termine) o tutelare maggiormente il lavoro stabile?", tema: "Lavoro" },
            // Approfondimenti Diritti Civili e Sociali
            { id: "q41", testo: "La gestazione per altri (GPA o 'utero in affitto') dovrebbe essere permessa e regolamentata, o vietata come reato universale?", tema: "Diritti Civili" },
            { id: "q42", testo: "Si dovrebbe introdurre una legge contro l'omotransfobia, simile a quella contro il razzismo?", tema: "Diritti Civili" },
            { id: "q43", testo: "Le quote di genere (es. 'quote rosa') sono uno strumento utile per promuovere la parità nelle istituzioni e nelle aziende?", tema: "Parità di Genere" },
            { id: "q44", testo: "È necessario garantire il diritto all'aborto come definito dalla legge 194, contrastando l'obiezione di coscienza negli ospedali?", tema: "Diritti Civili" },
            { id: "q45", testo: "Le politiche di integrazione per gli immigrati regolari dovrebbero includere corsi di lingua e cultura italiana obbligatori?", tema: "Immigrazione" },
            // Approfondimenti Ambiente ed Energia
            { id: "q46", testo: "Si dovrebbe investire nella tecnologia del 'Carbon Capture and Storage' (CCS) per ridurre le emissioni industriali?", tema: "Ambiente" },
            { id: "q47", testo: "L'agricoltura intensiva e l'uso di pesticidi dovrebbero essere fortemente limitati a favore di metodi biologici e sostenibili?", tema: "Agricoltura" },
            { id: "q48", testo: "È necessario introdurre una carbon tax sui prodotti e servizi in base alle loro emissioni di CO2?", tema: "Ambiente" },
            { id: "q49", testo: "L'esplorazione e l'estrazione di idrocarburi (gas e petrolio) nei mari italiani dovrebbero essere definitivamente bloccate?", tema: "Energia" },
            // Approfondimenti Istruzione e Cultura
            { id: "q50", testo: "Il merito individuale dovrebbe essere maggiormente valorizzato nel sistema scolastico e universitario, anche con percorsi differenziati?", tema: "Istruzione" },
            { id: "q51", testo: "È giusto finanziare le scuole private paritarie con fondi pubblici?", tema: "Istruzione" },
            { id: "q52", testo: "La cultura (teatri, musei, cinema) dovrebbe ricevere più finanziamenti pubblici come settore strategico?", tema: "Cultura" },
            // Approfondimenti Giustizia e Sicurezza
            { id: "q53", testo: "La prescrizione dei reati dovrebbe essere ulteriormente riformata per evitare che i processi si estinguano?", tema: "Giustizia" },
            { id: "q54", testo: "Le carceri dovrebbero puntare più sulla rieducazione e il reinserimento sociale dei detenuti o sulla deterrenza della pena?", tema: "Giustizia" },
            { id: "q55", testo: "Le forze dell'ordine dovrebbero essere dotate di maggiori poteri e strumenti (es. bodycam obbligatorie, taser)?", tema: "Sicurezza" },
            // Approfondimenti Politica Estera e UE
            { id: "q56", testo: "L'Unione Europea dovrebbe avere un esercito comune e una politica estera unificata?", tema: "UE" },
            { id: "q57", testo: "L'Italia dovrebbe opporsi al Patto di Stabilità e Crescita europeo se ritenuto troppo restrittivo per la spesa pubblica?", tema: "UE" },
            { id: "q58", testo: "L'Italia dovrebbe riconoscere lo Stato di Palestina?", tema: "Politica Estera" },
            { id: "q59", testo: "Le sanzioni economiche contro altri Paesi sono uno strumento efficace e giusto di politica estera?", tema: "Politica Estera" },
            // Approfondimenti Riforme Istituzionali
            { id: "q60", testo: "È necessario reintrodurre il finanziamento pubblico diretto ai partiti politici?", tema: "Istituzioni" },
            { id: "q61", testo: "Il sistema elettorale dovrebbe essere puramente proporzionale o maggioritario per garantire governabilità?", tema: "Istituzioni" },
            { id: "q62", testo: "Si dovrebbe introdurre il voto online per elezioni politiche e referendum?", tema: "Istituzioni" },
            // Nuovi temi e specificità
            { id: "q63", testo: "È necessario investire in infrastrutture per la mobilità sostenibile (piste ciclabili, trasporto pubblico elettrico)?", tema: "Mobilità" },
            { id: "q64", testo: "La ricerca scientifica sugli OGM (Organismi Geneticamente Modificati) in agricoltura dovrebbe essere permessa e incentivata in Italia?", tema: "Agricoltura" },
            { id: "q65", testo: "Lo smart working dovrebbe essere incentivato e regolamentato come modalità di lavoro standard dove possibile?", tema: "Lavoro" },
            { id: "q66", testo: "È necessario tutelare maggiormente la proprietà intellettuale e il diritto d'autore nell'era digitale?", tema: "Digitale" },
            { id: "q67", testo: "L'Italia dovrebbe promuovere attivamente accordi di libero scambio commerciale a livello internazionale?", tema: "Commercio" },
            { id: "q68", testo: "Le criptovalute e la tecnologia blockchain dovrebbero essere regolamentate o lasciate al libero mercato?", tema: "Finanza Digitale" },
            { id: "q69", testo: "È necessario un piano nazionale per l'intelligenza artificiale che ne promuova lo sviluppo etico e ne gestisca i rischi?", tema: "Innovazione" },
            { id: "q70", testo: "La caccia dovrebbe essere ulteriormente limitata o vietata per proteggere la fauna selvatica?", tema: "Ambiente" },
            { id: "q71", testo: "Si dovrebbero introdurre limiti più stringenti alla pubblicità del gioco d'azzardo?", tema: "Salute Pubblica" },
            { id: "q72", testo: "Lo Stato dovrebbe intervenire per calmierare i prezzi dei beni di prima necessità in periodi di alta inflazione?", tema: "Economia" },
            { id: "q73", testo: "La libertà di espressione online dovrebbe avere meno restrizioni, anche per contenuti controversi, o essere maggiormente moderata per prevenire abusi?", tema: "Diritti Digitali" },
            { id: "q74", testo: "L'Italia dovrebbe supportare l'ingresso di nuovi Stati membri nell'Unione Europea (es. Balcani Occidentali, Ucraina)?", tema: "UE" },
            { id: "q75", testo: "Il servizio civile universale dovrebbe essere reso obbligatorio per i giovani?", tema: "Sociale" },
            { id: "q76", testo: "È necessario un maggiore controllo pubblico sulla Banca d'Italia e sulla sua autonomia?", tema: "Economia" },
            { id: "q77", testo: "Le grandi manifestazioni sportive e culturali dovrebbero ricevere finanziamenti pubblici significativi?", tema: "Cultura/Sport" },
            { id: "q78", testo: "Bisogna contrastare più efficacemente l'evasione fiscale, anche con strumenti digitali e tracciabilità dei pagamenti?", tema: "Fisco" },
            { id: "q79", testo: "L'Italia dovrebbe avere un ruolo più attivo nelle missioni di pace internazionali?", tema: "Politica Estera" },
            { id: "q80", testo: "È importante preservare le piccole attività commerciali locali rispetto alla grande distribuzione organizzata?", tema: "Commercio" }
        ];
        return [...this.domandeBreve, ...domandeAggiuntive];
    },

    opzioniRisposta: [
        { testo: "Totalmente d'accordo", valore: 1 },
        { testo: "D'accordo", valore: 0.5 },
        { testo: "Neutrale / Non so / Indifferente", valore: 0 },
        { testo: "In disaccordo", valore: -0.5 },
        { testo: "Totalmente in disaccordo", valore: -1 }
    ],

    // Definizioni per il "Political Compass" (esempi semplificati)
    // Questi sono basati sulla media delle risposte dell'utente, dove un valore più alto è "destra" e più basso "sinistra"
    // Il calcolo effettivo di un "asse" ideologico andrebbe fatto più rigorosamente.
    definizionePolitica: [
        // { rangeMin: -1, rangeMax: -0.7, etichetta: "Estrema Sinistra Radicale", descrizione: "Le tue risposte suggeriscono una forte adesione a ideali di uguaglianza radicale, critica al capitalismo e un ruolo preponderante dello Stato nell'economia e nel sociale." },
        // { rangeMin: -0.69, rangeMax: -0.3, etichetta: "Sinistra Progressista", descrizione: "Mostri una chiara preferenza per politiche progressiste, giustizia sociale, diritti civili estesi e un intervento statale a tutela dei più deboli e dell'ambiente." },
        // { rangeMin: -0.29, rangeMax: 0.29, etichetta: "Centrista / Moderato", descrizione: "Le tue posizioni sono equilibrate, tendendo a cercare un compromesso tra intervento statale e libertà individuali, con un approccio pragmatico ai problemi." },
        // { rangeMin: 0.3, rangeMax: 0.69, etichetta: "Centro-Destra Liberale", descrizione: "Privilegi la libertà individuale, l'iniziativa privata e un ruolo dello Stato più limitato nell'economia, pur mantenendo attenzione al welfare e ai valori tradizionali moderati." },
        // { rangeMin: 0.7, rangeMax: 1, etichetta: "Destra Conservatrice / Sovranista", descrizione: "Le tue idee sono orientate verso la difesa dei valori tradizionali, la sovranità nazionale, un forte controllo sull'immigrazione e una visione liberista in economia." }
        // Semplifichiamo ulteriormente per ora, basandoci più sul partito più vicino
    ],

    // Funzione per generare le posizioni dei partiti (ILLUSTRATIVE E DA SOSTITUIRE)
    generaPosizioniPartiti: function() {
        const tuttiPartiti = this.partitiLunga; // Usa la lista completa
        const tutteDomande = this.domandeLunga;

        tuttiPartiti.forEach(partito => {
            partito.posizioni = {};
            tutteDomande.forEach(domanda => {
                let valore = 0; // Neutrale di default

                // Logica MOLTO SEMPLIFICATA e STEREOTIPATA per assegnare posizioni
                // Questa è la parte che NECESSITA di ricerca e input reali
                switch (partito.areaPolitica) {
                    case "destra-estrema":
                        if (["Economia", "Fisco"].includes(domanda.tema) && (domanda.testo.includes("ridurre tasse imprese") || domanda.testo.includes("austerità"))) valore = 1;
                        else if (domanda.tema === "Lavoro" && domanda.testo.includes("salario minimo")) valore = -1;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("restrittive") || domanda.testo.includes("Ius Soli"))) valore = domanda.testo.includes("restrittive") ? 1 : -1;
                        else if (domanda.tema === "Diritti Civili" && (domanda.testo.includes("eutanasia") || domanda.testo.includes("matrimonio egualitario") || domanda.testo.includes("cannabis"))) valore = -1;
                        else if (domanda.tema === "Valori" && domanda.testo.includes("famiglia tradizionale")) valore = 1;
                        else if (domanda.tema === "UE" && (domanda.testo.includes("uscire dall'Euro") || domanda.testo.includes("recuperare sovranità"))) valore = 1;
                        else if (domanda.tema === "Difesa" && domanda.testo.includes("aumentare spese militari")) valore = 0.5;
                        else if (domanda.tema === "Laicità" && domanda.testo.includes("religione cattolica")) valore = 0.5;
                        else valore = (Math.random() > 0.7) ? (Math.random() > 0.5 ? 1 : -1) : (Math.random() * 2 - 1) * 0.5; // Più polarizzato
                        break;
                    case "destra":
                        if (["Economia", "Fisco"].includes(domanda.tema) && (domanda.testo.includes("ridurre tasse imprese") || domanda.testo.includes("austerità"))) valore = 1;
                        else if (domanda.tema === "Lavoro" && domanda.testo.includes("salario minimo")) valore = -0.5;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("restrittive"))) valore = 1;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("Ius Soli") || domanda.testo.includes("accoglienza"))) valore = -1;
                        else if (domanda.tema === "Diritti Civili" && (domanda.testo.includes("eutanasia") || domanda.testo.includes("matrimonio egualitario"))) valore = -0.5;
                        else if (domanda.tema === "Diritti Civili" && domanda.testo.includes("cannabis")) valore = -1;
                        else if (domanda.tema === "Valori" && domanda.testo.includes("famiglia tradizionale")) valore = 1;
                        else if (domanda.tema === "UE" && domanda.testo.includes("recuperare sovranità")) valore = 0.5;
                        else if (domanda.tema === "Difesa" && domanda.testo.includes("aumentare spese militari")) valore = 1;
                        else if (domanda.tema === "Giustizia" && domanda.testo.includes("pene inasprite")) valore = 1;
                        else if (domanda.id === "q15" ) valore = partito.id === 'lega' ? 1 : 0.5; // Nucleare (Lega più possibilista di altri a destra)
                        else if (domanda.id === "q30" ) valore = 1; // Grandi opere
                        else if (domanda.tema === "Laicità" && domanda.testo.includes("religione cattolica")) valore = 0.5;
                        else valore = (Math.random() * 1.5 - 0.5); // Tendenza a destra
                        break;
                    case "centro-destra":
                        if (["Economia", "Fisco"].includes(domanda.tema) && (domanda.testo.includes("ridurre tasse imprese"))) valore = 0.5;
                        else if (domanda.tema === "Lavoro" && domanda.testo.includes("salario minimo")) valore = 0;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("restrittive"))) valore = 0.5;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("Ius Soli") || domanda.testo.includes("accoglienza"))) valore = -0.5;
                        else if (domanda.tema === "Diritti Civili" && (domanda.testo.includes("eutanasia") || domanda.testo.includes("matrimonio egualitario"))) valore = -0.5;
                        else if (domanda.tema === "Valori" && domanda.testo.includes("famiglia tradizionale")) valore = 0.5;
                        else if (domanda.tema === "UE" && domanda.testo.includes("integrazione politica")) valore = 0.5;
                        else if (domanda.tema === "Difesa" && domanda.testo.includes("aumentare spese militari")) valore = 0.5;
                        else if (domanda.id === "q15" ) valore = 0.5; // Nucleare
                        else if (domanda.id === "q30" ) valore = 0.5; // Grandi opere
                        else if (domanda.tema === "Laicità" && domanda.testo.includes("religione cattolica")) valore = 0;
                        else valore = (Math.random() * 1 - 0.25); // Leggera tendenza a destra
                        break;
                    case "centro":
                        if (["Economia", "Fisco"].includes(domanda.tema) && (domanda.testo.includes("ridurre tasse imprese"))) valore = 0.5;
                        else if (domanda.tema === "Lavoro" && domanda.testo.includes("salario minimo")) valore = 0.5;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("restrittive"))) valore = 0;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("Ius Soli") || domanda.testo.includes("accoglienza"))) valore = 0.5;
                        else if (domanda.tema === "Diritti Civili" && (domanda.testo.includes("eutanasia") || domanda.testo.includes("matrimonio egualitario") || domanda.testo.includes("cannabis"))) valore = (partito.id === 'piueuropa' || partito.id === 'pr') ? 1 : 0.5;
                        else if (domanda.tema === "Valori" && domanda.testo.includes("famiglia tradizionale")) valore = 0;
                        else if (domanda.tema === "UE" && domanda.testo.includes("integrazione politica")) valore = 1;
                        else if (domanda.id === "q15" ) valore = 0; // Nucleare (divisi)
                        else if (domanda.id === "q30" ) valore = 0.5; // Grandi opere
                        else if (domanda.tema === "Laicità" && domanda.testo.includes("religione cattolica")) valore = -0.5;
                        else valore = (Math.random() * 1 - 0.5); // Centrato
                        break;
                    case "centro-sinistra":
                        if (["Economia", "Fisco"].includes(domanda.tema) && (domanda.testo.includes("ridurre tasse imprese"))) valore = -0.5;
                        else if (domanda.tema === "Lavoro" && domanda.testo.includes("salario minimo")) valore = 1;
                        else if (domanda.tema === "Economia" && domanda.testo.includes("Stato intervenire")) valore = 0.5;
                        else if (domanda.tema === "Fisco" && domanda.testo.includes("tassazione grandi ricchezze")) valore = 0.5;
                        else if (domanda.tema === "Sanità" && domanda.testo.includes("pubblico e universale")) valore = 1;
                        else if (domanda.tema === "Welfare" && domanda.testo.includes("reddito di cittadinanza")) valore = (partito.id === 'm5s' ? 1 : 0.5);
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("restrittive"))) valore = -0.5;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("Ius Soli") || domanda.testo.includes("accoglienza"))) valore = 1;
                        else if (domanda.tema === "Diritti Civili" && (domanda.testo.includes("eutanasia") || domanda.testo.includes("matrimonio egualitario"))) valore = 1;
                        else if (domanda.tema === "Diritti Civili" && domanda.testo.includes("cannabis")) valore = 0.5;
                        else if (domanda.tema === "Ambiente" && domanda.testo.includes("energie rinnovabili")) valore = 1;
                        else if (domanda.id === "q15" ) valore = -1; // No Nucleare
                        else if (domanda.tema === "UE" && domanda.testo.includes("integrazione politica")) valore = 1;
                        else if (domanda.tema === "Laicità" && domanda.testo.includes("religione cattolica")) valore = -1;
                        else if (domanda.id === 'm5s' && domanda.id === 'q30') valore = -0.5; // M5S storicamente più cauto su alcune grandi opere
                        else valore = (Math.random() * -1.5 + 0.5); // Tendenza a sinistra
                        break;
                    case "sinistra":
                        if (["Economia", "Fisco"].includes(domanda.tema) && (domanda.testo.includes("ridurre tasse imprese"))) valore = -1;
                        else if (domanda.tema === "Lavoro" && domanda.testo.includes("salario minimo")) valore = 1;
                        else if (domanda.tema === "Economia" && domanda.testo.includes("Stato intervenire")) valore = 1;
                        else if (domanda.tema === "Fisco" && domanda.testo.includes("tassazione grandi ricchezze")) valore = 1;
                        else if (domanda.tema === "Sanità" && domanda.testo.includes("pubblico e universale")) valore = 1;
                        else if (domanda.tema === "Welfare" && domanda.testo.includes("reddito di cittadinanza")) valore = 1;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("restrittive"))) valore = -1;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("Ius Soli") || domanda.testo.includes("accoglienza"))) valore = 1;
                        else if (domanda.tema === "Diritti Civili" && (domanda.testo.includes("eutanasia") || domanda.testo.includes("matrimonio egualitario") || domanda.testo.includes("cannabis"))) valore = 1;
                        else if (domanda.tema === "Ambiente" && (domanda.testo.includes("energie rinnovabili") || domanda.testo.includes("politiche ambientali priorità"))) valore = 1;
                        else if (domanda.id === "q15" ) valore = -1; // No Nucleare
                        else if (domanda.tema === "UE" && domanda.testo.includes("uscire dall'Euro")) valore = -0.5; // Alcuni critici ma non necessariamente per l'uscita
                        else if (domanda.tema === "Difesa" && domanda.testo.includes("aumentare spese militari")) valore = -1;
                        else if (domanda.tema === "Politica Estera" && domanda.testo.includes("sostenere Ucraina militarmente")) valore = -1;
                        else if (domanda.tema === "Laicità" && domanda.testo.includes("religione cattolica")) valore = -1;
                        else if (domanda.id === "q30" ) valore = -1; // Grandi opere (spesso critici)
                        else valore = (Math.random() * -1.5 + 0.25); // Forte tendenza a sinistra
                        break;
                    case "sinistra-estrema":
                        if (["Economia", "Fisco"].includes(domanda.tema) && (domanda.testo.includes("ridurre tasse imprese") || domanda.testo.includes("austerità"))) valore = -1;
                        else if (domanda.tema === "Lavoro" && domanda.testo.includes("salario minimo")) valore = 1;
                        else if (domanda.tema === "Economia" && domanda.testo.includes("Stato intervenire")) valore = 1;
                        else if (domanda.tema === "Fisco" && domanda.testo.includes("tassazione grandi ricchezze")) valore = 1;
                        else if (domanda.tema === "Immigrazione" && (domanda.testo.includes("restrittive"))) valore = -1;
                        else if (domanda.tema === "Diritti Civili" && (domanda.testo.includes("eutanasia") || domanda.testo.includes("matrimonio egualitario") || domanda.testo.includes("cannabis"))) valore = 1;
                        else if (domanda.tema === "UE" && (domanda.testo.includes("uscire dall'Euro") || domanda.testo.includes("recuperare sovranità"))) valore = (partito.id === 'pci' || partito.id === 'pap' ? 1 : 0.5); // Più euroscettici
                        else if (domanda.tema === "Difesa" && domanda.testo.includes("aumentare spese militari")) valore = -1;
                        else if (domanda.tema === "Politica Estera" && domanda.testo.includes("sostenere Ucraina militarmente")) valore = -1;
                        else if (domanda.tema === "Laicità" && domanda.testo.includes("religione cattolica")) valore = -1;
                        else valore = (Math.random() < 0.7) ? (Math.random() < 0.5 ? -1 : 1) : (Math.random() * -2 + 1) * 0.5; // Più polarizzato a sinistra
                        break;
                    case "autonomista": // Posizioni variabili, spesso pragmatiche + focus su autonomia
                        if(domanda.id === 'q31') valore = 1; // Pro autonomia differenziata
                        else valore = Math.random() * 1 - 0.5; // Altrimenti tendenzialmente centristi o specifici per territorio
                        break;
                    case "tematico": // Es. Partito Animalista
                        if (domanda.tema === "Ambiente" && domanda.testo.includes("caccia")) valore = -1;
                        else if (domanda.tema === "Agricoltura" && domanda.testo.includes("intensiva")) valore = -1;
                        else valore = 0; // Neutrale su molti altri temi o non specificato
                        break;
                    case "trasversale": // Es. M5S
                        if (domanda.tema === "Welfare" && domanda.testo.includes("reddito di cittadinanza")) valore = 1;
                        else if (domanda.tema === "Ambiente") valore = 0.8; // Forte accento
                        else if (domanda.tema === "Giustizia" && domanda.testo.includes("riformare")) valore = 0.5;
                        else if (domanda.id === "q26") valore = 1; // Riduzione parlamentari (storico)
                        else if (domanda.id === "q32") valore = 0.5; // Regolamentare piattaforme
                        else if (domanda.id === "q15") valore = -1; // No nucleare
                        else if (domanda.id === "q30" && partito.id === 'm5s') valore = -0.5; // M5S storicamente più cauto su alcune grandi opere
                        else valore = Math.random() * 1 - 0.5; // Posizioni variegate
                        break;
                    default: // "altro", "trasversale-critico"
                        valore = Math.random() * 2 - 1; // Casuale per altri
                }
                // Arrotonda ai valori discreti per coerenza con le opzioni di risposta
                if (valore > 0.75) partito.posizioni[domanda.id] = 1;
                else if (valore > 0.25) partito.posizioni[domanda.id] = 0.5;
                else if (valore < -0.75) partito.posizioni[domanda.id] = -1;
                else if (valore < -0.25) partito.posizioni[domanda.id] = -0.5;
                else partito.posizioni[domanda.id] = 0;
            });
        });
    }
};

// Genera le posizioni fittizie al caricamento dello script
partitiDB.generaPosizioniPartiti();