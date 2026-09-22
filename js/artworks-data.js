/**
 * Centrální databáze uměleckých děl pro projekt Obrazy mistrů / Deník z galerií
 * Obsahuje všechna díla ze sbírek Staří mistři i Mistři 19. století a moderny.
 */

const EXHIBITIONS_DATA = {
    "stari-mistri": {
        id: "stari-mistri",
        title: "Staří mistři I",
        subtitle: "Sbírky starého evropského a českého umění 16.–18. století",
        dateInfo: "Červenec 2026 • Národní galerie Praha",
        pageUrl: "galerie_stari_mistri.html",
        heroImage: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Doménikos_Theotokópulos_(called_El_Greco)_-_Christ_in_Prayer_-_Google_Art_Project.jpg",
        description: "Výběr z vrcholných děl evropského manýrismu, severské renesance a barokního chiaroscurismu. El Greco, Michiel Coxcie, J. J. Hartmann, Piazzetta, Brand a Jan van Goyen.",
        count: 7
    },
    "19-stoleti": {
        id: "19-stoleti",
        title: "Mistři 19. století a počátky moderny",
        subtitle: "Od empíru a biedermeieru přes impresionismus až k avantgardě",
        dateInfo: "Srpen 2026 • Národní galerie Praha",
        pageUrl: "galerie_19stoleti_mistri.html",
        heroImage: "gallery_pics/Jakub_Schikaneder_-_Murder_in_the_House.JPG",
        description: "Rozsáhlá přehlídka českého a evropského malířství 19. a 20. století: Chittussi, Schikaneder, Slavíček, Machek, Loir, Brožík, Radimský, Kupka, Friedrich a další.",
        count: 18
    }
};

