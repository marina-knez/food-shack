const RECIPE_DATA = [
    {
        categoryName: 'Pastries',
        recipes: [
            {
                title: 'Pogačice s čvarcima',
                id: 1,
                noOfPeople: 8,
                time: 90,
                img: '',
                ingredients: [
                    { item: 'brašna za dizano tijesto', quantity: '1', unit: 'kg' },
                    { item: 'mlijeka', quantity: '3.5', unit: 'dcl' },
                    { item: 'svježi kvasac', quantity: '1', unit: '' },
                    { item: 'ulja', quantity: '1', unit: 'dcl' },
                    { item: 'šećera', quantity: '1', unit: 'žlica' },
                    { item: 'soli', quantity: '1-2', unit: 'žlice' },
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
                id: 2,
                noOfPeople: 6,
                time: 45,
                img: '',
                ingredients: [
                    { item: 'brašna', quantity: '500', unit: 'g' },
                    { item: 'jaja', quantity: '4', unit: '' },
                    { item: 'šećer', quantity: '100', unit: 'g' },
                    { item: 'vrhnje', quantity: '100', unit: 'ml' },
                    { item: 'rakija', quantity: '1', unit: 'žlica' },
                    { item: 'korica limuna', quantity: '1', unit: '' }
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
                id: 3,
                noOfPeople: 12,
                time: 180,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: '500', unit: 'g' },
                    { item: 'mlijeko', quantity: '3', unit: 'dcl' },
                    { item: 'maslac', quantity: '250', unit: 'g' },
                    { item: 'kvasac', quantity: '1', unit: 'paketić' },
                    { item: 'šećer', quantity: '50', unit: 'g' },
                    { item: 'sol', quantity: '1', unit: 'žličica' }
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
            }
        ]
    },
    {
        categoryName: 'Cookies',
        recipes: [
            {
                title: 'Čokoladni kolačići',
                id: 1,
                noOfPeople: 24,
                time: 45,
                img: '',
                ingredients: [
                    { item: 'brašna za kolače', quantity: '2.25', unit: 'šalice' },
                    { item: 'soda bikarbona', quantity: '1', unit: 'žličica' },
                    { item: 'sol', quantity: '0.5', unit: 'žličica' },
                    { item: 'maslac', quantity: '1', unit: 'šalica' },
                    { item: 'šećer', quantity: '0.75', unit: 'šalica' },
                    { item: 'smeđi šećer', quantity: '0.75', unit: 'šalica' },
                    { item: 'ekstrakt vanilije', quantity: '1', unit: 'žličica' },
                    { item: 'jaja', quantity: '2', unit: '' },
                    { item: 'čokoladne kapljice', quantity: '2', unit: 'šalice' },
                ],
                instructions: [
                    'Zagrijte pećnicu na 190°C.',
                    'Pomiješajte brašno, sodu bikarbonu i sol u maloj zdjeli.',
                    'U velikoj zdjeli izmiksajte maslac, šećer, smeđi šećer i ekstrakt vanilije dok smjesa ne postane kremasta.',
                    'Dodajte jaja jedno po jedno, dobro miješajući nakon svakog dodavanja.',
                    'Postupno dodajte smjesu s brašnom. Umiješajte čokoladne kapljice.',
                    'Stavljajte po jednu žlicu tijesta na neprianjajući papir za pečenje.',
                    'Pecite 9 do 11 minuta ili dok kolačići ne postanu zlatno smeđi.'
                ],
                difficulty: 'Easy'
            },
            {
                title: 'Vanilin kiflice',
                id: 2,
                noOfPeople: 20,
                time: 60,
                img: '',
                ingredients: [
                    { item: 'brašna', quantity: '300', unit: 'g' },
                    { item: 'maslaca', quantity: '200', unit: 'g' },
                    { item: 'šećera u prahu', quantity: '100', unit: 'g' },
                    { item: 'mljevenih oraha', quantity: '100', unit: 'g' },
                    { item: 'vanilin šećer', quantity: '1', unit: 'paketić' },
                    { item: 'jaje', quantity: '1', unit: '' }
                ],
                instructions: [
                    'Umijesite sve sastojke u glatko tijesto.',
                    'Ostavite tijesto u hladnjaku 30 minuta.',
                    'Oblikujte kiflice i pecite ih na 180°C oko 10-15 minuta.',
                    'Još tople kiflice uvaljajte u šećer u prahu pomiješan s vanilin šećerom.'
                ],
                difficulty: 'Medium'
            }
        ]
    },
    {
        categoryName: 'Desserts',
        recipes: [
            {
                title: 'Kremšnite',
                id: 1,
                noOfPeople: 12,
                time: 120,
                img: '',
                ingredients: [
                    { item: 'lisnato tijesto', quantity: '500', unit: 'g' },
                    { item: 'mlijeko', quantity: '1', unit: 'l' },
                    { item: 'jaja', quantity: '6', unit: '' },
                    { item: 'šećer', quantity: '200', unit: 'g' },
                    { item: 'brašno', quantity: '100', unit: 'g' },
                    { item: 'vanilin šećer', quantity: '2', unit: 'paketića' }
                ],
                instructions: [
                    'Razvaljajte lisnato tijesto i pecite na 200°C dok ne postane zlatno smeđe.',
                    'Zakuhajte mlijeko s vanilin šećerom.',
                    'Umiješajte žumanjke sa šećerom i brašnom te dodajte u mlijeko.',
                    'Kuhajte dok se smjesa ne zgusne.',
                    'Istucite bjelanjke u čvrst snijeg i umiješajte u vruću kremu.',
                    'Ohlađeni lisnati biskvit prelijte kremom i ostavite da se ohladi.'
                ],
                difficulty: 'Hard'
            },
            {
                title: 'Fritule',
                id: 2,
                noOfPeople: 10,
                time: 60,
                img: '',
                ingredients: [
                    { item: 'brašna', quantity: '500', unit: 'g' },
                    { item: 'mlijeka', quantity: '2', unit: 'dcl' },
                    { item: 'jaja', quantity: '3', unit: '' },
                    { item: 'kvasac', quantity: '1', unit: 'paketić' },
                    { item: 'šećer', quantity: '100', unit: 'g' },
                    { item: 'rakija', quantity: '1', unit: 'žlica' },
                    { item: 'korica limuna', quantity: '1', unit: '' }
                ],
                instructions: [
                    'Pomiješajte sve sastojke i ostavite da tijesto naraste.',
                    'Žlicom oblikujte fritule i pržite ih u dubokom ulju.',
                    'Pospite šećerom u prahu prije serviranja.'
                ],
                difficulty: 'Medium'
            },
            {
                title: 'Medeni kolač',
                id: 3,
                noOfPeople: 20,
                time: 90,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: '500', unit: 'g' },
                    { item: 'med', quantity: '200', unit: 'g' },
                    { item: 'šećer', quantity: '100', unit: 'g' },
                    { item: 'maslac', quantity: '100', unit: 'g' },
                    { item: 'jaja', quantity: '3', unit: '' },
                    { item: 'mlijeko', quantity: '2', unit: 'dcl' },
                    { item: 'soda bikarbona', quantity: '1', unit: 'žličica' }
                ],
                instructions: [
                    'Pomiješajte sve sastojke u homogenu smjesu.',
                    'Izlijte smjesu u kalup za pečenje.',
                    'Pecite na 180°C oko 30-40 minuta.',
                    'Ohlađeni kolač prelijte glazurom po želji.'
                ],
                difficulty: 'Easy'
            },
            {
                title: 'Baklava',
                id: 4,
                noOfPeople: 12,
                time: 120,
                img: '',
                ingredients: [
                    { item: 'tanko tijesto za savijače', quantity: '500', unit: 'g' },
                    { item: 'orah', quantity: '300', unit: 'g' },
                    { item: 'šećer', quantity: '200', unit: 'g' },
                    { item: 'maslac', quantity: '200', unit: 'g' },
                    { item: 'med', quantity: '200', unit: 'g' },
                    { item: 'voda', quantity: '2', unit: 'dcl' }
                ],
                instructions: [
                    'Slagati tijesto i premazivati otopljenim maslacem.',
                    'Svaki treći sloj posuti mljevenim orasima i šećerom.',
                    'Narezati na rombove i peći na 180°C oko 45 minuta.',
                    'Zagrijati vodu s medom i preliti preko vruće baklave.'
                ],
                difficulty: 'Hard'
            },
            {
                title: 'Pita od jabuka',
                id: 5,
                noOfPeople: 8,
                time: 90,
                img: '',
                ingredients: [
                    { item: 'brašno', quantity: '300', unit: 'g' },
                    { item: 'maslac', quantity: '200', unit: 'g' },
                    { item: 'šećer', quantity: '100', unit: 'g' },
                    { item: 'jabuke', quantity: '1', unit: 'kg' },
                    { item: 'cimet', quantity: '1', unit: 'žličica' },
                    { item: 'limunov sok', quantity: '1', unit: 'žlica' }
                ],
                instructions: [
                    'Izmrvite maslac u brašno i šećer dok ne dobijete mrvičasto tijesto.',
                    'Dodajte malo vode da dobijete glatko tijesto.',
                    'Razvaljajte tijesto i stavite u kalup za pitu.',
                    'Narežite jabuke i pomiješajte ih s cimetom i limunovim sokom.',
                    'Posložite jabuke po tijestu i prekrijte drugim slojem tijesta.',
                    'Pecite na 180°C oko 45 minuta dok pita ne postane zlatno smeđa.'
                ],
                difficulty: 'Medium'
            }
        ]
    },
    {
        categoryName: 'Cakes',
        recipes: [
            {
                title: 'Sacher torta',
                id: 1,
                noOfPeople: 12,
                time: 150,
                img: '',
                ingredients: [
                    { item: 'maslac', quantity: '150', unit: 'g' },
                    { item: 'šećer', quantity: '150', unit: 'g' },
                    { item: 'čokolada za kuhanje', quantity: '200', unit: 'g' },
                    { item: 'jaja', quantity: '6', unit: '' },
                    { item: 'brašno', quantity: '150', unit: 'g' },
                    { item: 'džem od marelice', quantity: '200', unit: 'g' },
                    { item: 'vrhnje za šlag', quantity: '200', unit: 'ml' }
                ],
                instructions: [
                    'Izmiksajte maslac sa šećerom.',
                    'Otopite čokoladu i dodajte smjesi.',
                    'Dodajte žumanjke jedan po jedan.',
                    'Umiješajte brašno i snijeg od bjelanjaka.',
                    'Pecite na 180°C oko 60 minuta.',
                    'Ohlađeni biskvit prerežite na pola i premažite džemom od marelice.',
                    'Premažite cijelu tortu glazurom od čokolade i vrhnja.'
                ],
                difficulty: 'Hard'
            }
        ]
    }
];

export default RECIPE_DATA;
