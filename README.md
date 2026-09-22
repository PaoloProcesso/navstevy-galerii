# 🏛️ Deník z galerií – Obrazy mistrů

Interaktivní virtuální kurátorský archiv a vizuální průvodce mistrovskými díly českého a evropského malířství (převážně ze sbírek Národní galerie v Praze).

> *Stránky slouží jako připomínka návštěv různých galerií a zábavných obrazů. Zde Picassa opravdu nehledejte :)*

---

## ✨ Klíčové funkce

- **2 stálé expozice s 25 díly:**
  - **Staří mistři I:** El Greco, Michiel Coxcie, J. J. Hartmann, G. B. Piazzetta, J. C. Brand, Jan van Goyen.
  - **Mistři 19. století a počátky moderny:** Jakub Schikaneder, Antonín Slavíček, Antonín Chittussi, Antonín Machek, Luigi Loir, Václav Brožík, Václav Radimský, František Kupka, Caspar David Friedrich, Adolf Kosárek, Emanuel Krescenc Liška, František Matoušek, Josef Bolf.
- **3 roviny odborného rozboru ke každému obrazu:**
  1. *Příběh a ikonografie výjevu*
  2. *Historický kontext a vznik díla*
  3. *Provenience, zákulisí tvorby a autorovy zajímavosti*
- **Fullscreen Lightbox s lupou:** Prozkoumávání tahů štětcem a detailů maleb ve vysokém rozlišení s plynulým přiblížením (zoom) a posunem (drag & pan).
- **Živé vyhledávání a filtry:** Okamžité vyhledávání podle autora, techniky, námětu či klíčových slov a filtrování podle uměleckých slohů (Renesance, Baroko, Romantismus, Impresionismus, Symbolismus, Moderna).
- **Přepínání pohledů:**
  - 📖 *Detailní kurátorský rozbor*
  - 🖼️ *Vizuální mřížka miniatur (Grid)*
  - 📄 *Zjednodušený čtecí mód*
- **Světlý a Tmavý režim (Light / Dark mode):** Možnost přepnutí s automatickým uložením volby do prohlížeče.
- **Responzivní design:** Optimalizováno pro počítače, tablety i mobilní telefony.

---

## 📁 Struktura projektu

```text
├── index.html                     # Hlavní kurátorský portál a rozcestník
├── galerie_stari_mistri.html      # Výstava Staří mistři I (16.–18. století)
├── galerie_19stoleti_mistri.html  # Výstava Mistři 19. století a moderny
├── css/
│   └── style.css                 # Centrální designový systém a témata
├── js/
│   ├── artworks-data.js          # Strukturovaná databáze 25 děl a metadat
│   └── app.js                    # Interaktivní skript (Lightbox, filtry, vyhledávání, téma)
└── gallery_pics/                 # Lokální reprodukce obrazů ve vysokém rozlišení
```

---

## 🚀 Jak spustit projekt

Web je čistě statický a nevyžaduje instalaci žádného serveru ani databáze:
1. Otevřete soubor `index.html` v libovolném moderním webovém prohlížeči (Chrome, Firefox, Safari, Edge).
2. **GitHub Pages:** V nastavení repozitáře na GitHubu (*Settings -> Pages -> Branch: main / root*) můžete jedním kliknutím aktivovat bezplatný online hosting.
