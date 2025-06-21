// File: js/database.js

const partitiDB = {
    partitiLunga: [
        // Estrema Sinistra
        { id: "pap", nome: "Potere al Popolo!", logo: "img/pap.png", short_desc_area: "Sinistra Radicale Antagonista", areaPolitica: "estrema-sinistra-antagonista", rilevanza: 4, posizioni: {} },
        { id: "prc", nome: "Rifondazione Comunista", logo: "img/rifondazionecomunista.png", short_desc_area: "Sinistra Comunista", areaPolitica: "sinistra-radicale-comunista", rilevanza: 4, posizioni: {} },
        { id: "pci", nome: "Partito Comunista Italiano", logo: "img/partitocomunistaitaliano.png", short_desc_area: "Comunista ML", areaPolitica: "estrema-sinistra-comunista-ml", rilevanza: 3, posizioni: {} },
        { id: "pcl", nome: "Partito Comunista Lavoratori", logo: "img/pcl.png", short_desc_area: "Comunista Trotskista", areaPolitica: "estrema-sinistra-trotskista", rilevanza: 2, posizioni: {} },
        { id: "sa", nome: "Sinistra Anticapitalista", logo: "img/sinistra_anticapitalista.png", short_desc_area: "Sinistra Anticapitalista", areaPolitica: "estrema-sinistra-anticapitalista", rilevanza: 2, posizioni: {} },
        { id: "up", nome: "Unione Popolare", logo: "img/up.png", short_desc_area: "Coalizione Sinistra Radicale", areaPolitica: "sinistra-radicale-coalizione", rilevanza: 5, posizioni: {} },

        // Sinistra
        { id: "avs", nome: "Alleanza Verdi e Sinistra", logo: "img/avs.png", short_desc_area: "Sinistra Ecologista", areaPolitica: "sinistra-ecologista", rilevanza: 7, posizioni: {} },
        { id: "possibile", nome: "Possibile", logo: "img/possibile.png", short_desc_area: "Sinistra Progressista Diritti", areaPolitica: "sinistra-progressista", rilevanza: 3, posizioni: {} },

        // Centro-Sinistra
        { id: "pd", nome: "Partito Democratico", logo: "img/pd.png", short_desc_area: "Centro-Sinistra Progressista", areaPolitica: "centro-sinistra-progressista", rilevanza: 10, posizioni: {} },
        { id: "m5s", nome: "Movimento 5 Stelle", logo: "img/m5s.png", short_desc_area: "Populista Progressista", areaPolitica: "trasversale-progressista", rilevanza: 8, posizioni: {} },
        { id: "demos", nome: "Democrazia Solidale - Demos", logo: "img/demos.png", short_desc_area: "Centro-Sinistra Cristiano-Sociale", areaPolitica: "centro-sinistra-cristiano-sociale", rilevanza: 3, posizioni: {} },
        { id: "psi", nome: "Partito Socialista Italiano", logo: "img/psi.png", short_desc_area: "Socialista Democratico", areaPolitica: "centro-sinistra-socialista", rilevanza: 3, posizioni: {} },
        { id: "volt", nome: "Volt Italia", logo: "img/volt.png", short_desc_area: "Pan-Europeo Progressista", areaPolitica: "centro-progressista-europeista", rilevanza: 4, posizioni: {} },

        // Centro
        { id: "azione", nome: "Azione", logo: "img/azione.png", short_desc_area: "Centro Liberale Riformista", areaPolitica: "centro-liberale-riformista", rilevanza: 7, posizioni: {} },
        { id: "iv", nome: "Italia Viva", logo: "img/italia_viva.png", short_desc_area: "Centro Liberale Europeista", areaPolitica: "centro-liberale-riformista", rilevanza: 7, posizioni: {} },
        { id: "piueuropa", nome: "+Europa", logo: "img/piueuropa.png", short_desc_area: "Radicale Liberale Europeista", areaPolitica: "centro-radicale-europeista", rilevanza: 6, posizioni: {} },
        { id: "pr", nome: "Partito Radicale", logo: "img/partitoradicale.png", short_desc_area: "Libertario Diritti Civili", areaPolitica: "radicale-libertario", rilevanza: 3, posizioni: {} },
        { id: "ap_b", nome: "Alternativa Popolare", logo: "img/ap_b.png", short_desc_area: "Centro Popolare Pragmatico", areaPolitica: "centro-popolare", rilevanza: 3, posizioni: {} },
        { id: "ndc_m", nome: "Noi di Centro", logo: "img/ndc_m.png", short_desc_area: "Centro Popolare Meridionalista", areaPolitica: "centro-popolare", rilevanza: 2, posizioni: {} },

        // Centro-Destra
        { id: "fi", nome: "Forza Italia", logo: "img/fi.png", short_desc_area: "Centro-Destra Liberale Popolare", areaPolitica: "centro-destra-liberale", rilevanza: 8, posizioni: {} },
        { id: "nm", nome: "Noi Moderati", logo: "img/nm.png", short_desc_area: "Centro-Destra Moderato Cristiano", areaPolitica: "centro-destra-moderato", rilevanza: 6, posizioni: {} },
        { id: "udc", nome: "Unione di Centro", logo: "img/udc.png", short_desc_area: "Centro Cristiano Democratico", areaPolitica: "centro-cristiano", rilevanza: 4, posizioni: {} },
        { id: "ci", nome: "Coraggio Italia", logo: "img/coraggio_italia.png", short_desc_area: "Centro-Destra Liberale Conservatore", areaPolitica: "centro-destra-liberale", rilevanza: 3, posizioni: {} },


        // Destra
        { id: "fdi", nome: "Fratelli d'Italia", logo: "img/fdi.png", short_desc_area: "Destra Conservatrice Nazionale", areaPolitica: "destra-conservatrice", rilevanza: 10, posizioni: {} },
        { id: "lega", nome: "Lega Salvini Premier", logo: "img/lega.png", short_desc_area: "Destra Populista Sovranista", areaPolitica: "destra-populista", rilevanza: 9, posizioni: {} },
        { id: "pdf", nome: "Il Popolo della Famiglia", logo: "img/pdf.png", short_desc_area: "Conservatorismo Sociale Cristiano", areaPolitica: "destra-valoriale", rilevanza: 3, posizioni: {} },

        // Estrema Destra / Sovranisti Radicali
        { id: "italexit_p", nome: "Italexit", logo: "img/italexit.png", short_desc_area: "Sovranismo Radicale Euroscettico", areaPolitica: "destra-estrema-sovranista", rilevanza: 5, posizioni: {} },
        { id: "casapound", nome: "CasaPound Italia", logo: "img/casapound.png", short_desc_area: "Estrema Destra Nazional-Rivoluzionaria", areaPolitica: "estrema-destra-neofascista", rilevanza: 2, posizioni: {} },
        { id: "fn", nome: "Forza Nuova", logo: "img/fn.png", short_desc_area: "Estrema Destra Nazional-Tradizionalista", areaPolitica: "estrema-destra-tradizionalista", rilevanza: 2, posizioni: {} },
        { id: "msi_ft", nome: "Movimento Sociale Fiamma Tricolore", logo: "img/msi_ft.png", short_desc_area: "Destra Sociale Radicale", areaPolitica: "estrema-destra-sociale", rilevanza: 1, posizioni: {} },
        { id: "ri", nome: "Riconquistare l'Italia (FSI)", logo: "img/fsi.png", short_desc_area: "Sovranismo Costituzionale", areaPolitica: "destra-sovranista-critica", rilevanza: 3, posizioni: {} },

        // Autonomisti / Regionalisti / Tematici
        { id: "svp", nome: "Südtiroler Volkspartei", logo: "img/svp.png", short_desc_area: "Autonomista Sudtirolese", areaPolitica: "autonomista-centro", rilevanza: 4, posizioni: {} },
        { id: "scn", nome: "Sud chiama Nord", logo: "img/scn.png", short_desc_area: "Autonomista Meridionalista", areaPolitica: "autonomista-meridionalista", rilevanza: 4, posizioni: {} },
        { id: "pa", nome: "Partito Animalista Italiano", logo: "img/pa.png", short_desc_area: "Tutela Diritti Animali", areaPolitica: "tematico-animalista", rilevanza: 2, posizioni: {} },
        { id: "pp", nome: "Partito Pirata", logo: "img/pp.png", short_desc_area: "Diritti Digitali Libertà Rete", areaPolitica: "tematico-digitale", rilevanza: 2, posizioni: {} },
        { id: "gn", nome: "Grande Nord", logo: "img/grande_nord.png", short_desc_area: "Autonomismo Federalista Nord", areaPolitica: "autonomista-nord", rilevanza: 1, posizioni: {} },
        { id: "mpa", nome: "Movimento per le Autonomie", logo: "img/mpa.png", short_desc_area: "Autonomismo Siciliano", areaPolitica: "autonomista-meridionalista", rilevanza: 1, posizioni: {} },
        { id: "maie", nome: "Movimento Associativo Italiani Estero", logo: "img/maie.png", short_desc_area: "Tutela Italiani all'Estero", areaPolitica: "tematico-estero", rilevanza: 2, posizioni: {} },
        { id: "isp", nome: "Italia Sovrana e Popolare", logo: "img/isp.png", short_desc_area: "Coalizione Sovranista Eterogenea", areaPolitica: "trasversale-sovranista-critico", rilevanza: 2, posizioni: {} },
    ],

    get partitiBreve() {
        const idsBreveSelezionati = [
            'fdi', 'pd', 'm5s', 'lega', 'fi', 'azione', 'iv', 'avs', 'piueuropa', 'nm',
            'up', 'pap', 'prc', 'volt', 'svp', 'scn', 'pdf', 'italexit_p', 'demos', 'psi',
            'possibile', 'pr', 'casapound', 'fn', 'pa', 'pci', 'ndc_m', 'ri', 'ci', 'udc',
            'ap_b', 'maie', 'isp', 'pp', 'gn'
        ];
        return this.partitiLunga.filter(p => idsBreveSelezionati.includes(p.id));
    },

    domandeLunga: [
        // Economia e Fisco (EF)
        { id: "ef01", testo: "È necessario introdurre una Flat Tax (tassa piatta) per famiglie e imprese, sostituendo l'attuale sistema IRPEF progressivo?", tema: "Fisco", polaritaAsseEco: 1 },
        { id: "ef02", testo: "Si dovrebbe reintrodurre una forma di patrimoniale progressiva sui grandi patrimoni (oltre una certa soglia elevata)?", tema: "Fisco", polaritaAsseEco: -1 },
        { id: "ef03", testo: "Il cuneo fiscale va ridotto prioritariamente a beneficio dei lavoratori (aumentando il netto in busta paga) o delle imprese (riducendo il costo del lavoro)?", tema: "Lavoro", polaritaAsseEco: 0 },
        { id: "ef04", testo: "Lo Stato dovrebbe intervenire attivamente nell'economia attraverso nazionalizzazioni di settori strategici (es. energia, telecomunicazioni, banche)?", tema: "Intervento Statale", polaritaAsseEco: -1 },
        { id: "ef05", testo: "Le grandi opere infrastrutturali (es. TAV, Ponte sullo Stretto) sono una priorità per lo sviluppo, anche con impatti ambientali significativi?", tema: "Infrastrutture", polaritaAsseEco: 1, polaritaAsseAmb: -0.5 },
        { id: "ef06", testo: "Il debito pubblico italiano va ridotto drasticamente, anche attraverso tagli significativi alla spesa pubblica e politiche di austerità?", tema: "Debito Pubblico", polaritaAsseEco: 1 },
        { id: "ef07", testo: "Bisogna introdurre un salario minimo legale orario a livello nazionale, valido per tutti i settori?", tema: "Lavoro", polaritaAsseEco: -1 },
        { id: "ef08", testo: "Le privatizzazioni di aziende e servizi pubblici (es. acqua, trasporti locali) dovrebbero continuare o essere fermate/invertite?", tema: "Privatizzazioni", polaritaAsseEco: 1 },
        { id: "ef09", testo: "Lo Stato dovrebbe limitare o controllare i prezzi dei beni di prima necessità e dell'energia in periodi di forte inflazione?", tema: "Controllo Prezzi", polaritaAsseEco: -1 },
        { id: "ef10", testo: "È necessario abolire l'IRAP (Imposta Regionale sulle Attività Produttive) per ridurre la pressione fiscale sulle imprese?", tema: "Fisco", polaritaAsseEco: 1 },
        { id: "ef11", testo: "Gli extraprofitti delle aziende (es. energetiche, banche) in periodi di crisi dovrebbero essere tassati pesantemente per finanziare aiuti a famiglie e imprese in difficoltà?", tema: "Fisco", polaritaAsseEco: -1 },
        { id: "ef12", testo: "La settimana lavorativa standard dovrebbe essere ridotta a 4 giorni (o 32-35 ore) a parità di salario per migliorare il benessere e la produttività?", tema: "Lavoro", polaritaAsseEco: -1, polaritaAsseSoc: -0.5 },
        { id: "ef13", testo: "Il Superbonus edilizio (e bonus simili) è stato uno strumento efficace da mantenere/replicare o una misura troppo costosa e iniqua per le casse dello Stato?", tema: "Spesa Pubblica", polaritaAsseEco: -1 },
        { id: "ef14", testo: "Per contrastare l'evasione fiscale, è necessario potenziare la tracciabilità dei pagamenti (limitando il contante) e il data mining dell'Agenzia delle Entrate?", tema: "Fisco", polaritaAsseEco: -1, polaritaAsseSoc: 0.5 },
        { id: "ef15", testo: "Il sistema capitalistico basato sul libero mercato è il migliore per generare benessere o necessita di profonde correzioni per ridurre disuguaglianze e impatti ambientali?", tema: "Modello Economico", polaritaAsseEco: 0, polaritaAsseSoc: 0, polaritaAsseAmb: 0 },

        // Welfare e Sanità (WS)
        { id: "ws01", testo: "Il Reddito di Cittadinanza (o misure simili di sostegno universale) va mantenuto e potenziato, o abolito/drasticamente riformato perché disincentiva il lavoro?", tema: "Welfare", polaritaAsseEco: -1 },
        { id: "ws02", testo: "Il sistema sanitario nazionale deve rimanere prevalentemente pubblico e universale, o bisogna incentivare maggiormente il ruolo dei privati e delle assicurazioni sanitarie?", tema: "Sanità", polaritaAsseEco: -1 },
        { id: "ws03", testo: "L'età pensionabile dovrebbe essere ulteriormente abbassata o resa più flessibile (es. Quota 41 per tutti), anche a costo di maggiore spesa pubblica?", tema: "Pensioni", polaritaAsseEco: -1 },
        { id: "ws04", testo: "Lo Stato dovrebbe fornire gratuitamente asili nido e scuole dell'infanzia a tutte le famiglie per sostenere la natalità e l'occupazione femminile?", tema: "Famiglia e Natalità", polaritaAsseEco: -1, polaritaAsseSoc: -0.5 },
        { id: "ws05", testo: "Le politiche abitative dovrebbero prevedere un forte investimento pubblico in case popolari e calmieramento degli affitti nelle grandi città?", tema: "Casa", polaritaAsseEco: -1 },
        { id: "ws06", testo: "La spesa per il welfare (pensioni, sanità, ammortizzatori sociali) è eccessiva e va contenuta per liberare risorse per investimenti e riduzione tasse?", tema: "Spesa Pubblica", polaritaAsseEco: 1 },
        { id: "ws07", testo: "L'autonomia differenziata in materia di sanità rischia di creare cittadini di Serie A e Serie B o è un'opportunità per migliorare l'efficienza?", tema: "Sanità", polaritaAsseSoc: 1, polaritaAsseEur: 0 },

        // Diritti Civili e Sociali (DC)
        { id: "dc01", testo: "Si dovrebbe legalizzare l'eutanasia e il suicidio medicalmente assistito per malati terminali o con sofferenze intollerabili?", tema: "Fine Vita", polaritaAsseSoc: -1 },
        { id: "dc02", testo: "Il matrimonio dovrebbe essere esteso alle coppie dello stesso sesso, con pieni diritti e doveri equiparati a quello eterosessuale?", tema: "Diritti LGBTQ+", polaritaAsseSoc: -1 },
        { id: "dc03", testo: "Le coppie omosessuali dovrebbero avere il diritto di adottare bambini e accedere alla fecondazione assistita?", tema: "Diritti LGBTQ+", polaritaAsseSoc: -1 },
        { id: "dc04", testo: "La gestazione per altri (GPA o 'utero in affitto') dovrebbe essere legalizzata e regolamentata in Italia, o perseguita come reato universale?", tema: "Bioetica", polaritaAsseSoc: -1 },
        { id: "dc05", testo: "L'Italia dovrebbe facilitare l'acquisizione della cittadinanza per i minori stranieri nati o cresciuti nel Paese, ad esempio attraverso forme come lo Ius Soli o lo Ius Scholae/Culturae?", tema: "Cittadinanza", polaritaAsseSoc: -1 },
        { id: "dc06", testo: "La cannabis per uso ricreativo dovrebbe essere legalizzata e la sua produzione e vendita regolamentate dallo Stato?", tema: "Legalizzazioni", polaritaAsseSoc: -1 },
        { id: "dc07", testo: "È necessaria una legge specifica contro l'omotransfobia, la misoginia e l'abilismo, che preveda aggravanti di pena per i reati motivati da tali discriminazioni?", tema: "Antidiscriminazione", polaritaAsseSoc: -1 },
        { id: "dc08", testo: "La libertà di espressione online, anche per contenuti controversi o offensivi (ma non illegali), va difesa strenuamente o limitata per proteggere la sensibilità collettiva e prevenire abusi?", tema: "Libertà Online", polaritaAsseSoc: -1 },
        { id: "dc09", testo: "La legge 194 sull'interruzione volontaria di gravidanza va applicata integralmente, garantendo l'accesso ai servizi e contrastando l'obiezione di coscienza eccessiva?", tema: "Aborto", polaritaAsseSoc: -1 },
        { id: "dc10", testo: "Le quote di genere ('quote rosa') sono uno strumento necessario per garantire la parità di rappresentanza nelle istituzioni e nelle aziende, o sono una forma di discriminazione?", tema: "Parità di Genere", polaritaAsseSoc: -1 },
        { id: "dc11", testo: "L'esposizione di simboli religiosi (es. crocifisso) negli uffici pubblici e nelle scuole statali va mantenuta o rimossa in nome della laicità dello Stato?", tema: "Laicità e Simboli", polaritaAsseSoc: 1 },
        { id: "dc12", testo: "Il concetto di 'famiglia tradizionale' basata sul matrimonio tra uomo e donna deve essere il modello primario riconosciuto e sostenuto dallo Stato?", tema: "Modelli Familiari", polaritaAsseSoc: 1 },
        { id: "dc13", testo: "La sperimentazione animale per la ricerca scientifica e medica dovrebbe essere progressivamente vietata e sostituita con metodi alternativi, anche se ciò potrebbe rallentare alcune scoperte?", tema: "Sperimentazione Animale", polaritaAsseAmb: 1, polaritaAsseSoc: -0.5 },

        // Immigrazione e Sicurezza (IS)
        { id: "is01", testo: "L'Italia dovrebbe attuare una politica di maggiore chiusura delle frontiere, con respingimenti assistiti e accordi con Paesi terzi per bloccare i flussi migratori?", tema: "Immigrazione", polaritaAsseSoc: 1 },
        { id: "is02", testo: "Le ONG che effettuano soccorsi in mare vanno supportate e coordinate, o ostacolate e sottoposte a controlli più stringenti?", tema: "Immigrazione", polaritaAsseSoc: -1 },
        { id: "is03", testo: "L'integrazione degli immigrati regolari va promossa con investimenti in corsi di lingua, formazione e accesso ai servizi, o devono essere loro a farsi carico primariamente della propria integrazione?", tema: "Integrazione", polaritaAsseSoc: -1 },
        { id: "is04", testo: "Le pene per i reati (in particolare furti, rapine, spaccio) dovrebbero essere ulteriormente inasprite e la 'certezza della pena' garantita con carcerazione più frequente?", tema: "Giustizia e Pene", polaritaAsseSoc: 1 },
        { id: "is05", testo: "È necessario riformare il sistema giudiziario per accelerare i processi, anche introducendo una più netta separazione delle carriere tra giudici e pubblici ministeri?", tema: "Riforma Giustizia", polaritaAsseSoc: 1 },
        { id: "is06", testo: "Il possesso e l'uso di armi da fuoco per difesa personale dovrebbero essere ulteriormente facilitati per i cittadini incensurati?", tema: "Legittima Difesa", polaritaAsseSoc: 1 },
        { id: "is07", testo: "L'uso di sistemi di sorveglianza di massa (es. riconoscimento facciale) è giustificato per prevenire il crimine o rappresenta una minaccia inaccettabile per la privacy?", tema: "Sorveglianza e Privacy", polaritaAsseSoc: 1 },

        // Ambiente ed Energia (AE)
        { id: "ae01", testo: "L'Italia dovrebbe puntare sulla costruzione di nuove centrali nucleari di ultima generazione per garantire l'indipendenza energetica e ridurre le emissioni di CO2?", tema: "Energia Nucleare", polaritaAsseAmb: -1 },
        { id: "ae02", testo: "La transizione verso energie rinnovabili (solare, eolico) deve essere accelerata con massicci investimenti pubblici, anche superando vincoli paesaggistici locali?", tema: "Energie Rinnovabili", polaritaAsseAmb: 1 },
        { id: "ae03", testo: "È necessario introdurre una 'carbon tax' significativa sui prodotti e servizi in base alle loro emissioni di CO2, anche se ciò comporta un aumento dei costi per consumatori e imprese?", tema: "Tassazione Ambientale", polaritaAsseAmb: 1, polaritaAsseEco: -0.5 },
        { id: "ae04", testo: "L'esplorazione e l'estrazione di idrocarburi (gas e petrolio) nei mari italiani e sul territorio nazionale dovrebbero essere completamente bloccate o incentivate per ridurre la dipendenza estera?", tema: "Fonti Fossili Nazionali", polaritaAsseAmb: -1 },
        { id: "ae05", testo: "Le politiche di tutela ambientale (es. stop al consumo di suolo, protezione biodiversità, limiti a pesticidi) devono avere la priorità assoluta, anche se limitano lo sviluppo economico e agricolo tradizionale?", tema: "Priorità Ambientale", polaritaAsseAmb: 1, polaritaAsseEco: -0.5 },
        { id: "ae06", testo: "L'uso di Organismi Geneticamente Modificati (OGM) in agricoltura dovrebbe essere permesso e incentivato in Italia per aumentare la produttività e la resilienza delle colture?", tema: "OGM", polaritaAsseAmb: -1 },
        { id: "ae07", testo: "La caccia, anche quella tradizionale e regolamentata, dovrebbe essere progressivamente limitata o vietata per una maggiore tutela della fauna selvatica?", tema: "Caccia", polaritaAsseAmb: 1 },
        { id: "ae08", testo: "Bisogna limitare drasticamente l'uso della plastica monouso e promuovere attivamente l'economia circolare, anche con disincentivi per i prodotti non riciclabili?", tema: "Rifiuti e Plastica", polaritaAsseAmb: 1 },
        { id: "ae09", testo: "Lo sviluppo di allevamenti intensivi dovrebbe essere disincentivato a favore di metodi più estensivi e rispettosi del benessere animale, anche se ciò comporta costi maggiori?", tema: "Allevamenti Intensivi", polaritaAsseAmb: 1, polaritaAsseEco: -0.5 },
        { id: "ae10", testo: "Il trasporto privato motorizzato nelle città va fortemente disincentivato (es. ZTL estese, tariffe elevate per parcheggi) a favore di trasporto pubblico, mobilità dolce e car sharing?", tema: "Mobilità Urbana", polaritaAsseAmb: 1, polaritaAsseSoc: -0.5 },

        // Istruzione, Cultura, Ricerca (IC)
        { id: "ic01", testo: "Lo Stato dovrebbe aumentare significativamente i finanziamenti per l'istruzione pubblica (scuola e università), migliorando stipendi docenti e infrastrutture, anche a costo di maggiore spesa?", tema: "Istruzione Pubblica", polaritaAsseEco: -1 },
        { id: "ic02", testo: "Le scuole private paritarie dovrebbero ricevere finanziamenti pubblici equiparabili a quelli delle scuole statali, in nome della libertà di scelta educativa?", tema: "Scuole Paritarie", polaritaAsseEco: 1 },
        { id: "ic03", testo: "L'accesso all'università dovrebbe essere basato su test selettivi più stringenti per valorizzare il merito, o rimanere più aperto possibile con supporti per gli studenti meritevoli ma bisognosi?", tema: "Accesso Università", polaritaAsseSoc: 0 },
        { id: "ic04", testo: "La ricerca scientifica di base e applicata dovrebbe ricevere un forte incremento di fondi pubblici, con maggiore autonomia per i ricercatori?", tema: "Ricerca Scientifica", polaritaAsseEco: -1 },
        { id: "ic05", testo: "È importante difendere e promuovere attivamente l'identità culturale italiana e le tradizioni nazionali, anche nelle scuole, rispetto a influenze culturali percepite come estranee?", tema: "Identità Culturale", polaritaAsseSoc: 1 },

        // Politica Estera, Difesa, UE (PE)
        { id: "pe01", testo: "L'Italia dovrebbe cedere ulteriori quote di sovranità all'Unione Europea per costruire gli 'Stati Uniti d'Europa' con un governo federale e un esercito comune?", tema: "Integrazione UE", polaritaAsseEur: 1 },
        { id: "pe02", testo: "L'Italia dovrebbe rinegoziare radicalmente i trattati europei per recuperare sovranità nazionale, fino a considerare l'uscita dall'Euro o dall'UE?", tema: "Sovranità vs UE", polaritaAsseEur: -1 },
        { id: "pe03", testo: "L'Italia dovrebbe aumentare le proprie spese militari per raggiungere o superare il 2% del PIL, come richiesto dalla NATO, e partecipare attivamente a missioni militari internazionali?", tema: "Spese Militari e NATO", polaritaAsseEur: 1 },
        { id: "pe04", testo: "Nel conflitto Russo-Ucraino, l'Italia dovrebbe continuare a fornire supporto militare ed economico all'Ucraina, o promuovere una neutralità attiva e spingere per negoziati immediati anche a costo di concessioni territoriali da parte di Kiev?", tema: "Conflitto Ucraina", polaritaAsseEur: 1 },
        { id: "pe05", testo: "L'Italia dovrebbe riconoscere formalmente lo Stato di Palestina e sostenere sanzioni internazionali contro Israele per le sue politiche nei territori occupati?", tema: "Questione Palestinese", polaritaAsseEur: -0.5, polaritaAsseSoc: -1 },
        { id: "pe06", testo: "Il Patto di Stabilità e Crescita europeo (e le sue riforme) va rispettato rigorosamente per garantire la stabilità finanziaria, o va contestato se impone vincoli eccessivi alla spesa per investimenti e welfare?", tema: "Patto di Stabilità UE", polaritaAsseEur: -1 },
        { id: "pe07", testo: "L'Italia dovrebbe opporsi all'allargamento dell'UE a nuovi Paesi (es. Balcani, Ucraina) se ciò comporta oneri economici eccessivi o compromette gli equilibri interni all'Unione?", tema: "Allargamento UE", polaritaAsseEur: -1 },
        { id: "pe08", testo: "L'Italia dovrebbe rafforzare i legami commerciali e politici con potenze emergenti come la Cina, anche a costo di tensioni con alleati tradizionali come gli USA?", tema: "Geopolitica Globale", polaritaAsseEur: 0 },

        // Riforme Istituzionali e Democrazia (RI)
        { id: "ri01", testo: "L'Italia dovrebbe adottare una riforma costituzionale per l'elezione diretta del Presidente del Consiglio (Premierato) o del Presidente della Repubblica (Presidenzialismo)?", tema: "Forma di Governo", polaritaAsseSoc: 1 },
        { id: "ri02", testo: "L'autonomia differenziata, che permette alle Regioni di gestire più materie e risorse, va attuata pienamente o rischia di aumentare le disuguaglianze territoriali e frammentare il Paese?", tema: "Autonomia Regionale", polaritaAsseSoc: 1 },
        { id: "ri03", testo: "Il sistema elettorale dovrebbe essere prevalentemente proporzionale per garantire la rappresentanza, o maggioritario per assicurare stabilità di governo?", tema: "Legge Elettorale", polaritaAsseSoc: 0 },
        { id: "ri04", testo: "Il finanziamento pubblico diretto ai partiti politici dovrebbe essere reintrodotto per garantirne l'indipendenza, o bisogna mantenere il sistema attuale basato su donazioni private e 2x1000?", tema: "Finanziamento Politica", polaritaAsseEco: -1 },
        { id: "ri05", testo: "Bisogna ridurre ulteriormente il numero dei parlamentari e i costi della politica, o l'attuale assetto è adeguato a garantire la rappresentatività?", tema: "Costi Politica", polaritaAsseSoc: 0 },
        { id: "ri06", testo: "L'introduzione di forme di democrazia diretta (es. referendum propositivi senza quorum, piattaforme di voto online per decisioni) rafforzerebbe la partecipazione o indebolirebbe le istituzioni rappresentative?", tema: "Democrazia Diretta", polaritaAsseSoc: -1 },
        { id: "ri07", testo: "La magistratura italiana gode di eccessiva autonomia e potere, necessitando di riforme che ne limitino l'influenza sulla politica, o la sua indipendenza va strenuamente difesa da ogni ingerenza?", tema: "Magistratura e Politica", polaritaAsseSoc: 1 },

        // Digitale, Innovazione (DI)
        { id: "di01", testo: "Lo sviluppo e l'uso dell'Intelligenza Artificiale (IA) vanno incentivati con investimenti e poche regole, o strettamente regolamentati per prevenirne i rischi?", tema: "Intelligenza Artificiale", polaritaAsseEco: 0, polaritaAsseSoc: 0 },
        { id: "di02", testo: "Le grandi piattaforme digitali (Big Tech) dovrebbero essere soggette a una tassazione specifica sui loro profitti (Web Tax) e a controlli più severi?", tema: "Regolamentazione Big Tech", polaritaAsseEco: -1, polaritaAsseSoc: 0.5 },
        { id: "di03", testo: "Lo Stato dovrebbe garantire un'identità digitale unica e sicura a tutti i cittadini, promuovendone l'uso per l'accesso ai servizi?", tema: "Identità Digitale", polaritaAsseEco: 0, polaritaAsseSoc: 0 },
        { id: "di04", testo: "La protezione della proprietà intellettuale (copyright, brevetti) va rafforzata per incentivare la creatività e l'innovazione, o allentata per favorire la libera circolazione della conoscenza e della cultura?", tema: "Proprietà Intellettuale", polaritaAsseEco: 1 },
        { id: "di05", testo: "L'Italia dovrebbe investire massicciamente nella space economy e nell'esplorazione spaziale come settore strategico per il futuro?", tema: "Space Economy", polaritaAsseEco: 0 },
        { id: "di06", testo: "Il telelavoro (smart working) dovrebbe essere attivamente promosso e incentivato come modalità standard, o limitato per preservare la coesione aziendale e le economie locali degli uffici?", tema: "Smart Working", polaritaAsseEco: 0, polaritaAsseSoc: -0.5 },
        { id: "di07", testo: "È necessario un piano nazionale per la cybersicurezza con ingenti investimenti pubblici per proteggere infrastrutture critiche e dati sensibili?", tema: "Cybersicurezza", polaritaAsseEco: -1 },
        { id: "di08", testo: "L'uso delle criptovalute e della finanza decentralizzata (DeFi) va incoraggiato come innovazione o strettamente regolamentato per i rischi di speculazione e illegalità?", tema: "Criptovalute", polaritaAsseEco: 0 },
    ],

    get domandeBreve() {
        const idDomandeBreviSelezionate = [
            "ef01", "ef02", "ef04", "ef07", "ef05",
            "ws01", "ws02", "ws03",
            "dc01", "dc02", "dc05", "dc06", "dc12",
            "is01", "is04", "is06",
            "ae01", "ae02", "ae05", "ae08", "ae10",
            "ic01", "ic05",
            "pe01", "pe02", "pe03", "pe04",
            "ri01", "ri02", "ri07",
            "di01", "di02", "di07", "di08"
        ];
        return this.domandeLunga.filter(d => idDomandeBreviSelezionate.includes(d.id));
    },

    opzioniRisposta: [
        { testo: "Totalmente d'accordo", valore: 1 },
        { testo: "D'accordo", valore: 0.5 },
        { testo: "Neutrale / Non so", valore: 0 },
        { testo: "In disaccordo", valore: -0.5 },
        { testo: "Totalmente in disaccordo", valore: -1 }
    ],

    // Funzione per assegnare posizioni simulate ai partiti
    // ATTENZIONE: QUESTA È UNA SIMULAZIONE!
    // Le posizioni sono basate su interpretazioni generali e possono non riflettere accuratamente
    // ogni sfumatura o evoluzione programmatica di ciascun partito.
    // Per un'accuratezza scientifica, è necessaria una ricerca e validazione manuale.
    assegnaPosizioniSimulate: function() {
        this.partitiLunga.forEach(partito => {
            // Inizializza l'oggetto posizioni se non esiste
            if (!partito.posizioni) {
                partito.posizioni = {};
            }

            this.domandeLunga.forEach(domanda => {
                let valore = 0; // Default Neutrale

                // Logica di assegnazione per AREA POLITICA GENERALE (fallback)
                const area = partito.areaPolitica;
                if (area.includes("estrema-sinistra") || area.includes("sinistra-radicale")) {
                    if (domanda.polaritaAsseEco === -1) valore += 0.8; if (domanda.polaritaAsseEco === 1) valore -= 0.8;
                    if (domanda.polaritaAsseSoc === -1) valore += 0.8; if (domanda.polaritaAsseSoc === 1) valore -= 0.8;
                    if (domanda.polaritaAsseAmb === 1) valore += 0.7; if (domanda.polaritaAsseAmb === -1) valore -= 0.7;
                    if (domanda.polaritaAsseEur === -1) valore += 0.8; if (domanda.polaritaAsseEur === 1) valore -= 0.8; // Spesso critici UE
                } else if (area.includes("sinistra-ecologista") || area.includes("sinistra-progressista") || area.includes("centro-sinistra")) {
                    if (domanda.polaritaAsseEco === -1) valore += 0.7; if (domanda.polaritaAsseEco === 1) valore -= 0.6;
                    if (domanda.polaritaAsseSoc === -1) valore += 0.7; if (domanda.polaritaAsseSoc === 1) valore -= 0.6;
                    if (domanda.polaritaAsseAmb === 1) valore += 0.9; if (domanda.polaritaAsseAmb === -1) valore -= 0.8;
                    if (domanda.polaritaAsseEur === 1) valore += 0.7; if (domanda.polaritaAsseEur === -1) valore -= 0.5; // Generalmente europeisti
                } else if (area.includes("trasversale-progressista")) { // M5S
                    if (domanda.polaritaAsseEco === -1) valore += 0.6; if (domanda.polaritaAsseEco === 1) valore -= 0.4;
                    if (domanda.polaritaAsseSoc === -1) valore += 0.5; if (domanda.polaritaAsseSoc === 1) valore -= 0.3;
                    if (domanda.polaritaAsseAmb === 1) valore += 0.9; if (domanda.polaritaAsseAmb === -1) valore -= 0.9;
                    if (domanda.polaritaAsseEur === 1) valore += 0.2; if (domanda.polaritaAsseEur === -1) valore -= 0.2; // Europeismo critico
                } else if (area.includes("centro-liberale") || area.includes("centro-radicale") || area.includes("centro-popolare")) {
                    if (domanda.polaritaAsseEco === 1) valore += 0.5; if (domanda.polaritaAsseEco === -1) valore -= 0.4;
                    if (domanda.polaritaAsseSoc === -1) valore += 0.4; if (domanda.polaritaAsseSoc === 1) valore -= 0.3; // Liberali su diritti
                    if (domanda.polaritaAsseAmb === 1) valore += 0.3; if (domanda.polaritaAsseAmb === -1) valore -= 0.3;
                    if (domanda.polaritaAsseEur === 1) valore += 0.8; if (domanda.polaritaAsseEur === -1) valore -= 0.7;
                } else if (area.includes("centro-destra") || area.includes("centro-cristiano")) {
                    if (domanda.polaritaAsseEco === 1) valore += 0.7; if (domanda.polaritaAsseEco === -1) valore -= 0.6;
                    if (domanda.polaritaAsseSoc === 1) valore += 0.6; if (domanda.polaritaAsseSoc === -1) valore -= 0.5;
                    if (domanda.polaritaAsseAmb === -1) valore += 0.4; if (domanda.polaritaAsseAmb === 1) valore -= 0.3; // Meno focus su ambiente spinto
                    if (domanda.polaritaAsseEur === 1) valore += 0.7; if (domanda.polaritaAsseEur === -1) valore -= 0.5;
                } else if (area.includes("destra-conservatrice") || area.includes("destra-populista") || area.includes("destra-valoriale")) {
                    if (domanda.polaritaAsseEco === 1) valore += 0.8; if (domanda.polaritaAsseEco === -1) valore -= 0.7;
                    if (domanda.polaritaAsseSoc === 1) valore += 0.8; if (domanda.polaritaAsseSoc === -1) valore -= 0.8;
                    if (domanda.polaritaAsseAmb === -1) valore += 0.6; if (domanda.polaritaAsseAmb === 1) valore -= 0.5;
                    if (domanda.polaritaAsseEur === -1) valore += 0.6; if (domanda.polaritaAsseEur === 1) valore -= 0.4; // Più sovranisti/critici
                } else if (area.includes("estrema-destra") || area.includes("destra-sovranista")) {
                    if (domanda.polaritaAsseEco === 1) valore += 0.5; if (domanda.polaritaAsseEco === -1) valore -= 0.3; // A volte interventisti in economia
                    if (domanda.polaritaAsseSoc === 1) valore += 0.9; if (domanda.polaritaAsseSoc === -1) valore -= 0.9;
                    if (domanda.polaritaAsseAmb === -1) valore += 0.7; if (domanda.polaritaAsseAmb === 1) valore -= 0.6;
                    if (domanda.polaritaAsseEur === -1) valore += 0.9; if (domanda.polaritaAsseEur === 1) valore -= 0.9;
                } else if (area.includes("autonomista")) {
                     if (domanda.id === 'ri02') valore = partito.areaPolitica.includes("meridionalista") || partito.areaPolitica.includes("nord") ? 1 : 0.5; // Pro Autonomia
                     else valore = Math.random() * 0.4 - 0.2; // Generalmente moderati su altri temi
                } else if (area.includes("tematico-animalista")) {
                    if (domanda.id === 'dc13' || domanda.id === 'ae07' || domanda.id === 'ae09') valore = domanda.id === 'dc13' ? 1 : -1; // dc13 vietare sperim. animale = pro-animalista; ae07 no caccia = pro-animalista; ae09 no allevamenti intensivi = pro-animalista
                } else if (area.includes("tematico-digitale")) { // Partito Pirata
                    if (domanda.id === 'dc08') valore = 1; // Pro libertà online
                    if (domanda.id === 'di04') valore = -1; // Contro rafforzamento copyright
                    if (domanda.id === 'di02') valore = 0.5; // Controllo Big Tech
                    if (domanda.id === 'ri06') valore = 1; // Pro democrazia diretta
                }


                // Sovrascrivi con posizioni specifiche per partito/domanda (più precise)
                // FDI
                if (partito.id === 'fdi') {
                    if (domanda.id === 'ef01') valore = 1; else if (domanda.id === 'ef02') valore = -1; else if (domanda.id === 'dc01') valore = -1; else if (domanda.id === 'dc02') valore = -1; else if (domanda.id === 'dc04') valore = -1; else if (domanda.id === 'dc05') valore = -1; else if (domanda.id === 'is01') valore = 1; else if (domanda.id === 'ae01') valore = 0.5; else if (domanda.id === 'pe02') valore = -0.5; else if (domanda.id === 'ri01') valore = 1; else if (domanda.id === 'dc12') valore = 1;
                }
                // PD
                else if (partito.id === 'pd') {
                    if (domanda.id === 'ef01') valore = -1; else if (domanda.id === 'ef02') valore = 0.5; else if (domanda.id === 'ef07') valore = 1; else if (domanda.id === 'dc01') valore = 1; else if (domanda.id === 'dc02') valore = 1; else if (domanda.id === 'dc05') valore = 1; else if (domanda.id === 'ae01') valore = -1; else if (domanda.id === 'pe01') valore = 1; else if (domanda.id === 'dc04') valore = -0.5;
                }
                // M5S
                else if (partito.id === 'm5s') {
                    if (domanda.id === 'ef07') valore = 1; else if (domanda.id === 'ws01') valore = 1; else if (domanda.id === 'ae01') valore = -1; else if (domanda.id === 'ae02') valore = 1; else if (domanda.id === 'pe04') valore = -1; else if (domanda.id === 'ri04') valore = -1; else if (domanda.id === 'ef05') valore = -0.5; else if (domanda.id === 'dc06') valore = 0.5;
                }
                // Lega
                else if (partito.id === 'lega') {
                    if (domanda.id === 'ef01') valore = 1; else if (domanda.id === 'ef07') valore = -1; else if (domanda.id === 'is01') valore = 1; else if (domanda.id === 'pe02') valore = 0.5; else if (domanda.id === 'ri02') valore = 1; else if (domanda.id === 'ae01') valore = 1; else if (domanda.id === 'dc02') valore = -1; else if (domanda.id === 'dc12') valore = 1;
                }
                // FI
                else if (partito.id === 'fi') {
                    if (domanda.id === 'ef01') valore = 1; else if (domanda.id === 'ae01') valore = 1; else if (domanda.id === 'pe01') valore = 1; else if (domanda.id === 'ri01') valore = 0.5; else if (domanda.id === 'dc01') valore = -0.5; else if (domanda.id === 'dc04') valore = -0.5; else if (domanda.id === 'is05') valore = 1;
                }
                // Azione / IV
                else if (partito.id === 'azione' || partito.id === 'iv') {
                    if (domanda.id === 'ef05') valore = 1; else if (domanda.id === 'ae01') valore = 1; else if (domanda.id === 'pe01') valore = 1; else if (domanda.id === 'ri01') valore = 0.5; else if (domanda.id === 'ws01') valore = -0.5; else if (domanda.id === 'dc01') valore = 1; else if (domanda.id === 'dc02') valore = 1; else if (domanda.id === 'dc06') valore = 0.5;
                }
                // AVS
                else if (partito.id === 'avs') {
                    if (domanda.id === 'ef02') valore = 1; else if (domanda.id === 'ef07') valore = 1; else if (domanda.id === 'ae01') valore = -1; else if (domanda.id === 'ae02') valore = 1; else if (domanda.id === 'ae05') valore = 1; else if (domanda.id === 'dc01') valore = 1; else if (domanda.id === 'dc02') valore = 1; else if (domanda.id === 'pe03') valore = -1; else if (domanda.id === 'pe04') valore = -1;
                }
                // UP / PaP
                else if (partito.id === 'up' || partito.id === 'pap') {
                    if (domanda.id === 'ef04') valore = 1; else if (domanda.id === 'ef08') valore = -1; else if (domanda.id === 'pe02') valore = 1; else if (domanda.id === 'pe03') valore = -1; else if (domanda.id === 'ws01') valore = 1; else if (domanda.id === 'is02') valore = 1; else if (domanda.id === 'ef15') valore = -1; // Contro capitalismo
                }
                // Italexit
                else if (partito.id === 'italexit_p') {
                    if (domanda.id === 'pe02') valore = 1; else if (domanda.id === 'is01') valore = 1; else if (domanda.id === 'ef01') valore = 0.5; else if (domanda.id === 'pe01') valore = -1; else if (domanda.id === 'pe03') valore = -0.5; else if (domanda.id === 'dc05') valore = -1;
                }


                // Normalizza e arrotonda il valore finale
                valore = Math.max(-1, Math.min(1, valore)); // Clamp tra -1 e 1
                if (valore > 0.75) partito.posizioni[domanda.id] = 1;
                else if (valore > 0.25) partito.posizioni[domanda.id] = 0.5;
                else if (valore < -0.75) partito.posizioni[domanda.id] = -1;
                else if (valore < -0.25) partito.posizioni[domanda.id] = -0.5;
                else partito.posizioni[domanda.id] = 0;
            });
        });
    }
};
partitiDB.assegnaPosizioniSimulate();