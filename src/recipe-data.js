const RECIPE_DATA = [
    {
        categoryName: 'Pastries',
        recipes: [
            {
                title: 'Pogačice s čvarcima',
                description: 'Delicious flaky pastries made with pork cracklings and homemade dough.',
                id: 1,
                noOfPeople: 8,
                time: 90,
                img: '',
                ingredients: [
                    { item: 'brašna za dizano tijesto', quantity: 1, unit: 'kg' },
                    { item: 'mlijeka', quantity: 3.5, unit: 'dcl' },
                    { item: 'svježi kvasac', quantity: 1, unit: '' },
                    { item: 'ulja', quantity: 1, unit: 'dcl' },
                    { item: 'šećera', quantity: 1, unit: 'žlica' },
                    { item: 'soli', quantity: 1-2, unit: 'žlice' },
                ],
                instructions: [
                    'Pomiješati sve sastojke i zamijesiti tijesto.',
                    'Ostaviti da tijesto naraste.',
                    'Razvaljati tijesto, izrezati na oblike i peći.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Kroštule',
                description: 'Traditional Brač island recipe for crispy sweet fritters.',
                id: 2,
                noOfPeople: 6,
                time: 45,
                img: '',
                ingredients: [
                    { item: 'brašna', quantity: 500, unit: 'g' },
                    { item: 'jaja', quantity: 4, unit: '' },
                    { item: 'šećer', quantity: 100, unit: 'g' },
                    { item: 'vrhnje', quantity: 100, unit: 'ml' },
                    { item: 'rakija', quantity: 1, unit: 'žlica' },
                    { item: 'korica limuna', quantity: 1, unit: '' }
                ],
                instructions: [
                    'Pomiješajte sve sastojke u glatko tijesto.',
                    'Razvaljajte tijesto i izrežite ga na trake.',
                    'Pržite kroštule u dubokom ulju dok ne postanu zlatno smeđe.',
                    'Pospite šećerom u prahu prije serviranja.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Kroasan',
                description: 'Flaky, buttery croissants perfect for breakfast.',
                id: 3,
                noOfPeople: 12,
                time: 180,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 500, unit: 'g' },
                    { item: 'mlijeko', quantity: 3, unit: 'dcl' },
                    { item: 'maslac', quantity: 250, unit: 'g' },
                    { item: 'kvasac', quantity: 1, unit: 'paketić' },
                    { item: 'šećer', quantity: 50, unit: 'g' },
                    { item: 'sol', quantity: 1, unit: 'žličica' }
                ],
                instructions: [
                    'Pomiješajte kvasac, mlijeko i šećer te ostavite da se kvasac aktivira.',
                    'Dodajte brašno i sol te zamijesite tijesto.',
                    'Ostavite tijesto da naraste.',
                    'Razvaljajte tijesto, premažite ga maslacem i preklapajte nekoliko puta.',
                    'Oblikujte kroasane i ostavite ih da ponovno narastu.',
                    'Pecite na 200°C oko 15-20 minuta dok ne postanu zlatno smeđi.'
                ],
                difficulty: 'Hard'
            },
            {
                title: 'Brioche',
                description: 'Soft, sweet bread perfect for breakfast or as a snack.',
                id: 4,
                noOfPeople: 8,
                time: 120,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 500, unit: 'g' },
                    { item: 'mlijeko', quantity: 2, unit: 'dcl' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 100, unit: 'g' },
                    { item: 'jaja', quantity: 3, unit: '' },
                    { item: 'kvasac', quantity: 1, unit: 'paketić' },
                    { item: 'sol', quantity: 1, unit: 'žličica' }
                ],
                instructions: [
                    'Pomiješajte kvasac, mlijeko i šećer te ostavite da se kvasac aktivira.',
                    'Dodajte brašno, maslac, jaja i sol te zamijesite tijesto.',
                    'Ostavite tijesto da naraste.',
                    'Razvaljajte tijesto i stavite u kalup za pečenje.',
                    'Pecite na 180°C oko 25-30 minuta dok ne postane zlatno smeđe.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Pain au chocolat',
                description: 'Classic French pastry filled with chocolate.',
                id: 5,
                noOfPeople: 10,
                time: 180,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 500, unit: 'g' },
                    { item: 'mlijeko', quantity: 3, unit: 'dcl' },
                    { item: 'maslac', quantity: 250, unit: 'g' },
                    { item: 'kvasac', quantity: 1, unit: 'paketić' },
                    { item: 'šećer', quantity: 50, unit: 'g' },
                    { item: 'sol', quantity: 1, unit: 'žličica' },
                    { item: 'čokolada', quantity: 200, unit: 'g' }
                ],
                instructions: [
                    'Pomiješajte kvasac, mlijeko i šećer te ostavite da se kvasac aktivira.',
                    'Dodajte brašno i sol te zamijesite tijesto.',
                    'Ostavite tijesto da naraste.',
                    'Razvaljajte tijesto, premažite ga maslacem i preklapajte nekoliko puta.',
                    'Stavite komadiće čokolade na tijesto i preklopite.',
                    'Ostavite da ponovno naraste.',
                    'Pecite na 200°C oko 15-20 minuta dok ne postane zlatno smeđe.'
                ],
                difficulty: 'Hard'
            },
            {
                title: 'Strudel',
                description: 'Traditional layered pastry filled with apples.',
                id: 6,
                noOfPeople: 8,
                time: 90,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 300, unit: 'g' },
                    { item: 'jaja', quantity: 1, unit: '' },
                    { item: 'ulje', quantity: 2, unit: 'žlice' },
                    { item: 'sol', quantity: 1, unit: 'prstohvat' },
                    { item: 'jabuke', quantity: 1, unit: 'kg' },
                    { item: 'šećer', quantity: 100, unit: 'g' },
                    { item: 'cimet', quantity: 1, unit: 'žličica' }
                ],
                instructions: [
                    'Umijesite brašno, jaje, ulje i sol u glatko tijesto.',
                    'Razvaljajte tijesto vrlo tanko.',
                    'Narežite jabuke i pomiješajte ih sa šećerom i cimetom.',
                    'Rasporedite smjesu po tijestu i zarolajte.',
                    'Pecite na 180°C oko 40-45 minuta dok ne postane zlatno smeđe.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Mille-feuille',
                description: 'Layered pastry with cream filling and a sugar glaze.',
                id: 7,
                noOfPeople: 6,
                time: 150,
                img: '',
                ingredients: [
                    { item: 'lisnato tijesto', quantity: 500, unit: 'g' },
                    { item: 'mlijeko', quantity: 500, unit: 'ml' },
                    { item: 'šećer', quantity: 100, unit: 'g' },
                    { item: 'jaja', quantity: 2, unit: '' },
                    { item: 'brašno', quantity: 50, unit: 'g' },
                    { item: 'vanilin šećer', quantity: 1, unit: 'paketić' },
                    { item: 'šećer u prahu', quantity: 100, unit: 'g' }
                ],
                instructions: [
                    'Ispecite lisnato tijesto do zlatno smeđe boje.',
                    'Pomiješajte mlijeko, šećer, jaja, brašno i vanilin šećer te kuhajte dok ne zgusne.',
                    'Složite tijesto i kremu u slojevima.',
                    'Prelijte šećernom glazurom.'
                ],
                difficulty: 'Hard'
            },
            {
                title: 'Baklava',
                description: 'Sweet pastry made with layers of filo, filled with nuts and soaked in honey syrup.',
                id: 8,
                noOfPeople: 12,
                time: 120,
                img: '',
                ingredients: [
                    { item: 'filo tijesto', quantity: 500, unit: 'g' },
                    { item: 'orah', quantity: 300, unit: 'g' },
                    { item: 'šećer', quantity: 200, unit: 'g' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'med', quantity: 200, unit: 'ml' },
                    { item: 'voda', quantity: 200, unit: 'ml' }
                ],
                instructions: [
                    'Složite slojeve filo tijesta s maslacem i mljevenim orasima.',
                    'Izrežite na dijamante i pecite do zlatno smeđe boje.',
                    'Zagrijte vodu i med dok ne postane sirup i prelijte preko pečene baklave.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Danish Pastry',
                description: 'Buttery, flaky pastry with various sweet fillings.',
                id: 9,
                noOfPeople: 8,
                time: 120,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 500, unit: 'g' },
                    { item: 'mlijeko', quantity: 2, unit: 'dcl' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 100, unit: 'g' },
                    { item: 'jaja', quantity: 2, unit: '' },
                    { item: 'kvasac', quantity: 1, unit: 'paketić' },
                    { item: 'sol', quantity: 1, unit: 'žličica' }
                ],
                instructions: [
                    'Pomiješajte kvasac, mlijeko i šećer te ostavite da se kvasac aktivira.',
                    'Dodajte brašno, maslac, jaja i sol te zamijesite tijesto.',
                    'Ostavite tijesto da naraste.',
                    'Razvaljajte tijesto i oblikujte različite oblike s nadjevima po želji.',
                    'Pecite na 200°C oko 15-20 minuta dok ne postane zlatno smeđe.'
                ],
                difficulty: 'Hard'
            },
            {
                title: 'Cinnamon Rolls',
                description: 'Soft rolls filled with cinnamon and sugar, topped with cream cheese frosting.',
                id: 10,
                noOfPeople: 12,
                time: 120,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 500, unit: 'g' },
                    { item: 'mlijeko', quantity: 2, unit: 'dcl' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 100, unit: 'g' },
                    { item: 'jaja', quantity: 2, unit: '' },
                    { item: 'kvasac', quantity: 1, unit: 'paketić' },
                    { item: 'sol', quantity: 1, unit: 'žličica' },
                    { item: 'cimet', quantity: 2, unit: 'žlice' },
                    { item: 'šećer u prahu', quantity: 100, unit: 'g' },
                    { item: 'sirni namaz', quantity: 100, unit: 'g' }
                ],
                instructions: [
                    'Pomiješajte kvasac, mlijeko i šećer te ostavite da se kvasac aktivira.',
                    'Dodajte brašno, maslac, jaja i sol te zamijesite tijesto.',
                    'Ostavite tijesto da naraste.',
                    'Razvaljajte tijesto, pospite cimetom i šećerom, te zarolajte.',
                    'Izrežite rolice i pecite na 180°C oko 20-25 minuta.',
                    'Prelijte rolice glazurom od sirnog namaza i šećera u prahu.'
                ],
                difficulty: 'Medium'
            }
        ]
    },
    {
        categoryName: 'Cakes',
        recipes: [
            {
                title: 'Torta od mrkve',
                description: 'Moist and flavorful carrot cake with cream cheese frosting.',
                id: 11,
                noOfPeople: 12,
                time: 90,
                img: '',
                ingredients: [
                    { item: 'mrkve', quantity: 300, unit: 'g' },
                    { item: 'brašno', quantity: 250, unit: 'g' },
                    { item: 'šećer', quantity: 200, unit: 'g' },
                    { item: 'ulje', quantity: 200, unit: 'ml' },
                    { item: 'jaja', quantity: 4, unit: '' },
                    { item: 'praška za pecivo', quantity: 1, unit: 'paketić' },
                    { item: 'cimet', quantity: 1, unit: 'žličica' }
                ],
                instructions: [
                    'Naribajte mrkvu i pomiješajte s jajima, šećerom i uljem.',
                    'Dodajte brašno, prašak za pecivo i cimet te sve dobro promiješajte.',
                    'Pecite na 180°C oko 40-45 minuta.',
                    'Premažite tortu kremom od sirnog namaza i šećera u prahu.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Čokoladna torta',
                description: 'Rich and moist chocolate cake with a creamy chocolate frosting.',
                id: 12,
                noOfPeople: 10,
                time: 120,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 200, unit: 'g' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'jaja', quantity: 4, unit: '' },
                    { item: 'čokolada', quantity: 200, unit: 'g' },
                    { item: 'kakao', quantity: 50, unit: 'g' },
                    { item: 'praška za pecivo', quantity: 1, unit: 'paketić' }
                ],
                instructions: [
                    'Otopite čokoladu i maslac.',
                    'Pomiješajte otopljenu čokoladu, maslac, šećer i jaja.',
                    'Dodajte brašno, kakao i prašak za pecivo te dobro promiješajte.',
                    'Pecite na 180°C oko 30-35 minuta.',
                    'Premažite tortu čokoladnim frostingom.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Cheesecake',
                description: 'Creamy cheesecake with a buttery graham cracker crust.',
                id: 13,
                noOfPeople: 8,
                time: 180,
                img: '',
                ingredients: [
                    { item: 'keksi', quantity: 200, unit: 'g' },
                    { item: 'maslac', quantity: 100, unit: 'g' },
                    { item: 'krem sir', quantity: 500, unit: 'g' },
                    { item: 'šećer', quantity: 200, unit: 'g' },
                    { item: 'jaja', quantity: 3, unit: '' },
                    { item: 'vrhnje', quantity: 200, unit: 'ml' },
                    { item: 'vanilin šećer', quantity: 1, unit: 'paketić' }
                ],
                instructions: [
                    'Pomiješajte mljevene kekse i rastopljeni maslac te utisnite u kalup za pečenje.',
                    'Pomiješajte krem sir, šećer, jaja, vrhnje i vanilin šećer.',
                    'Izlijte smjesu na koru od keksa.',
                    'Pecite na 160°C oko 60 minuta.',
                    'Ohladite cheesecake prije posluživanja.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Red Velvet Cake',
                description: 'Moist and fluffy red velvet cake with cream cheese frosting.',
                id: 14,
                noOfPeople: 12,
                time: 120,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 300, unit: 'g' },
                    { item: 'šećer', quantity: 300, unit: 'g' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'jaja', quantity: 3, unit: '' },
                    { item: 'kefir', quantity: 200, unit: 'ml' },
                    { item: 'kakao', quantity: 30, unit: 'g' },
                    { item: 'crvena boja za hranu', quantity: 1, unit: 'žličica' },
                    { item: 'praška za pecivo', quantity: 1, unit: 'paketić' }
                ],
                instructions: [
                    'Pomiješajte brašno, kakao, prašak za pecivo i sol.',
                    'Posebno izmiješajte maslac i šećer, dodajte jaja i crvenu boju.',
                    'Naizmjenično dodajte suhe sastojke i kefir smjesi maslaca.',
                    'Pecite na 180°C oko 25-30 minuta.',
                    'Premažite tortu kremom od sirnog namaza.'
                ],
                difficulty: 'Hard'
            },
            {
                title: 'Tiramisu',
                description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
                id: 15,
                noOfPeople: 10,
                time: 30,
                img: '',
                ingredients: [
                    { item: 'piškote', quantity: 300, unit: 'g' },
                    { item: 'kava', quantity: 2, unit: 'dcl' },
                    { item: 'mascarpone', quantity: 500, unit: 'g' },
                    { item: 'jaja', quantity: 4, unit: '' },
                    { item: 'šećer', quantity: 100, unit: 'g' },
                    { item: 'kakao', quantity: 30, unit: 'g' }
                ],
                instructions: [
                    'Umiješajte žumanjke i šećer dok ne postanu pjenasti.',
                    'Dodajte mascarpone i dobro izmiješajte.',
                    'Umočite piškote u kavu i složite ih na dno posude.',
                    'Premažite sloj kreme i ponavljajte dok ne potrošite sve sastojke.',
                    'Završite s kremom i pospite kakaom.'
                ],
                difficulty: 'Easy'
            },
            {
                title: 'Medena pita',
                description: 'Ukusna pita s medom i kremom.',
                id: 4,
                noOfPeople: 12,
                time: 90,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 400, unit: 'g' },
                    { item: 'šećer', quantity: 200, unit: 'g' },
                    { item: 'med', quantity: 100, unit: 'g' },
                    { item: 'jaja', quantity: 2, unit: '' },
                    { item: 'maslac', quantity: 100, unit: 'g' },
                    { item: 'soda bikarbona', quantity: 1, unit: 'žličica' },
                    { item: 'mlijeko', quantity: 500, unit: 'ml' },
                    { item: 'puding od vanilije', quantity: 2, unit: 'paketića' }
                ],
                instructions: [
                    'Pomiješajte brašno, šećer, med, jaja, maslac i sodu bikarbonu i zamijesite tijesto.',
                    'Podijelite tijesto na dva dijela i razvaljajte svaki dio.',
                    'Ispecite tijesto na 180°C oko 10-12 minuta.',
                    'Skuhajte puding s mlijekom i ohladite.',
                    'Slažite pitu izmjenično s korama i kremom od pudinga.',
                    'Ohladite prije serviranja.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Voćna torta',
                description: 'Svježa i lagana torta s voćem.',
                id: 5,
                noOfPeople: 8,
                time: 60,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 150, unit: 'g' },
                    { item: 'jaja', quantity: 4, unit: '' },
                    { item: 'mlijeko', quantity: 100, unit: 'ml' },
                    { item: 'maslac', quantity: 100, unit: 'g' },
                    { item: 'prašk za pecivo', quantity: 1, unit: 'žličica' },
                    { item: 'miješano voće', quantity: 300, unit: 'g' }
                ],
                instructions: [
                    'Izmiješajte jaja i šećer dok ne postane pjenasto.',
                    'Dodajte mlijeko i rastopljeni maslac, te brašno s praškom za pecivo.',
                    'Ulijte smjesu u kalup i rasporedite voće po vrhu.',
                    'Pecite na 180°C oko 40 minuta.',
                    'Ohladite prije serviranja.'
                ],
                difficulty: 'Easy'
            },
            {
                title: 'Lješnjak torta',
                description: 'Sočna torta s lješnjacima i čokoladom.',
                id: 6,
                noOfPeople: 10,
                time: 80,
                img: '',
                ingredients: [
                    { item: 'lješnjaci', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 200, unit: 'g' },
                    { item: 'jaja', quantity: 4, unit: '' },
                    { item: 'brašno', quantity: 100, unit: 'g' },
                    { item: 'maslac', quantity: 100, unit: 'g' },
                    { item: 'čokolada', quantity: 150, unit: 'g' }
                ],
                instructions: [
                    'Sameljite lješnjake.',
                    'Izmiješajte jaja i šećer dok ne postane pjenasto.',
                    'Dodajte rastopljeni maslac i čokoladu, te brašno i lješnjake.',
                    'Ulijte smjesu u kalup i pecite na 180°C oko 40 minuta.',
                    'Ohladite prije serviranja.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Krafne',
                description: 'Mekane i ukusne krafne punjene džemom ili čokoladom.',
                id: 7,
                noOfPeople: 8,
                time: 120,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 250, unit: 'g' },
                    { item: 'šećer', quantity: 50, unit: 'g' },
                    { item: 'kvasac', quantity: 7, unit: 'g' },
                    { item: 'mlijeko', quantity: 200, unit: 'ml' },
                    { item: 'jaja', quantity: 2, unit: '' },
                    { item: 'maslac', quantity: 50, unit: 'g' },
                    { item: 'sol', quantity: 1, unit: 'prstohvat' },
                    { item: 'ulje za prženje', quantity: 0, unit: '' },
                    { item: 'džem ili čokolada', quantity: 0, unit: '' }
                ],
                instructions: [
                    'Pomiješajte kvasac, šećer i mlako mlijeko te ostavite da kvasac aktivira.',
                    'Dodajte brašno, jaja, rastopljeni maslac i sol te zamijesite tijesto.',
                    'Ostavite tijesto da naraste.',
                    'Razvaljajte tijesto na debljinu od 1 cm i izrežite krugove.',
                    'Na svaki krug stavite žličicu džema ili čokolade, pa preklopite drugim krugom.',
                    'Ostavite da krafne ponovno narastu.',
                    'Pržite u vrućem ulju dok ne postanu zlatno smeđe s obje strane.',
                    'Poslužite po želji posipane šećerom u prahu.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Španski vjetar',
                description: 'Lagan i prozračan desert s aromom vanilije.',
                id: 8,
                noOfPeople: 10,
                time: 60,
                img: '',
                ingredients: [
                    { item: 'jaja', quantity: 6, unit: '' },
                    { item: 'šećer', quantity: 200, unit: 'g' },
                    { item: 'brašno', quantity: 100, unit: 'g' },
                    { item: 'kukuruzni škrob', quantity: 50, unit: 'g' },
                    { item: 'prašak za pecivo', quantity: 1/2, unit: 'žličice' },
                    { item: 'vanilin šećer', quantity: 1, unit: 'paketić' },
                    { item: 'mlijeko', quantity: 100, unit: 'ml' }
                ],
                instructions: [
                    'Odvojite bjelanjke od žumanjaka.',
                    'Miksajte bjelanjke dok ne postanu čvrsti, a zatim postepeno dodajte šećer.',
                    'U drugoj zdjeli miksajte žumanjke s vanilin šećerom.',
                    'Dodajte mlijeko i postepeno umiješajte brašno, kukuruzni škrob i prašak za pecivo.',
                    'Na kraju pažljivo umiješajte bjelanjke.',
                    'Istresite smjesu u kalup i pecite na 180°C oko 30-35 minuta.',
                    'Ohladite i poslužite narezan na kocke.'
                ],
                difficulty: 'Easy'
            },
            {
                title: 'Jagodna torta',
                description: 'Svježa i sočna torta s jagodama.',
                id: 9,
                noOfPeople: 8,
                time: 45,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 150, unit: 'g' },
                    { item: 'jaja', quantity: 4, unit: '' },
                    { item: 'mlijeko', quantity: 100, unit: 'ml' },
                    { item: 'maslac', quantity: 100, unit: 'g' },
                    { item: 'prašak za pecivo', quantity: 1, unit: 'žličica' },
                    { item: 'jagode', quantity: 500, unit: 'g' },
                    { item: 'šećer u prahu', quantity: 0, unit: '' }
                ],
                instructions: [
                    'Izmiksajte jaja i šećer dok ne postane pjenasto.',
                    'Dodajte mlijeko i rastopljeni maslac, te brašno s praškom za pecivo.',
                    'Izlijte smjesu u kalup i rasporedite jagode po vrhu.',
                    'Pecite na 180°C oko 30 minuta.',
                    'Ohladite prije posipanja šećerom u prahu i serviranja.'
                ],
                difficulty: 'Easy'
            },
            {
                title: 'Limun kolač',
                description: 'Osvežavajući kolač s aromom limuna.',
                id: 10,
                noOfPeople: 10,
                time: 50,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 150, unit: 'g' },
                    { item: 'jaja', quantity: 4, unit: '' },
                    { item: 'mlijeko', quantity: 100, unit: 'ml' },
                    { item: 'maslac', quantity: 100, unit: 'g' },
                    { item: 'prašak za pecivo', quantity: 1, unit: 'žličica' },
                    { item: 'limun', quantity: 1, unit: '' },
                    { item: 'šećer u prahu', quantity: 0, unit: '' }
                ],
                instructions: [
                    'Izmiksajte jaja i šećer dok ne postane pjenasto.',
                    'Dodajte mlijeko i rastopljeni maslac, te brašno s praškom za pecivo.',
                    'Dodajte sok i koru limuna.',
                    'Izmiješajte dok ne dobijete glatku smjesu.',
                    'Istresite smjesu u kalup i pecite na 180°C oko 30 minuta.',
                    'Ohladite prije posipanja šećerom u prahu i serviranja.'
                ],
                difficulty: 'Easy'
            }
        ]
    },
    {
        categoryName: 'Cookies',
        recipes: [
            {
                title: 'Čokoladni keksi',
                description: 'Klasični keksi sa čokoladnim čipsom koji su hrskavi izvana i mekani iznutra.',
                id: 16,
                noOfPeople: 24,
                time: 30,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 300, unit: 'g' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 150, unit: 'g' },
                    { item: 'smeđi šećer', quantity: 100, unit: 'g' },
                    { item: 'jaja', quantity: 2, unit: '' },
                    { item: 'čokoladni komadići', quantity: 200, unit: 'g' },
                    { item: 'prašak za pecivo', quantity: 1, unit: 'žličica' },
                    { item: 'vanilin šećer', quantity: 1, unit: 'žličica' },
                    { item: 'sol', quantity: 1, unit: 'prstohvat' }
                ],
                instructions: [
                    'Izmiješajte maslac i šećere dok ne postanu pjenasti.',
                    'Dodajte jaja i vanilin šećer.',
                    'Dodajte brašno, prašak za pecivo i sol te dobro promiješajte.',
                    'Umiješajte čokoladne komadiće.',
                    'Oblikujte kuglice i stavite na pleh.',
                    'Pecite na 180°C oko 10-12 minuta.'
                ],
                difficulty: 'Easy'
            },
            {
                title: 'Oatmeal Raisin Cookies',
                description: 'Chewy cookies with oats and raisins.',
                id: 17,
                noOfPeople: 24,
                time: 30,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 150, unit: 'g' },
                    { item: 'zobene pahuljice', quantity: 200, unit: 'g' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 150, unit: 'g' },
                    { item: 'smeđi šećer', quantity: 100, unit: 'g' },
                    { item: 'jaja', quantity: 2, unit: '' },
                    { item: 'grožđice', quantity: 150, unit: 'g' },
                    { item: 'prašak za pecivo', quantity: 1, unit: 'žličica' },
                    { item: 'vanilin šećer', quantity: 1, unit: 'žličica' },
                    { item: 'cimet', quantity: 1, unit: 'žličica' },
                    { item: 'sol', quantity: 1, unit: 'prstohvat' }
                ],
                instructions: [
                    'Izmiješajte maslac i šećere dok ne postanu pjenasti.',
                    'Dodajte jaja i vanilin šećer.',
                    'Dodajte brašno, zobene pahuljice, prašak za pecivo, sol i cimet te dobro promiješajte.',
                    'Umiješajte grožđice.',
                    'Oblikujte kuglice i stavite na pleh.',
                    'Pecite na 180°C oko 10-12 minuta.'
                ],
                difficulty: 'Easy'
            },
            {
                title: 'Sugar Cookies',
                description: 'Soft and chewy sugar cookies, perfect for decorating.',
                id: 18,
                noOfPeople: 24,
                time: 60,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 300, unit: 'g' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 200, unit: 'g' },
                    { item: 'jaja', quantity: 2, unit: '' },
                    { item: 'prašak za pecivo', quantity: 1, unit: 'žličica' },
                    { item: 'vanilin šećer', quantity: 1, unit: 'žličica' },
                    { item: 'sol', quantity: 1, unit: 'prstohvat' }
                ],
                instructions: [
                    'Izmiješajte maslac i šećer dok ne postanu pjenasti.',
                    'Dodajte jaja i vanilin šećer.',
                    'Dodajte brašno, prašak za pecivo i sol te dobro promiješajte.',
                    'Oblikujte tijesto u disk, zamotajte i ohladite.',
                    'Razvaljajte tijesto i izrežite oblike.',
                    'Pecite na 180°C oko 8-10 minuta.',
                    'Ohladite i dekorirajte po želji.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Peanut Butter Cookies',
                description: 'Rich and crumbly cookies with a distinct peanut butter flavor.',
                id: 19,
                noOfPeople: 24,
                time: 30,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 200, unit: 'g' },
                    { item: 'maslac od kikirikija', quantity: 200, unit: 'g' },
                    { item: 'maslac', quantity: 100, unit: 'g' },
                    { item: 'šećer', quantity: 150, unit: 'g' },
                    { item: 'smeđi šećer', quantity: 100, unit: 'g' },
                    { item: 'jaja', quantity: 1, unit: '' },
                    { item: 'prašak za pecivo', quantity: 1, unit: 'žličica' },
                    { item: 'vanilin šećer', quantity: 1, unit: 'žličica' },
                    { item: 'sol', quantity: 1, unit: 'prstohvat' }
                ],
                instructions: [
                    'Izmiješajte maslac, maslac od kikirikija i šećere dok ne postanu pjenasti.',
                    'Dodajte jaje i vanilin šećer.',
                    'Dodajte brašno, prašak za pecivo i sol te dobro promiješajte.',
                    'Oblikujte kuglice i stavite na pleh.',
                    'Pritisnite kuglice vilicom da dobijete uzorak.',
                    'Pecite na 180°C oko 10-12 minuta.'
                ],
                difficulty: 'Easy'
            },
            {
                title: 'Gingerbread Cookies',
                description: 'Spiced cookies, perfect for the holiday season.',
                id: 20,
                noOfPeople: 24,
                time: 60,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: 300, unit: 'g' },
                    { item: 'maslac', quantity: 200, unit: 'g' },
                    { item: 'šećer', quantity: 100, unit: 'g' },
                    { item: 'med', quantity: 100, unit: 'ml' },
                    { item: 'jaja', quantity: 1, unit: '' },
                    { item: 'prašak za pecivo', quantity: 1, unit: 'žličica' },
                    { item: 'cimet', quantity: 2, unit: 'žličice' },
                    { item: 'đumbir u prahu', quantity: 1, unit: 'žličica' },
                    { item: 'klinčić u prahu', quantity: 1, unit: 'žličica' },
                    { item: 'sol', quantity: 1, unit: 'prstohvat' }
                ],
                instructions: [
                    'Izmiješajte maslac, šećer i med dok ne postanu pjenasti.',
                    'Dodajte jaje i začine.',
                    'Dodajte brašno, prašak za pecivo i sol te dobro promiješajte.',
                    'Oblikujte tijesto u disk, zamotajte i ohladite.',
                    'Razvaljajte tijesto i izrežite oblike.',
                    'Pecite na 180°C oko 8-10 minuta.',
                    'Ohladite i dekorirajte po želji.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Kokosovi keksi',
                description: 'Ukusni keksi sa slatkim kokosom, savršeni za uživanje uz čaj ili kavu.',
                id: 13,
                noOfPeople: 10,
                time: 35,
                img: '',
                ingredients: [
                { item: 'maslac', quantity: 1/2, unit: 'šalice' },
                { item: 'šećer', quantity: 1/2, unit: 'šalice' },
                { item: ' smeđi šećer', quantity: 1/2, unit: 'šalice' },
                { item: 'jaje', quantity: 1, unit: '' },
                { item: 'ekstrakt vanilije', quantity: 1, unit: 'žličica' },
                { item: 'pšenično brašno', quantity: 1, unit: 'šalice' },
                { item: 'soda bikarbona', quantity: 1/2, unit: 'žličice' },
                { item: 'kokos', quantity: 1, unit: 'šalice' }
                ],
                instructions: [
                'Zagrijte pećnicu na 175°C (350°F) i obložite lim za pečenje papirom za pečenje.',
                'U velikoj zdjeli, kremasto izmiješajte maslac, šećer i smeđi šećer dok ne postane glatko.',
                'Dodajte jaje i ekstrakt vanilije te dobro promiješajte.',
                'U drugoj zdjeli pomiješajte brašno i sodu bikarbonu; postupno dodajte smjesi od maslaca.',
                'Umiješajte kokos dok se ravnomjerno ne rasporedi.',
                'Žlicom oblikujte kuglice smjese i rasporedite ih na pripremljenom limu za pečenje.',
                'Pecite 10 do 12 minuta ili dok keksi ne budu lagano zlatno smeđi.',
                'Ohladite kekse na limu 5 minuta prije nego ih premjestite na žičani stalak da se potpuno ohlade.'
                ],
                difficulty: 'Srednje'
            },
            {
                title: 'Limunski keksi',
                description: 'Osvežavajući keksi s blagim okusom limuna, savršeni za ljetne dane.',
                id: 14,
                noOfPeople: 8,
                time: 30,
                img: '',
                ingredients: [
                { item: 'maslac', quantity: 1/2, unit: 'šalice' },
                { item: 'šećer u prahu', quantity: 1/2, unit: 'šalice' },
                { item: 'jaje', quantity: 1, unit: '' },
                { item: 'ekstrakt vanilije', quantity: 1, unit: 'žličica' },
                { item: 'pšenično brašno', quantity: 1, unit: 'šalice' },
                { item: 'limunova kora', quantity: 1, unit: '' },
                { item: 'limunov sok', quantity: 2, unit: 'žlice' },
                { item: 'soda bikarbona', quantity: 1/2, unit: 'žličice' }
                ],
                instructions: [
                'Zagrijte pećnicu na 175°C (350°F) i obložite lim za pečenje papirom za pečenje.',
                'U velikoj zdjeli, kremasto izmiješajte maslac i šećer u prahu dok ne postane glatko.',
                'Dodajte jaje i ekstrakt vanilije te dobro promiješajte.',
                'Dodajte limunovu koricu i sok te dobro promiješajte.',
                'U drugoj zdjeli pomiješajte brašno i sodu bikarbonu; postupno dodajte smjesi od maslaca.',
                'Žlicom oblikujte kuglice smjese i rasporedite ih na pripremljenom limu za pečenje.',
                'Pecite 10 do 12 minuta ili dok keksi ne budu lagano zlatno smeđi.',
                'Ohladite kekse na limu 5 minuta prije nego ih premjestite na žičani stalak da se potpuno ohlade.'
                ],
                difficulty: 'Srednje'
            },
            {
                title: 'Keksi od čokolade i badema',
                description: 'Bogati keksi od čokolade i hrskavih badema, savršeni uz šalicu toplog mlijeka.',
                id: 15,
                noOfPeople: 10,
                time: 35,
                img: '',
                ingredients: [
                { item: 'maslac', quantity: 1/2, unit: 'šalice' },
                { item: ' smeđi šećer', quantity: 1/2, unit: 'šalice' },
                { item: 'šećer', quantity: 1/4, unit: 'šalice' },
                { item: 'jaje', quantity: 1, unit:'' },
                { item: 'ekstrakt vanilije', quantity: 1, unit: 'žličica' },
                { item: 'pšenično brašno', quantity: 1, unit: 'šalice' },
                { item: 'kakao prah', quantity: 1/3, unit: 'šalice' },
                { item: 'soda bikarbona', quantity: 1/2, unit: 'žličice' },
                { item: 'sol', quantity: 1/4, unit: 'žličice' },
                { item: 'bademi (nasjeckani)', quantity: 1/2, unit: 'šalice' },
                { item: 'čokoladne kapi', quantity: 1/2, unit: 'šalice' }
                ],
                instructions: [
                'Zagrijte pećnicu na 175°C (350°F) i obložite lim za pečenje papirom za pečenje.',
                'U velikoj zdjeli, kremasto izmiješajte maslac, smeđi šećer i šećer dok ne postane glatko.',
                'Dodajte jaje i ekstrakt vanilije te dobro promiješajte.',
                'U drugoj zdjeli pomiješajte brašno, kakao prah, sodu bikarbonu i sol; postupno dodajte smjesi od maslaca.',
                'Umiješajte nasjeckane bademe i čokoladne kapi dok se ravnomjerno ne rasporede.',
                'Žlicom oblikujte kuglice smjese i rasporedite ih na pripremljenom limu za pečenje.',
                'Pecite 10 do 12 minuta ili dok keksi ne budu lagano zlatno smeđi.',
                'Ohladite kekse na limu 5 minuta prije nego ih premjestite na žičani stalak da se potpuno ohlade.'
                ],
                difficulty: 'Srednje'
            }
        ]
    }
];

export default RECIPE_DATA;
