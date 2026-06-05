# Linee Guida SEO & CRO a Lungo Termine – martinaweb.netlify.app

Questo documento racchiude i pilastri fondamentali da mantenere e aggiornare nel tempo per garantire che il sito della Dott.ssa Martina Pallottini mantenga un posizionamento elevato sui motori di ricerca (SEO) e continui a convertire i visitatori in contatti reali (CRO).

---

## 1. Linee Guida E-E-A-T (Autorevolezza e Trasparenza)
Google classifica i siti di psicologia nella categoria **YMYL (Your Money or Your Life)**. Richiede quindi il massimo livello di *Experience, Expertise, Authoritativeness, Trustworthiness*.

* **Aggiornamento Dati Legali:** Ogni volta che cambiano lo studio fisica, il numero di telefono o l'iscrizione all'albo, questi dati devono essere aggiornati simultaneamente nel Footer, nella pagina Contatti e nei dati strutturati.
* **Trasparenza Sanitaria:** Mantenere sempre visibile il numero di iscrizione all'Ordine degli Psicologi delle Marche e la conformità al codice deontologico.
* **Link Esterni di Qualità:** Se la dottoressa pubblica articoli o partecipa a eventi, linkare fonti autorevoli (es. Ordine degli Psicologi, centri di ricerca) e mantenere aggiornato il link al profilo di *GuidaPsicologi*.

---3

## 2. Standard SEO On-Page (Da applicare a ogni nuova pagina)
Per ogni nuova problematica o servizio aggiunto in futuro, seguire rigidamente queste regole:

* **Tag <title>:** Massimo 60 caratteri. Struttura: `Parola Chiave Principale | Dott.ssa Martina Pallottini`.
* **Meta Description:** Massimo 155 caratteri. Deve contenere una Call to Action implicita (es. *Scopri come affrontare l'ansia...*).
* **Gerarchia degli Heading (Hn):**
    * `<h1>` unico per pagina (Titolo principale con focus sulla keyword).
    * `<h2>` per le sezioni principali (es. *Come funziona la terapia per l'ansia*).
    * `<h3>` per i sotto-argomenti (es. *Sintomi fisici dell'ansia*).
* **Contenuto Semantico:** Evitare il "keyword stuffing". Scrivere per l'utente rispondendo in modo chiaro, empatico e professionale alle sue problematiche.

---

## 3. Checklist Tecnica per l'Ambiente di Sviluppo (Netlify Stack)
* **Ottimizzazione Asset:** Tutte le nuove immagini caricate nel tempo devono essere in formato `.webp` o `.avif` e compresse (sotto i 100KB per le foto standard).
* **Mobile First:** Ogni modifica al layout deve essere testata prima su dispositivi mobile. Oltre l'85% degli utenti in questo settore naviga da smartphone.
* **Dati Strutturati:** Mantenere valido lo schema JSON-LD `PsychologicalService` nella Home Page. Se l'indirizzo dello studio cambia, lo schema va aggiornato immediatamente.
* **Gestione dei Redirect:** Se un URL viene modificato, configurare subito il redirect 301 nel file `_redirects` di Netlify per non perdere il posizionamento acquisito.

---

## 4. Principi CRO (Ottimizzazione della Conversione)
* **Accessibilità delle CTA:** Il pulsante WhatsApp e il link telefonico devono essere sempre a portata di clic (massimo 1 scroll o fissi nel menu).
* **Copy Empatico:** Concentrarsi sui benefici del percorso terapeutico e sul vissuto del paziente, non solo sull'elenco accademico dei disturbi.
* **Aggiornamento FAQ:** Monitorare le domande più frequenti che i pazienti fanno durante il primo contatto e usarle per arricchire la sezione FAQ del sito, abbattendo le barriere all'ingresso.