const ARTWORKS_DATA = [
    // ==========================================
    // SBÍRKA 1: STAŘÍ MISTŘI (7 děl)
    // ==========================================
    {
        id: "el-greco",
        exhibitionId: "stari-mistri",
        romanNumeral: "I",
        title: "Modlící se Kristus",
        artist: "Doménikos Theotokópoulos, zv. El Greco",
        artistDates: "1541–1614",
        date: "cca 1595–1600",
        yearNumeric: 1598,
        period: "Manýrismus / Španělská renesance",
        periodCategory: "Manýrismus",
        medium: "Olej na plátně",
        dimensions: "61 × 46 cm",
        location: "Národní galerie Praha",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Doménikos_Theotokópulos_(called_El_Greco)_-_Christ_in_Prayer_-_Google_Art_Project.jpg",
        highResUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Doménikos_Theotokópulos_(called_El_Greco)_-_Christ_in_Prayer_-_Google_Art_Project.jpg",
        caption: "Modlící se Kristus (kolem 1595–1600)",
        tags: ["Manýrismus", "Duchovní umění", "Španělsko", "Toledo", "Portrét"],
        sections: [
            {
                title: "1. Příběh, který obraz zobrazuje (Ikonografie a námět)",
                content: "Obraz představuje Ježíše Krista v intimním okamžiku odevzdaného rozhovoru s Bohem Otcem. Kompozice je oproštěna od jakéhokoliv rušivého pozadí – pozornost diváka je plně soustředěna na Kristovu tvář s jemně zakloněnou hlavou a vlhkýma očima hledícíma k nebesům. Svatozář kolem hlavy není pevným kruhem, nýbrž pulzujícím světelným kosočtvercem, který vyzařuje přímo z jeho božské podstaty. Jde o typ hluboce procítěného devocionálního obrazu (pro soukromou zbožnost), který má v divákovi vyvolat soucit, vnitřní usebrání a mystické spojení s Kristovým utrpením a modlitbou."
            },
            {
                title: "2. Příběh vzniku díla (Umělecko-historický kontext)",
                content: "Dílo vzniklo ve vrcholném období El Grecova toledského působení. Původem krétský ikonopisec, který prošel benátskou školou Tiziana a římským manýrismem, nalezl v nábožensky zaníceném Španělsku 16. století ideální půdu pro svůj styl. El Greco záměrně deformuje renesanční anatomická pravidla: postavu protahuje do vertikály, odhmotňuje drapérii expresivními tahy štětcem a pracuje s chladným, nadpozemským světlem. Tímto radikálním pojetím předjímal moderní expresionismus o celá staletí dříve."
            },
            {
                title: "3. Historie a provenience obrazu",
                content: "Plátno se nachází ve sbírkách Národní galerie v Praze, kde představuje jeden z absolutních klenotů evropského manýrismu a španělského malířství. Patří do nevelkého počtu El Grecových originálů ve středoevropských veřejných sbírkách a dokumentuje sběratelskou prozíravost českých mecenášů a nákupních komisí 20. století."
            }
        ]
    },
    {
        id: "coxie-patmos",
        exhibitionId: "stari-mistri",
        romanNumeral: "II",
        title: "Svatý Jan na Patmu",
        artist: "Michiel Coxcie",
        artistDates: "1499–1592",
        date: "cca 1540",
        yearNumeric: 1540,
        period: "Severský romanismus / Renesance",
        periodCategory: "Renesance",
        medium: "Olej na dřevěné desce",
        dimensions: "230 × 90 cm",
        location: "Původně Katedrála sv. Víta / NGP",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Michiel_Coxie_-_St_John_the_Evangelist_on_Patmos.jpg",
        highResUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Michiel_Coxie_-_St_John_the_Evangelist_on_Patmos.jpg",
        caption: "Svatý Jan na Patmu (cca 1540)",
        tags: ["Renesance", "Romanismus", "Flámsko", "Oltářní obraz", "Svatý Jan"],
        sections: [
            {
                title: "1. Příběh, který obraz zobrazuje (Ikonografie a námět)",
                content: "Obraz líčí apoštola a evangelistu svatého Jana během jeho exilu na pustém egejském ostrově Patmos, kam byl vykázán římským císařem Domitianem. Zde Jan zažil velkolepá proroctví, která sepsal v biblické Knize Zjevení (Apokalypse). Coxcie zobrazuje Jana jako mladého, oduševnělého muže s perem a pergamenem, jak v extatickém gestu pohlíží na nebesa. U jeho nohou stojí věrný orel, tradiční evangelijní atribut symbolizující výsostný duchovní vhled a schopnost pohlédnout do božského světla."
            },
            {
                title: "2. Příběh vzniku díla (Umělecko-historický kontext)",
                content: "Michiel Coxcie patřil k nejvýznamnějším představitelům severského romanismu – hnutí nizozemských mistrů, kteří odešli do Říma studovat díla vrcholné italské renesance (Raffaela a Michelangela). Coxcie byl dokonce současníky nazýván „vlámským Raffaelem“ pro svou harmonickou kompozici, monumentální pojetí postav a ušlechtilou modelaci záhybů roucha, které mistrně propojil s nizozemskou citlivostí k materiálu a krajinnému detailu."
            },
            {
                title: "3. Historie a provenience obrazu",
                content: "Tato monumentální desková malba tvořila součást velkého oltářního triptychu věnovaného svatému Janovi. Obraz byl v průběhu staletí uchováván v církevních a panovnických sbírkách v Praze (spojen s historií chrámu sv. Víta a císařskými sbírkami Rudolfa II.), odkud posléze přešel do péče Národní galerie v Praze."
            }
        ]
    },
    {
        id: "coxie-muceni",
        exhibitionId: "stari-mistri",
        romanNumeral: "III",
        title: "Mučení sv. Jana Evangelisty",
        artist: "Michiel Coxcie",
        artistDates: "1499–1592",
        date: "cca 1540",
        yearNumeric: 1540,
        period: "Severský romanismus / Renesance",
        periodCategory: "Renesance",
        medium: "Olej na dřevěné desce",
        dimensions: "230 × 90 cm",
        location: "Křídlo oltáře sv. Jana / NGP",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michiel_Coxie_-_The_Martydom_of_St_Luke.jpg",
        highResUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michiel_Coxie_-_The_Martydom_of_St_Luke.jpg",
        caption: "Mučení sv. Jana Evangelisty / Světec (cca 1540)",
        tags: ["Renesance", "Romanismus", "Flámsko", "Mučednictví", "Oltář"],
        sections: [
            {
                title: "1. Příběh, který obraz zobrazuje (Ikonografie a námět)",
                content: "Námět vychází ze Zlaté legendy (Legenda Aurea) a raně křesťanské tradice: před svým vyhnanstvím na Patmos byl Jan v Římě u Latinské brány odsouzen k hrozné smrti v kádi s vroucím olejem. Podle legendy se však stal zázrak – vroucí olej světci neublížil, nýbrž z něj vystoupil zcela svěží a posílen. Tento výjev oslavuje nezlomnou víru, která vítězí nad fyzickým utrpením i krutostí pozemských tyranů."
            },
            {
                title: "2. Příběh vzniku díla (Umělecko-historický kontext)",
                content: "Coxcie v tomto výjevu uplatnil svou hlubokou znalost italské renesanční anatomie a dramatického figurálního pohybu (figura serpentinata). V kontrastu s brutálním úsilím pohanských katů vkládá do Janova postoje klid, důstojnost a vnitřní mír. Monumentální vertikální formát desky umožnil autorovi vystavět monumentální sochařskou kompozici s velkolepým účinkem na diváka."
            },
            {
                title: "3. Historie a provenience obrazu",
                content: "Společně s protějškem Svatý Jan na Patmu představuje tato práce špičkový doklad vlivu italského cinquecenta na severské umění. Dílo bylo po staletí chráněno v prestižních církevních a státních sbírkách v Praze a dodnes demonstruje kosmopolitní charakter středoevropského renesančního sběratelství."
            }
        ]
    },
    {
        id: "hartmann",
        exhibitionId: "stari-mistri",
        romanNumeral: "IV",
        title: "Alegorie země (Krajina se setkáním Krista s Marií a Martou)",
        artist: "Johan Jakob Hartmann",
        artistDates: "1680–1738",
        date: "cca 1710–1725",
        yearNumeric: 1720,
        period: "České baroko / Kabinetní malba",
        periodCategory: "Baroko",
        medium: "Olej na měděné desce",
        dimensions: "83,6 × 114 cm",
        location: "Praha (baroko) / NGP",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Jan_Jakub_Hartmann_-_Allegory_of_Earth_(Landscape_with_the_Encounter_of_Christ_with_Mary_and_Martha)_-_O_18772_-_National_Gallery_Prague.jpg",
        highResUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Jan_Jakub_Hartmann_-_Allegory_of_Earth_(Landscape_with_the_Encounter_of_Christ_with_Mary_and_Martha)_-_O_18772_-_National_Gallery_Prague.jpg",
        caption: "Alegorie země (počátek 18. století)",
        tags: ["Baroko", "Krajinomalba", "Alegorie", "Kabinetní malba", "Praha"],
        sections: [
            {
                title: "1. Příběh, který obraz zobrazuje (Ikonografie a námět)",
                content: "Obraz je alegorickou oslavou elementu Země, koncipovanou jako bohatá, rajská lesní krajina kypící životem, zvěří a rostlinstvem. V popředí se odehrává figurální scéna setkání Krista se sestrami Marií a Martou z Betanie (symbolika kontemplativního vs. aktivního pozemského života). Příroda je zde zobrazena nikoli jako divočina, ale jako božský řád a štědrá matka nabízející člověku hojnost plodů a útočiště."
            },
            {
                title: "2. Příběh vzniku díla (Umělecko-historický kontext)",
                content: "Johan Jakob Hartmann, narozený v Kutné Hoře a působící v Praze, byl nejvýraznějším českým následovníkem odkazu Jana Brueghela staršího („Sametového“). Specializoval se na tzv. kabinetní malbu. Malba na hladkou měděnou desku umožnila dosáhnout mimořádné emailové zářivosti a mikroskopické preciznosti v detailech listoví, peří ptáků a odlesků vodní hladiny. Hartmannovy lesní kompozice byly typické používáním tří plánů hloubky (hnědé popředí, zelený střed, modravé dálky)."
            },
            {
                title: "3. Historie a provenience obrazu",
                content: "Dílo bylo součástí slavného cyklu Čtyř živlů (Země, Voda, Vzduch, Oheň), které byly vysoce ceněným artiklem pražské šlechty 18. století (např. v interiérech Černínů či Nostitzů). Dnes je vystaveno ve stálé expozici Národní galerie v Praze jako vrcholný příklad barokní krajinomalby rudolfínsko-brueghelovské tradice v Čechách."
            }
        ]
    },
    {
        id: "piazzetta",
        exhibitionId: "stari-mistri",
        romanNumeral: "V",
        title: "Sv. Josef s Ježíškem",
        artist: "Giovanni Battista Piazzetta",
        artistDates: "1682–1754",
        date: "cca 1729–1735",
        yearNumeric: 1729,
        period: "Benátské pozdní baroko",
        periodCategory: "Baroko",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha (O 10655)",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Piazzetta_-_St._Joseph_with_the_Child,_c._1729,_O_10655.jpg",
        highResUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Piazzetta_-_St._Joseph_with_the_Child,_c._1729,_O_10655.jpg",
        caption: "Sv. Josef s Ježíškem (cca 1729–1735)",
        tags: ["Baroko", "Benátky", "Chiaroscuro", "Šerosvit", "Svatý Josef"],
        sections: [
            {
                title: "1. Příběh, který obraz zobrazuje (Ikonografie a námět)",
                content: "Obraz zobrazuje svatého Josefa, pěstouna Páně, chovajícího malého Ježíška v náručí. V 17. a 18. století zažíval kult svatého Josefa velký rozkvět – Josef již nebyl zobrazován jen jako starý pasivní muž v pozadí, ale jako milující, ochraňující a něžný otec. Dítě se k němu tulí s bezmeznou důvěrou. Z obrazu vyzařuje hluboká lidskost, teplo domova a tiché rodičovské dojetí nad posláním božského dítěte."
            },
            {
                title: "2. Příběh vzniku díla (Umělecko-historický kontext)",
                content: "Benátčan Giovanni Battista Piazzetta byl prvním ředitelem benátské Akademie výtvarných umění a učitelem slavného G. B. Tiepola. Piazzetta se odlišoval od rokokové přeslazenosti své doby: jeho styl byl robustní, zemitý a psychologicky hluboký. Využíval dramatické šerosvitové kontrasty (chiaroscuro) inspirované Caravaggiem a teplou paletu hnědých, okrových a tělových tónů. Postavy modeloval hutnými pastózními nánosy barvy, což jim dodávalo hmatatelnou živost."
            },
            {
                title: "3. Historie a provenience obrazu",
                content: "Piazzettovy polopostavové komorní náboženské malby byly v 18. století vysoce ceněné sběrateli po celé Evropě. Tento obraz se dostal do českých šlechtických sbírek a následně byl převeden do sbírek Národní galerie v Praze (evidenční číslo O 10655), kde je vystaven jako ukázka vrcholného benátského chiaroscurismu."
            }
        ]
    },
    {
        id: "brand",
        exhibitionId: "stari-mistri",
        romanNumeral: "VI",
        title: "Krajina s hradem Děvínem při ústí řeky Moravy",
        artist: "Johann Christian Brand",
        artistDates: "1722–1795",
        date: "cca 1775",
        yearNumeric: 1775,
        period: "Osvícenství / Raný romantismus",
        periodCategory: "Klasicismus/Romantismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha (O 223)",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Johann_Christian_Brand_-_Landscape_with_Děvín_Castle_at_the_Outfall_of_the_Morava_into_the_Danube_-_O_223_-_National_Gallery_Prague.jpg",
        highResUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Johann_Christian_Brand_-_Landscape_with_Děvín_Castle_at_the_Outfall_of_the_Morava_into_the_Danube_-_O_223_-_National_Gallery_Prague.jpg",
        caption: "Krajina s hradem Děvínem (kolem 1770–1780)",
        tags: ["Veduta", "Krajinomalba", "Podunají", "Děvín", "18. století"],
        sections: [
            {
                title: "1. Příběh, který obraz zobrazuje (Ikonografie a námět)",
                content: "Obraz zachycuje dramatický pohled na skalní útes se zříceninou strategického hradu Děvín (na soutoku řek Moravy a Dunaje u Bratislavy). Místo opředené historií od dob Velké Moravy a Římské říše je zasazeno do idylického podvečerního osvětlení. V popředí sledujeme klidný život rybářů, převozníků a venkovanů na řece, zatímco v pozadí se otevírají dálavy dunajské nížiny. Jde o citlivé spojení historické vznešenosti hradu a poklidného přírodního rytmu."
            },
            {
                title: "2. Příběh vzniku díla (Umělecko-historický kontext)",
                content: "Johann Christian Brand, profesor vídeňské Akademie, byl klíčovou osobností středoevropského krajinářství 18. století. Překonal dosavadní konvenci „vykonstruovaných italských krajin“ a jako jeden z prvních začal systematicky malovat reálné scenérie rakouské a uherské monarchie přímo na základě kresebných studií v plenéru. Jeho práce položila základ ranému romantismu a věrné topografické malbě 19. století."
            },
            {
                title: "3. Historie a provenience obrazu",
                content: "Obraz vznikl pravděpodobně na zakázku šlechtického mecenáše obdivujícího podunajské panství. V 19. a 20. století se stal součástí historického fondu Společnosti vlasteneckých přátel umění v Čechách, jejíž sbírky přímo založily dnešní Národní galerii v Praze (sbírkový inventář O 223)."
            }
        ]
    },
    {
        id: "goyen",
        exhibitionId: "stari-mistri",
        romanNumeral: "VII",
        title: "Strážní věže v ústí řeky",
        artist: "Jan van Goyen",
        artistDates: "1596–1656",
        date: "cca 1646",
        yearNumeric: 1646,
        period: "Holandský zlatý věk / Tonální malba",
        periodCategory: "Baroko",
        medium: "Olej na dřevěné desce",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Jan_van_Goyen_-_Shipping_with_a_View_of_Two_Towers_verzeichnisdergr00berg_0113.jpg",
        highResUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Jan_van_Goyen_-_Shipping_with_a_View_of_Two_Towers_verzeichnisdergr00berg_0113.jpg",
        caption: "Strážní věže v ústí řeky (kolem 1640–1646)",
        tags: ["Holandsko", "Tonální malba", "Marína", "Zlatý věk", "Řeka"],
        sections: [
            {
                title: "1. Příběh, který obraz zobrazuje (Ikonografie a námět)",
                content: "Tento výjev je esencí holandského Zlatého věku (17. století). Zachycuje široké říční ústí s plachetnicemi, rybářskými bárkami a opevněnými středověkými baštami na břehu. Většinu obrazové plochy zabírá nekonečná klenba oblohy s dramatickými dešťovými mraky, pod nimiž se po vodní hladině míhají poryvy větru a paprsky slunce. Zobrazuje každodenní symbiózu holandského národa s vodním živlem – zdrojem obživy, námořního obchodu i obrany."
            },
            {
                title: "2. Příběh vzniku díla (Umělecko-historický kontext)",
                content: "Jan van Goyen z Haagu byl jedním z nejodvážnějších inovátorů krajinomalby. Zavedl tzv. tonální malbu: opustil pestré barvy a vystavěl celý obraz na harmonii jemných zemitých tónů (okr, šedozelená, stříbřitá hněď). Maloval neobyčejně rychle (alla prima) řídkou barvou, což mu umožnilo zachytit prchavou atmosféru, vlhký mořský vzduch a pohyb světla po vlnách s nesrovnatelnou lehkostí a poetikou."
            },
            {
                title: "3. Historie a provenience obrazu",
                content: "Obrazy Jana van Goyena byly v Čechách nesmírně oblíbené již od 17. a 18. století a nacházely se ve významných rodových sbírkách (např. v Nostické obrazárně). Dnes toto plátno v Národní galerii Praha reprezentuje to nejlepší ze slavné tradice holandské maríny a říční krajiny."
            }
        ]
    },

    // ==========================================
    // SBÍRKA 2: MISTŘI 19. STOLETÍ A MODERNY (18 děl)
    // ==========================================
    {
        id: "machek",
        exhibitionId: "19-stoleti",
        romanNumeral: "I",
        title: "Portrét sochaře Malínského",
        artist: "Antonín Machek",
        artistDates: "1775–1844",
        date: "1818",
        yearNumeric: 1818,
        period: "Empír / České národní obrození",
        periodCategory: "Klasicismus/Romantismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Antonín_Machek-_Josef_Malínský.jpg",
        highResUrl: "gallery_pics/Antonín_Machek-_Josef_Malínský.jpg",
        caption: "Portrét sochaře Malínského (1818)",
        tags: ["Portrét", "Empír", "České obrození", "Sochař", "Praha"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Plátno představuje předního empírového sochaře a řezbáře Josefa Malínského přímo při tvůrčím procesu. Nesedí v žádné strojené póze, ale v civilním, uvolněném domácím oděvu u svého pracovního stolu. V ruce třímá dřevěnou sochařskou paličku a dláto, kterými právě opracovává plastiku. Z jeho tváře s pronikavým pohledem vyzařuje intelektuální soustředění a hrdé sebevědomí tvůrce, který se neopírá o šlechtické tituly, ale o vlastní řemeslnou zručnost a talent."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Obraz nevznikl na panskou zakázku, ale z vnitřní potřeby zachytit rodící se elitu českého národního obrození. Antonín Machek tímto dílem pomáhal definovat nový žánr – měšťanský portrét. Malba oslavuje svobodného umělce jako váženého člena společnosti, který se prosazuje vlastním dílem v probouzející se Praze počátku 19. století."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Machek a Malínský byli celoživotní blízcí přátelé a spolubojovníci za emancipaci českého umění. Josef Malínský byl ve své době nejvytíženějším pražským kameníkem (autorem stovek náhrobků na Olšanských a Malostranských hřbitovech). Traduje se, že Machek tento portrét vytvořil v době, kdy oba umělci v pražských kavárnách vášnivě plánovali založení nezávislého českého výtvarného spolku, který by vymanil pražskou Akademii ze zkostnatělého vídeňského vlivu."
            }
        ]
    },
    {
        id: "brozik",
        exhibitionId: "19-stoleti",
        romanNumeral: "II",
        title: "Portrét dámy s chrtem",
        artist: "Václav Brožík",
        artistDates: "1851–1901",
        date: "1895–1897",
        yearNumeric: 1896,
        period: "Akademismus / Salonní malba",
        periodCategory: "Akademismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Václav_Brožík_-_Portrait_of_a_Lady_with_Greyhound_-_O_2628_-_National_Gallery_Prague.jpg",
        highResUrl: "gallery_pics/Václav_Brožík_-_Portrait_of_a_Lady_with_Greyhound_-_O_2628_-_National_Gallery_Prague.jpg",
        caption: "Portrét dámy s chrtem (1895–1897)",
        tags: ["Portrét", "Akademismus", "Paříž", "Aristokracie", "Salon"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Obraz zachycuje elegantní aristokratku ve večerní toaletě z těžkého tmavého hedvábí, lemovaného luxusní kožešinou. Po jejím boku stojí štíhlý anglický chrt. Přítomnost chrta není náhodná – jeho štíhlá, graciézní anatomie zrcadlí ladné křivky dámy a podtrhuje její vznešenost. Pes zde funguje jako pradávný symbol ušlechtilého původu, věrnosti a vytříbeného vkusu."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Václav Brožík byl v 90. letech 19. století evropskou celebritou, profesorem na pražské Akademii a členem prestižního pařížského Institutu. Vedle monumentálních historických kompozic byl jedním z nejlépe placených portrétistů pařížské a pražské honorace. Tento obraz vznikl jako zakázka reprezentující společenský status a bohatství portrétované rodiny na pařížském Salonu."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Brožíkův raketový úspěch v Paříži byl úzce spjat s jeho sňatkem s Hermínou Sedelmeyerovou, dcerou jednoho z nejbohatších a nejvlivnějších světových obchodníků s uměním Charlese Sedelmeyera. Tento sňatek Brožíkovi otevřel dveře k nejbohatší mezinárodní klientele. Malíř byl pověstný svou neuvěřitelnou schopností namalovat strukturu látek – tvrdilo se, že podle jeho pláten dokázali pařížští krejčí přesně určit gramáž a původ hedvábí."
            }
        ]
    },
    {
        id: "waldmuller",
        exhibitionId: "19-stoleti",
        romanNumeral: "III",
        title: "Děti dostávající snídani",
        artist: "Ferdinand Georg Waldmüller",
        artistDates: "1793–1865",
        date: "1859",
        yearNumeric: 1859,
        period: "Vídeňský Biedermeier / Realismus",
        periodCategory: "Biedermeier",
        medium: "Olej na dřevě",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Waldmüller_-_Kinder_erhalten_ihr_Früstück.jpeg",
        highResUrl: "gallery_pics/Waldmüller_-_Kinder_erhalten_ihr_Früstück.jpeg",
        caption: "Děti dostávající snídani (1859)",
        tags: ["Biedermeier", "Žánrová malba", "Vídeň", "Děti", "Světlo"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Idylický a živý výjev z venkovské roubené jizby. Matka rozlévá čerstvě nadojené mléko a dělí pecen chleba mezi houf dětí. Každé z dětí má vlastní psychologický výraz: nejmenší netrpělivě natahuje hliněnou misku, starší sourozenec dohlíží na mladšího a scéna je doplněna spícím psem a kočkou. Celým pokojem prostupuje proud ranního slunce, který dopadá skrze otevřené dveře na dřevěnou podlahu."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Waldmüller byl hlavním představitelem vídeňského biedermeieru, avšak tento žánr zcela proměnil. Odmítal sentimentální kašírované výjevy a chtěl zachytit skutečný, nepřikrášlený život venkovského lidu, v němž spatřoval morální čistotu, rodinnou soudržnost a řád, který se z tehdejších velkoměst vytrácel."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Waldmüller byl na vídeňské Akademii považován za radikálního kacíře. Zuřivě bojoval proti tomu, aby se studenti učili malovat kopírováním starých mistrů v zatuchlých ateliérech, a nutil je chodit malovat ven na přímé slunce. Vedení akademie ho kvůli těmto „podvratným“ metodám zbavilo profesury a předčasně penzionovalo. Svým zachycením denního světla a stínů však předběhl francouzský impresionismus o celá dvě desetiletí."
            }
        ]
    },
    {
        id: "schikaneder-vrazda",
        exhibitionId: "19-stoleti",
        romanNumeral: "IV",
        title: "Vražda v domě",
        artist: "Jakub Schikaneder",
        artistDates: "1855–1924",
        date: "1890",
        yearNumeric: 1890,
        period: "Sociální realismus / Naturalismus",
        periodCategory: "Realismus/Symbolismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Jakub_Schikaneder_-_Murder_in_the_House.JPG",
        highResUrl: "gallery_pics/Jakub_Schikaneder_-_Murder_in_the_House.JPG",
        caption: "Vražda v domě (1890)",
        tags: ["Praha", "Židovské město", "Sociální drama", "Nokturno", "Realismus"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Sychravý zimní den na pavlačovém dvorku pražského Židovského Města. Na špinavém sněhu leží bezvládné, zkrvavené tělo mladé dívky – pravděpodobně chudé švadlenky nebo služky. Kolem se sbíhají obyvatelé pavlačí: shrbená stařena v šátku, dělník v zástěře a polekané ženy. Plátno neukazuje vraha ani boj; Schikaneder se záměrně soustředí na mrazivé ticho těsně po činu, na bezmoc a všudypřítomnou tíhu bídy velkoměsta."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Obraz vznikl jako Schikanederova reakce na plánovanou asanaci pražského Josefova a na kritické sociální poměry v tehdejší Praze. Malíř chtěl vytvořit monumentální naturalistické memento – poukázat na temná zákoutí společnosti, která tehdejší měšťanská vrstva raději přehlížela."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Schikaneder obraz připravoval celé měsíce s až forenzní pečlivostí. Aby dosáhl přesné perspektivy a dramatického osvětlení šerého dvora, postavil si ve svém ateliéru zmenšený třírozměrný sádrový model pavlačového domu a figurky osvětloval svíčkami. Když byl obraz vystaven na Jubilejní zemské výstavě roku 1891, způsobil senzaci. Lidé před ním stáli v zástupech a dobový tisk vedl vášnivé debaty, kdo byl skutečným vrahem dívky."
            }
        ]
    },
    {
        id: "loir",
        exhibitionId: "19-stoleti",
        romanNumeral: "V",
        title: "Podzemní dráha",
        artist: "Luigi Loir",
        artistDates: "1845–1916",
        date: "1899",
        yearNumeric: 1899,
        period: "Francouzský impresionismus / Městská veduta",
        periodCategory: "Impresionismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Luigi_Loir_-_Underground_Railway.JPG",
        highResUrl: "gallery_pics/Luigi_Loir_-_Underground_Railway.JPG",
        caption: "Podzemní dráha (1899)",
        tags: ["Paříž", "Metro", "Impresionismus", "Město", "Pokrok"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Pařížský podvečer zalitý namodralým šerem a kouřem. Z podzemního výkopu a stanice podzemní dráhy stoupají husté kotouče bílé páry, které se mísí s chladným vzduchem. Mezi plynovými lucernami spěchají Pařížané v cylindrech a dlouhých kabátech. Obraz zachycuje fascinující střet starého romantického světa kočárů s novým věkem podzemní techniky a elektřiny."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Na sklonku 19. století se Paříž horečně připravovala na velkolepou Světovou výstavu roku 1900 a stavba první linky metra (Métropolitain) byla symbolem technologického triumfu Francie. Luigi Loir, zvaný „malíř pařížských bulvárů“, chtěl zachytit tento historický zlom, kdy se město proměňovalo před očima."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Loir byl pověstný svou posedlostí malovat za každého počasí. V dešti, vánici i husté mlze stával na ulicích se speciálním malířským stojanem chráněným deštníkem. Proslul jako nepřekonatelný mistr v míchání barev pro „mokrý asfalt“ – dokázal zachytit přesný odlesk pouličních luceren v kalužích vody s fotografickou věrností."
            }
        ]
    },
    {
        id: "schikaneder-hradcany",
        exhibitionId: "19-stoleti",
        romanNumeral: "VI",
        title: "V podvečer na Hradčanech",
        artist: "Jakub Schikaneder",
        artistDates: "1855–1924",
        date: "1910",
        yearNumeric: 1910,
        period: "Český symbolismus / Náladová malba",
        periodCategory: "Realismus/Symbolismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Jakub_Schikaneder_-_Early_Evening_at_Hradčany_-_O_13999_-_National_Gallery_Prague.jpg",
        highResUrl: "gallery_pics/Jakub_Schikaneder_-_Early_Evening_at_Hradčany_-_O_13999_-_National_Gallery_Prague.jpg",
        caption: "V podvečer na Hradčanech (1910)",
        tags: ["Praha", "Hradčany", "Nokturno", "Symbolismus", "Melancholie"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Zimní soumrak v tiché a opuštěné hradčanské uličce. Podél staré zdi zvolna kráčí osamělá ženská postava zahalená v černém plášti. Jediným zdrojem světla je matná žlutá záře plynové lucerny, která bojuje s postupující modravou temnotou. Scéna vyzařuje hluboký klid, nostalgii, tichou melancholii a pocit pomíjivosti lidského života."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Na rozdíl od své rané sociální tvorby se Schikaneder po roce 1900 uzavřel do sebe. Praha procházela divokou modernizací, mizela stará romantická zákoutí a malíř hledal útočiště v místech, kde se zastavil čas – na Hradčanech a Novém Světě. Obraz vznikl jako vizuální báseň o samotě a tichu uprostřed moderního světa."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Schikaneder byl známý jako noční chodec. Celé hodiny osaměle bloumal noční Prahou a vnímal světelné nuance večerního šerosvitu. Tento obraz však nemaloval venku – tvořil výhradně zpaměti ve svém vinohradském ateliéru, kde měl okna zakrytá černými závěsy, aby si vytvořil přesné přítmí a mohl se plně soustředit na vnitřní paměťovou stopu."
            }
        ]
    },
    {
        id: "slavicek",
        exhibitionId: "19-stoleti",
        romanNumeral: "VII",
        title: "Eliščin most",
        artist: "Antonín Slavíček",
        artistDates: "1870–1910",
        date: "1906",
        yearNumeric: 1906,
        period: "Český impresionismus / Raný expresionismus",
        periodCategory: "Impresionismus",
        medium: "Tempera a olej",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Slavíček EliscinMost.jpg",
        highResUrl: "gallery_pics/Slavíček EliscinMost.jpg",
        caption: "Eliščin most (1906)",
        tags: ["Praha", "Vltava", "Impresionismus", "Expresionismus", "Most"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Dynamický pohled na starý řetězový Eliščin most přes Vltavu (stával na místě dnešního Štefánikova mostu). Plátno vibruje pohybem: po mostě přecházejí dělníci, projíždějí kočáry a tramvaje, zatímco parníky na řece chrlí oblaka kouře. Obloha je těžká, nasáklá uhelným dýmem pražských továren. Slavíček zachytil syrovou, pulzující energii velkoměsta na počátku 20. století."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Slavíček odmítal malovat Prahu jako historický skanzen pro turisty. Chtěl ukázat její moderní, industriální a dělnickou tvář. Obraz vznikl v době, kdy už bylo rozhodnuto o demolici starého mostu, a Slavíček spěchal zachytit jeho jedinečnou konstrukci v kontextu moderního pražského života."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Slavíček maloval v neuvěřitelném fyzickém vypětí. Během práce na tomto plátně stával na nábřeží v třeskutém větru a mrazu, nanášel pastózní barvy rychlými, až agresivními údery štětce. Traduje se, že barvy do plátna místy vtlačoval přímo prsty a špachtlí, aby vystihl chvění znečištěného městského vzduchu, čímž položil základy českému expresionismu."
            }
        ]
    },
    {
        id: "chittussi",
        exhibitionId: "19-stoleti",
        romanNumeral: "VIII",
        title: "Trocadéro v Paříži",
        artist: "Antonín Chittussi",
        artistDates: "1847–1891",
        date: "1881",
        yearNumeric: 1881,
        period: "Barbizonská škola / Realistický plenér",
        periodCategory: "Realismus/Symbolismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Antonín_Chittussi_-_Trocadero_in_Paris_-_O_12953_-_National_Gallery_Prague.jpg",
        highResUrl: "gallery_pics/Antonín_Chittussi_-_Trocadero_in_Paris_-_O_12953_-_National_Gallery_Prague.jpg",
        caption: "Trocadéro v Paříži (1881)",
        tags: ["Paříž", "Seina", "Plenér", "Barbizonská škola", "Veduta"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Širokoúhlý pohled přes klidnou hladinu řeky Seiny na velkolepý maursko-byzantský palác Trocadéro na horizontu. V popředí kotví říční čluny a po nábřeží kráčejí drobné postavy chodců. Celou horní polovinu plátna opanovala monumentální klenba francouzského nebe plná jemných mraků, jejichž světlo se zrcadlí na vodní hladině."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Chittussi odešel do Francie po těžkých životních zklamáních v Čechách. Chtěl dokázat, že český malíř dokáže vstřebat moderní plenérovou malbu francouzské barbizonské školy a postavit se po bok pařížské špičce. Obraz zachycuje monumentální stavbu vytvořenou pro Světovou výstavu roku 1878 a znamenal Chittussiho mezinárodní průlom."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Před svým odchodem do Paříže narukoval Chittussi jako dobrovolník do rakousko-uherské armády během okupace Bosny a Hercegoviny. Ve válce onemocněl tyfem a málem zemřel. Právě francouzská krajina podél řeky Seiny a lesy ve Fontainebleau pro něj znamenaly psychickou i uměleckou záchranu. Tento obraz mu vynesl uznání na oficiálním pařížském Salonu, což byl pro českého krajináře té doby nevídaný úspěch."
            }
        ]
    },
    {
        id: "radimsky",
        exhibitionId: "19-stoleti",
        romanNumeral: "IX",
        title: "Starý mlýn u Giverny",
        artist: "Václav Radimský",
        artistDates: "1867–1946",
        date: "1899",
        yearNumeric: 1899,
        period: "Český / Francouzský impresionismus",
        periodCategory: "Impresionismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Václav_Radimský_-_Starý_mlýn_u_Giverny.jpg",
        highResUrl: "gallery_pics/Václav_Radimský_-_Starý_mlýn_u_Giverny.jpg",
        caption: "Starý mlýn u Giverny (1899)",
        tags: ["Giverny", "Normandie", "Impresionismus", "Mlýn", "Voda"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Zákoutí na řece Epte v normandské vesničce Giverny. Starobylý dřevěný mlýn stojí přímo nad dravým vodním proudem, který pění a rozbíjí se o stavidla. Hladina řeky je pokryta odlesky slunce a zrcadlí se v ní bujné větve smutečních vrb. Plátno je oslavou světla, vody a svěží zeleně v horkém letním dni."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Radimský žil v Giverny v přímém sousedství otce impresionismu Clauda Moneta. Byl natolik fascinován atmosférou řeky Epte, že si v tamním mlýně zřídil ateliér. Obraz vznikl jako čistě impresionistická studie proměny světla na tekoucí vodní hladině."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Radimský byl jediným českým malířem, který byl plně přijat do mezinárodní kolonie impresionistů v Giverny a s Monetem se osobně stýkal. Aby mohl malovat řeku z bezprostřední blízkosti, nechal si postavit speciální plovoucí ateliér – loďku ukotvenou přímo uprostřed toku řeky. Ve Francii dosáhl takového komerčního úspěchu, že si v Giverny koupil vlastní zámeček a byl jedním z prvních lidí v kraji, kteří vlastnili soukromý automobil."
            }
        ]
    },
    {
        id: "courtens",
        exhibitionId: "19-stoleti",
        romanNumeral: "X",
        title: "Pod bukem",
        artist: "Frans Courtens",
        artistDates: "1854–1943",
        date: "1892",
        yearNumeric: 1892,
        period: "Belgický luminismus / Impresionismus",
        periodCategory: "Impresionismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Frans_Courtens_-_Under_the_Beech_Tree_-_O_702_-_National_Gallery_Prague.jpg",
        highResUrl: "gallery_pics/Frans_Courtens_-_Under_the_Beech_Tree_-_O_702_-_National_Gallery_Prague.jpg",
        caption: "Pod bukem (1892)",
        tags: ["Belgie", "Luminismus", "Les", "Příroda", "Pastózní malba"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Monumentální lesní interiér, jemuž dominuje mohutný kmen prastarého buku. Skrze hustou zelenou a zlatavou korunu stromu pronikají ostré vertikální kužely poledního slunce, které dopadají na lesní půdu pokrytou tlejícím listím a mechem. Divák má pocit, jako by stál uvnitř přírodní katedrály."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Belgický malíř Frans Courtens byl vůdčí osobností tzv. dendermondské školy a severského luminismu. Odmítal jemnou a uhlazenou francouzskou techniku a chtěl zachytit syrovou, panteistickou a živelnou sílu severské přírody v jejím nejintenzivnějším světle."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Courtens byl známý tím, že u svých pláten téměř nepoužíval jemné štětce. Barvu na plátno házel a nanášel v silných nánosech zednickou lžící, špachtlí a holýma rukama. Vytvářel tím téměř reliéfní strukturu kůry a lesního podrostu. Když byl tento obraz v 90. letech 19. století vystaven v Praze, způsobil šok mezi studenty Akademie a zásadně ovlivnil mladého Antonína Slavíčka v jeho odvaze k pastózní malbě."
            }
        ]
    },
    {
        id: "hudecek",
        exhibitionId: "19-stoleti",
        romanNumeral: "XI",
        title: "Potok v slunečním svitu",
        artist: "Antonín Hudeček",
        artistDates: "1872–1941",
        date: "1894",
        yearNumeric: 1894,
        period: "Mařákova škola / Český impresionismus",
        periodCategory: "Impresionismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Antonin Hudeček Potok ve slunečním svitu.jpg",
        highResUrl: "gallery_pics/Antonin Hudeček Potok ve slunečním svitu.jpg",
        caption: "Potok v slunečním svitu (1894)",
        tags: ["Okoř", "Mařákovci", "Impresionismus", "Potok", "Les"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Kamenité koryto lesního potoka vinoucí se stinným údolím. Tmavý stín stromů je rozbit desítkami zářivých, třpytivých skvrn slunečního světla, které pronikají korunami a tančí na hladině vody i na vlhkých balvanech. Výjev zachycuje prchavý okamžik chladivého lesního ticha v kontrastu s prudkým letním žárem."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Obraz vznikl během slavných letních plenérových pobytů studentů krajinářské školy Julia Mařáka na Okoři. Hudeček se tímto plátnem začal vymaňovat z vlivu tradičního romantického lesního šerosvitu a odvážně vstoupil na pole moderního impresionistického vidění."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Na Okoři tvořila celá parta mladých malířů (Hudeček, Slavíček, Prucha), kteří žili velmi divokým bohémským životem. Místní sedláci si zpočátku mysleli, že malíři se stojany v potocích jsou blázni nebo cizí zeměměřiči. Hudeček stával při malování tohoto obrazu celé hodiny po kolena v ledové vodě potoka, aby detailně vystihl, jak se sluneční světlo láme na mokrých kamenech pod hladinou."
            }
        ]
    },
    {
        id: "kupka",
        exhibitionId: "19-stoleti",
        romanNumeral: "XII",
        title: "Druhý břeh Marny",
        artist: "František Kupka",
        artistDates: "1871–1957",
        date: "1895",
        yearNumeric: 1895,
        period: "Raný realismus / Počátky abstrakce",
        periodCategory: "Impresionismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/František Kupka Druhy břeh Marny.jpg",
        highResUrl: "gallery_pics/František Kupka Druhy břeh Marny.jpg",
        caption: "Druhý břeh Marny (1895)",
        tags: ["Kupka", "Marna", "Francie", "Řeka", "Předzvěst abstrakce"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Poklidná hladina francouzské řeky Marny zalitá měkkým odpoledním sluncem. Na protějším břehu se zrcadlí hustá řada stromů vrhajících dlouhé stíny do vody, zatímco u břehu tiše kotví dřevěná pramička. Kompozice působí nesmírně harmonickým, až meditačním dojmem."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Dílo pochází z Kupkova raného pařížského období. Po příchodu z Vídně žil v chudobě a živil se jako satirický ilustrátor pro časopisy. Volné chvíle trávil u řeky Marny, kde maloval ještě realisticko-impresionistické krajiny a zkoumal čisté optické vlastnosti barevného spektra."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Ačkoliv je tento obraz ještě realistický, obsahuje v sobě zárodek světové revoluce v umění. Právě sledování kruhů na vodní hladině, odrazů světla a rytmu vln na řece Marně přivedlo Kupku k myšlence, že obraz nemusí zobrazovat konkrétní předměty, ale může být čistým vyjádřením rytmu, pohybu a energie barev. O patnáct let později namaloval svou slavnou Amorfu – Dvoubarevnou fugu, čímž stvořil první abstraktní díla v dějinách světového malířství."
            }
        ]
    },
    {
        id: "friedrich",
        exhibitionId: "19-stoleti",
        romanNumeral: "XIII",
        title: "Severní moře v měsíční záři",
        artist: "Caspar David Friedrich",
        artistDates: "1774–1840",
        date: "1823",
        yearNumeric: 1823,
        period: "Německý romantismus",
        periodCategory: "Klasicismus/Romantismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Caspar_David_Friedrich_-_Northern_Sea_in_the_Moonlight_-_Google_Art_Project.jpg",
        highResUrl: "gallery_pics/Caspar_David_Friedrich_-_Northern_Sea_in_the_Moonlight_-_Google_Art_Project.jpg",
        caption: "Severní moře v měsíční záři (1823)",
        tags: ["Romantismus", "Německo", "Měsíc", "Moře", "Mystika"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Mystická a tichá noční scenérie arktického pobřeží. Z temné pláže vystupují obří balvany, nad hladinou moře prosvítá skrze mraky plný měsíc a jeho stříbrná záře osvětluje vzdálené siluety plachetnic plujících po klidné hladině. Každý prvek má hluboký symbolický význam: balvany představují pevnou křesťanskou víru na zemi, moře je symbolem věčnosti a lodě představují lidské duše putující životem k posmrtnému přístavu."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Friedrich byl nejvýznamnějším představitelem německého romantismu. Tento obraz namaloval v období hluboké vnitřní izolace a melancholie. Chtěl vytvořit vizuální oltář pro tichou duchovní meditaci diváka, v němž se člověk konfrontuje s nekonečností vesmíru a Boží přítomností v přírodě."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Friedrich své slavné noční obrazy maloval zásadně ve dne ve svém drážďanském ateliéru, který měl zcela vyklizený a okna zatemněná černými okenicemi s pouhou úzkou štěrbinou. Tvrdil, že umělec musí nejprve zavřít své tělesné oči a ponořit se do absolutní tmy, aby mohl spatřit obraz svým vnitřním, duchovním zrakem. Toto plátno je dnes považováno za vůbec nejcennější zahraniční dílo romantismu na území České republiky."
            }
        ]
    },
    {
        id: "kosarek",
        exhibitionId: "19-stoleti",
        romanNumeral: "XIV",
        title: "Zimní noc",
        artist: "Adolf Kosárek",
        artistDates: "1830–1859",
        date: "1857",
        yearNumeric: 1857,
        period: "Český romantismus / Baladický realismus",
        periodCategory: "Klasicismus/Romantismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Adolf_Kosárek_-_Winter_Night.jpg",
        highResUrl: "gallery_pics/Adolf_Kosárek_-_Winter_Night.jpg",
        caption: "Zimní noc (1857)",
        tags: ["Zima", "Romantismus", "Česká krajina", "Nokturno", "Chalupa"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Tichá česká vesnická krajina přikrytá hlubokým sněhem pod jasnou mrazivou noční oblohou. Na obloze září měsíc, jehož stříbřité světlo modeluje sněhové návěje. Uprostřed pláně stojí osamělá roubená chalupa, z jejíhož malého okénka sálá teplé, zlatavé světlo svíčky. K tomuto světlu se po zasněžené cestě brodí osamělý poutník. Výjev je mistrným ztělesněním naděje, domova a tepla uprostřed mrazivé prázdnoty."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Kosárek vytvořil toto dílo na vrcholu svých tvůrčích sil, ačkoliv už byl v té době těžce nemocen tuberkulózou. Chtěl zachytit hlubokou baladickou duši české krajiny, v níž se mísí melancholie, tvrdý život venkovského lidu a hluboká lidská touha po bezpečí domova."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Adolf Kosárek byl ryzím géniem české malby, který zemřel v naprosté chudobě v pouhých 29 letech. Za svého života prodával svá mistrovská díla pražským překupníkům za pár zlatých, aby měl na základní jídlo a barvy. V Zimní noci dosáhl tak dokonalé iluze vnitřního světla z okna, že doboví návštěvníci výstav podezřívali pořadatele, že za plátnem schovávají rozsvícenou svíčku. Dnes je Kosárek uctíván jako zakladatel novodobé české krajinomalby."
            }
        ]
    },
    {
        id: "liska",
        exhibitionId: "19-stoleti",
        romanNumeral: "XV",
        title: "Kain",
        artist: "Emanuel Krescenc Liška",
        artistDates: "1852–1903",
        date: "1885",
        yearNumeric: 1885,
        period: "Pozdní akademismus / Symbolismus",
        periodCategory: "Realismus/Symbolismus",
        medium: "Olej na plátně",
        dimensions: "Nestanoveno",
        location: "Národní galerie Praha",
        image: "gallery_pics/Emanuel_Krescenc_Liška_–_Cain_(1885).jpg",
        highResUrl: "gallery_pics/Emanuel_Krescenc_Liška_–_Cain_(1885).jpg",
        caption: "Kain (1885)",
        tags: ["Symbolismus", "Bible", "Drama", "Akademismus", "Generace ND"],
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Dramatický starozákonní výjev: první vrah v dějinách lidstva Kain prchá po zavraždění svého bratra Ábela do nehostinné pouště. Kain je zobrazen jako nahý, svalnatý muž v křečovitém běhu, který si v panické hrůze chrání rukama hlavu před hněvem nebes. Na jeho čele plane krvavé Kainovo znamení viny. Z jeho tváře se zračí absolutní děs, šílenství a tíha neodčinitelného hříchu."
            },
            {
                title: "2. Proč obraz vznikl & historické pozadí",
                content: "Emanuel Krescenc Liška namaloval Kaina během svého prestižního stipendijního pobytu v Římě. Reagoval na dobové proudy evropského symbolismu a pozdního akademismu. Nešlo mu o ilustraci Bible, ale o univerzální psychologickou studii rozkladu lidského svědomí pod tíhou spáchaného zločinu."
            },
            {
                title: "3. Zákulisí tvorby & autorova zajímavost",
                content: "Liška patřil k mimořádně talentované generaci Národního divadla. Aby dokázal věrně zachytit křečovité napětí svalů a hrůzu v Kainově těle, navštěvoval v Římě nemocnice, márnice a prováděl anatomické skici. Obraz působí neobyčejně moderně tím, že neukazuje samotný násilný akt, ale čistě vnitřní psychologické peklo člověka, před kterým nelze nikam utéct."
            }
        ]
    },
    {
        id: "matousek1",
        exhibitionId: "19-stoleti",
        romanNumeral: "Insp I",
        title: "Vyšinutá rovnováha",
        artist: "František Matoušek",
        artistDates: "1901–1961",
        date: "Meziválečné období",
        yearNumeric: 1935,
        period: "Česká meziválečná avantgarda / Skupina 42",
        periodCategory: "Moderna/Avantgarda",
        medium: "Materiálová koláž, textil",
        dimensions: "Nestanoveno",
        location: "Soukromá sbírka / Inspirace",
        image: "gallery_pics/František Matoušek - Vyšinutá rovnováha.jpg",
        highResUrl: "gallery_pics/František Matoušek - Vyšinutá rovnováha.jpg",
        caption: "Vyšinutá rovnováha (Meziválečné období)",
        tags: ["Avantgarda", "Skupina 42", "Koláž", "Textil", "Moderna"],
        isSubSection: true,
        subSectionName: "Obrazy pod čarou – Pro inspiraci",
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Významný meziválečný avantgardní experimentátor, člen legendární Skupiny 42 a SVU Mánes. Matoušek se ve svých pracích nezaměřoval na klasickou malbu, ale na civilismus, městskou poetiku a geometrický řád moderního světa."
            },
            {
                title: "2. Zákulisí tvorby & autorova zajímavost",
                content: "Matoušek byl světovým průkopníkem práce s netradičními materiály. Vymyslel unikátní techniku vytrhávané a vrstvené džínoviny (denimu) a textilních koláží, z nichž vytvářel strukturální reliéfy desítky let předtím, než se textilní umění stalo běžnou součástí moderní scény."
            }
        ]
    },
    {
        id: "matousek2",
        exhibitionId: "19-stoleti",
        romanNumeral: "Insp II",
        title: "Sophistica",
        artist: "František Matoušek",
        artistDates: "1901–1961",
        date: "Meziválečné období",
        yearNumeric: 1938,
        period: "Česká meziválečná avantgarda / Strukturální umění",
        periodCategory: "Moderna/Avantgarda",
        medium: "Materiálová koláž",
        dimensions: "Nestanoveno",
        location: "Soukromá sbírka / Inspirace",
        image: "gallery_pics/František Matoušek - sophistica.jpg",
        highResUrl: "gallery_pics/František Matoušek - sophistica.jpg",
        caption: "Sophistica (Meziválečné období)",
        tags: ["Avantgarda", "Design", "Struktura", "Materiál", "Moderna"],
        isSubSection: true,
        subSectionName: "Obrazy pod čarou – Pro inspiraci",
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Strukturální a grafické dílo odrážející experimenty s materiálovou koláží a textilem. Reflektuje meziválečné avantgardní snahy o prolnutí volného umění s designem, užitým uměním a novými, často surovými materiály."
            }
        ]
    },
    {
        id: "bolf",
        exhibitionId: "19-stoleti",
        romanNumeral: "Insp III",
        title: "Auto",
        artist: "Josef Bolf",
        artistDates: "*1971",
        date: "2005",
        yearNumeric: 2005,
        period: "Současné české umění / Expresivní figurace",
        periodCategory: "Moderna/Avantgarda",
        medium: "Vosková technika, tuš a vyškrabávání",
        dimensions: "Nestanoveno",
        location: "Soukromá sbírka / Inspirace",
        image: "gallery_pics/bolf-auto.jpg",
        highResUrl: "gallery_pics/bolf-auto.jpg",
        caption: "Auto (2005)",
        tags: ["Současné umění", "Vyškrabávání", "Melancholie", "Sídliště", "Inspirace"],
        isSubSection: true,
        subSectionName: "Obrazy pod čarou – Pro inspiraci",
        sections: [
            {
                title: "1. Příběh a ikonografie výjevu",
                content: "Jeden z nejvýznamnějších současných českých malířů. Obraz zachycuje vrak automobilu v bezútěšném, rozpadajícím se prostředí, které připomíná normalizační paneláková sídliště 80. let. Vrak funguje jako symbol dětské úzkosti, zranitelnosti a vytěsněných traumat z minulosti."
            },
            {
                title: "2. Zákulisí tvorby & autorova zajímavost",
                content: "Bolf proslul svou specifickou a fyzicky náročnou technikou: plátno pokryje vrstvou vosku, přemaluje černou tuší a následně do něj vyrývá a proškrabává linky jehlou či skalpelem. Výsledný obraz má charakter syrového dětského snu či dystopického komiksu."
            }
        ]
    }
];
