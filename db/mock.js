const imdbList = [
  {
    title: 'La lista de Schindler',
    details: '19933h 15m12Biography, Drama, History',
  },
  {
    title: 'Magnolia',
    details: '19993h 8m18Drama',
  },
  {
    title: 'Snatch, cerdos y diamantes',
    details: '20001h 44m18Comedy, Crime',
  },
  {
    title: 'Amelie',
    details: '20012h 2mAComedy, Romance',
  },
  {
    title: 'L.A. Confidential',
    details: '19972h 18m18Crime, Drama, Mystery',
  },
  {
    title: 'Restless',
    details: '20111h 31m7Drama, Romance',
  },
  {
    title: 'Inocencia interrumpida',
    details: '19992h 7m18Biography, Drama',
  },
  {
    title: 'Mi pie izquierdo',
    details: '19891h 43mBiography, Drama',
  },
  {
    title: 'Pi, fe en el caos',
    details: '19981h 24m13Drama, Horror, Mystery',
  },
  {
    title: 'Trabajo basura',
    details: '19991h 29mAComedy',
  },
  {
    title: 'Blade Runner',
    details: '19821h 57m13Action, Drama, Sci-Fi',
  },
  {
    title: 'The Leftovers',
    details: '2014-2017TV Series28eps18Drama, Fantasy, Mystery',
  },
  {
    title: 'Fleabag',
    details: '2016-TV Series12eps18Comedy, Drama',
  },
  {
    title: 'Veep',
    details: '2012-2019TV Series65eps12Comedy',
  },
  {
    title: 'Rockefeller Plaza',
    details: '2006-2013TV Series138eps7Comedy',
  },
  {
    title: 'The Americans',
    details: '2013-2018TV Series75eps16Crime, Drama, Mystery',
  },
  {
    title: 'El asesinato de Jesse James por el cobarde Robert Ford',
    details: '20072h 40m12Biography, Crime, Drama',
  },
  {
    title: '1917',
    details: '20191h 59m12Action, Drama, War',
  },
  {
    title: 'Demon Slayer: Kimetsu no Yaiba',
    details: '2019-TV Series44epsNot RatedAnimation, Action, Adventure',
  },
  {
    title: 'La semilla del diablo',
    details: '19682h 17m18Drama, Horror',
  },
  {
    title: 'La matanza de Texas',
    details: '19741h 23m18Horror',
  },
  {
    title: 'Suspiria',
    details: '20182h 32m18Drama, Fantasy, Horror',
  },
  {
    title: 'El espinazo del diablo',
    details: '20011h 46m13Drama, Horror, Thriller',
  },
  {
    title: 'La profecía',
    details: '19761h 51m18Horror, Mystery',
  },
  {
    title: 'Titanes: Hicieron historia',
    details: '20001h 53m7Biography, Drama, Sport',
  },
  {
    title: 'Mi vecino Totoro',
    details: '19881h 26mAAnimation, Comedy, Family',
  },
  {
    title: 'Primal',
    details: '2019-TV Series11eps12Animation, Action, Adventure',
  },
  {
    title: 'Upright',
    details: '2019-TV Series9eps16Comedy, Drama',
  },
  {
    title: 'Valley of Tears',
    details: '2020-2020TV Series10eps16Drama, War',
  },
  {
    title: 'La línea invisible',
    details: '2020-2020TV Series6eps16Drama, History',
  },
  {
    title: 'Richard Jewell',
    details: '20192h 11m12Biography, Crime, Drama',
  },
  {
    title: 'Una gran mujer (Beanpole)',
    details: '20192h 10m12Drama, War',
  },
  {
    title: 'Kiss Kiss, Bang Bang',
    details: '20051h 43mRComedy, Crime, Mystery',
  },
  {
    title: 'Nunca, casi nunca, a veces, siempre',
    details: '20201h 41m16Drama',
  },
  {
    title: 'Yo, Daniel Blake',
    details: '20161h 40m7Drama',
  },
  {
    title: 'Burning',
    details: '20182h 28m12Drama, Mystery, Thriller',
  },
  {
    title: 'Jujutsu Kaisen',
    details: '2020-TV Series24epsAnimation, Action, Adventure',
  },
  {
    title: 'Hunter x Hunter',
    details: '2011-2014TV Series148epsAnimation, Action, Adventure',
  },
  {
    title: 'Una joven prometedora',
    details: '20201h 53m16Crime, Drama, Mystery',
  },
  {
    title: 'Steins;Gate',
    details: '2011-2015TV Series26eps12Animation, Comedy, Drama',
  },
  {
    title: 'X+Y',
    details: '20141h 51mPG-13Drama, Romance',
  },
  {
    title: 'Doctor Who',
    details: '2005-TV Series200eps13Adventure, Drama, Sci-Fi',
  },
  {
    title: 'El alquimista de acero',
    details: '2003-2004TV Series51eps13Animation, Action, Adventure',
  },
  {
    title: 'Faster, Pussycat! Kill! Kill!',
    details: '19651h 23mAction, Comedy',
  },
  {
    title: 'Tetsuo, el hombre de hierro',
    details: '19891h 7m18Horror, Sci-Fi',
  },
  {
    title: 'Nunca me abandones',
    details: '20101h 43m7Drama, Romance, Sci-Fi',
  },
  {
    title: 'El funeral',
    details: '19961h 39m18Crime, Drama',
  },
  {
    title: 'Crash',
    details: '19961h 40m18Drama',
  },
  {
    title: 'Carretera perdida',
    details: '19972h 14m18Mystery, Thriller',
  },
  {
    title: 'Bottlerocket (Ladrón que roba a ladrón)',
    details: '19961h 31mAComedy, Crime, Drama',
  },
  {
    title: 'Antes de amanecer',
    details: '19951h 41mTDrama, Romance',
  },
  {
    title: 'Traidor en el infierno',
    details: '19532hComedy, Drama, War',
  },
  {
    title: 'El fuego y la palabra',
    details: '19602h 26m18Drama',
  },
  {
    title: '¿Teléfono rojo? Volamos hacia Moscú',
    details: '19641h 35m18Comedy, War',
  },
  {
    title: 'Toro salvaje',
    details: '19802h 9m13Biography, Drama, Sport',
  },
  {
    title: 'Half Nelson',
    details: '20061h 46mRDrama',
  },
  {
    title: 'Manchester frente al mar',
    details: '20162h 17m12Drama',
  },
  {
    title: 'Miedo y asco en Las Vegas',
    details: '19981h 58m18Adventure, Comedy, Drama',
  },
  {
    title: 'Donnie Brasco',
    details: '19972h 7m18Biography, Crime, Drama',
  },
  {
    title: 'Good Time',
    details: '20171h 42m16Crime, Drama, Thriller',
  },
  {
    title: 'Old Boy',
    details: '20032h18Action, Drama, Mystery',
  },
  {
    title: 'Nightcrawler',
    details: '20141h 57m12Crime, Drama, Thriller',
  },
  {
    title: '¿A quién ama Gilbert Grape?',
    details: '19931h 58mADrama',
  },
  {
    title: 'Judas y el mesías negro',
    details: '20212h 6m16Biography, Drama, History',
  },
  {
    title: 'El padre',
    details: '20201h 37m7Drama, Mystery',
  },
  {
    title: 'Re: Zero - Empezar de cero en un mundo diferente',
    details: '2016-TV Series78eps16Animation, Adventure, Drama',
  },
  {
    title: 'The Rising of the Shield Hero',
    details: '2019-TV Series38epsNot RatedAnimation, Action, Adventure',
  },
  {
    title: 'Mulholland Drive',
    details: '20012h 27m18Drama, Mystery, Thriller',
  },
  {
    title: 'Midnight in Paris',
    details: '20111h 34mAComedy, Fantasy, Romance',
  },
  {
    title: 'Yo, él y Raquel',
    details: '20151h 45m12Comedy, Drama',
  },
  {
    title: 'Twin Peaks',
    details: '1990-1991TV Series30eps13Crime, Drama, Mystery',
  },
  {
    title: 'Perfect Blue',
    details: '19971h 21m18Animation, Crime, Drama',
  },
  {
    title: 'Golden Boy: Sasurai no o-benkyô yarô',
    details: '1995-1996TV Series6eps18Animation, Comedy',
  },
  {
    title: 'Heridas abiertas',
    details: '2018-2018TV Series8eps18Crime, Drama, Mystery',
  },
  {
    title: 'Terciopelo azul',
    details: '19862h18Crime, Drama, Mystery',
  },
  {
    title: 'El cazador',
    details: '19783h 3m18Drama, War',
  },
  {
    title: 'Antrum: The Deadliest Film Ever Made',
    details: '20181h 35mHorror',
  },
  {
    title: 'Contra el imperio de la droga',
    details: '19711h 44m18Action, Crime, Drama',
  },
  {
    title: 'Sobran las palabras',
    details: '20131h 33m7Comedy, Drama, Romance',
  },
  {
    title: 'Lilyhammer',
    details: '2012-2014TV Series24eps16Comedy, Crime, Drama',
  },
  {
    title: 'Un lugar tranquilo',
    details: '20181h 30m16Drama, Horror, Sci-Fi',
  },
  {
    title: 'Halston',
    details: '2021-2021TV Series5eps16Biography, Drama',
  },
  {
    title: 'Maestro del crimen',
    details: '20172h 1m16Crime, Drama, Thriller',
  },
  {
    title: 'Cómo conocí a vuestra madre',
    details: '2005-2014TV Series208eps13Comedy, Romance',
  },
  {
    title: 'This Is Us',
    details: '2016-2022TV Series106eps12Comedy, Drama, Romance',
  },
  {
    title: 'Jackie Brown',
    details: '19972h 34m13Crime, Drama, Thriller',
  },
  {
    title: 'Asesinos natos',
    details: '19941h 59m18Action, Crime, Drama',
  },
  {
    title: 'Ellos no envejecerán',
    details: '20181h 39mRDocumentary, History, War',
  },
  {
    title: 'La isla del Dr. Moreau',
    details: '19961h 36m13Horror, Sci-Fi, Thriller',
  },
  {
    title: 'Years and Years',
    details: '2019-2019TV Series6eps16Drama, Sci-Fi',
  },
  {
    title: 'Vientos de agua',
    details: '2006-2006TV Series14epsDrama',
  },
  {
    title: 'Bala Loca',
    details: '2016-2016TV Series10epsCrime, Drama',
  },
  {
    title: 'Solo asesinatos en el edificio',
    details: '2021-TV Series21eps12Comedy, Crime, Drama',
  },
  {
    title: 'Condena',
    details: '2021-TV Series6eps16Crime, Drama',
  },
  {
    title: 'Nuevo sabor a cereza',
    details: '2021-2021TV Series8eps18Drama, Horror, Mystery',
  },
  {
    title: 'Arcane',
    details: '2021-TV Series10eps16Animation, Action, Adventure',
  },
  {
    title: 'Misa de medianoche',
    details: '2021-2021TV Series7eps16Drama, Fantasy, Horror',
  },
  {
    title: 'Small Axe',
    details: '2020-2020TV Series5eps16Drama, History',
  },
  {
    title: 'Biutiful',
    details: '20102h 28m12Drama, Romance',
  },
  {
    title: 'Una historia de Brooklyn',
    details: '20051h 21m12Comedy, Drama',
  },
  {
    title: 'Muerte entre las flores',
    details: '19901h 55m18Crime, Drama, Thriller',
  },
  {
    title: 'A propósito de Llewyn Davis',
    details: '20131h 44m12Comedy, Drama, Music',
  },
  {
    title: 'Barton Fink',
    details: '19911h 56m18Comedy, Drama, Thriller',
  },
  {
    title: 'El gran salto',
    details: '19941h 51m13Comedy, Drama, Fantasy',
  },
  {
    title: 'Sangre fácil',
    details: '19841h 39m18Crime, Drama, Thriller',
  },
  {
    title: 'O Brother!',
    details: '20001h 47mAAdventure, Comedy, Crime',
  },
  {
    title: 'Quemar después de leer',
    details: '20081h 36m13Comedy, Crime, Drama',
  },
  {
    title: 'Valor de ley',
    details: '20101h 50m7Drama, Western',
  },
  {
    title: 'El atlas de las nubes',
    details: '20122h 52m16Drama, Mystery, Sci-Fi',
  },
  {
    title: 'Pulp Fiction',
    details: '19942h 34m18Crime, Drama',
  },
  {
    title: 'El castor',
    details: '20111h 31m7Drama',
  },
  {
    title: 'Una oración antes del amanecer',
    details: '20171h 56m18Action, Biography, Crime',
  },
  {
    title: 'Platoon',
    details: '19862h18Drama, War',
  },
  {
    title: 'Lo que hacemos en las sombras',
    details: '2019-TV Series42eps16Comedy, Fantasy, Horror',
  },
  {
    title: 'Érase una vez en América',
    details: '19843h 49m18Crime, Drama',
  },
  {
    title: 'Amor a quemarropa',
    details: '19931h 59m18Crime, Drama, Romance',
  },
  {
    title: 'Arrested Development',
    details: '2003-2019TV Series84eps13Comedy',
  },
  {
    title: 'Movida del 76',
    details: '19931h 43m18Comedy',
  },
  {
    title: 'Parks and Recreation',
    details: '2009-2015TV Series124eps16Comedy',
  },
  {
    title: 'Modern Family',
    details: '2009-2020TV Series250eps13Comedy, Drama, Romance',
  },
  {
    title: 'Los informáticos',
    details: '2006-2013TV Series25eps13Comedy',
  },
  {
    title: 'Community',
    details: '2009-2015TV Series110eps13Comedy',
  },
  {
    title: 'Misfits',
    details: '2009-2013TV Series38eps18Comedy, Drama, Fantasy',
  },
  {
    title: 'Taboo',
    details: '2017-TV Series16eps16Drama, Mystery, Thriller',
  },
  {
    title: 'Mildred Pierce',
    details: '2011-2011TV Series5eps18Drama',
  },
  {
    title: 'True Blood',
    details: '2008-2014TV Series81eps18Drama, Fantasy, Mystery',
  },
  {
    title: 'Across the Universe',
    details: '20072h 13m7Drama, Fantasy, History',
  },
  {
    title: 'Los ojos de Tammy Faye',
    details: '20212h 6m12Biography, Drama, Romance',
  },
  {
    title: 'La noche más oscura',
    details: '20122h 37m16Drama, History, Thriller',
  },
  {
    title: 'Mamá',
    details: '20131h 40m12Fantasy, Horror, Thriller',
  },
  {
    title: 'El ciudadano ilustre',
    details: '20161h 58m12Comedy, Drama',
  },
  {
    title: 'Madre!',
    details: '20172h 1m16Drama, Horror, Mystery',
  },
  {
    title: 'El callejón de las almas perdidas',
    details: '20212h 30m16Crime, Drama, Thriller',
  },
  {
    title: 'Louie',
    details: '2010-2015TV Series61epsComedy, Drama',
  },
  {
    title: '8 millas',
    details: '20021h 50m18Drama, Music',
  },
  {
    title: 'El graduado',
    details: '19671h 46m16Comedy, Drama, Romance',
  },
  {
    title: 'La ventana indiscreta',
    details: '19541h 52mAMystery, Thriller',
  },
  {
    title: 'Boogie Nights',
    details: '19972h 35m18Drama',
  },
  {
    title: 'Annie Hall',
    details: '19771h 33m18Comedy, Romance',
  },
  {
    title: 'El faro',
    details: '20191h 49m16Drama, Fantasy, History',
  },
  {
    title: 'Start-Up',
    details: '2020-TV Series16eps12Comedy, Drama, Romance',
  },
  {
    title: 'Cowboy Bebop',
    details: '1998-1999TV Series26eps16Animation, Action, Adventure',
  },
  {
    title: 'Devilman: Crybaby',
    details: '2018-2018TV Series10epsAnimation, Action, Drama',
  },
  {
    title: 'Embriagado de amor',
    details: '20021h 35m13Comedy, Drama, Romance',
  },
  {
    title: 'Vivir es fácil con los ojos cerrados',
    details: '20131h 48mAComedy, Drama',
  },
  {
    title: 'Durarara!!',
    details: '2010-2010TV Series26epsAnimation, Comedy, Crime',
  },
  {
    title: 'El gigante de hierro',
    details: '19991h 26mAAnimation, Action, Adventure',
  },
  {
    title: 'Usagi doroppu',
    details: '2011-2012TV Series15epsAnimation, Comedy, Drama',
  },
  {
    title: 'Ghost in the Shell',
    details: '19951h 23m18Animation, Action, Crime',
  },
  {
    title: 'Baccano!',
    details: '2007-2008TV Series16epsAnimation, Action, Adventure',
  },
  {
    title: 'Berserk',
    details: '1997-1998TV Series25eps18Animation, Action, Adventure',
  },
  {
    title: 'La gran apuesta',
    details: '20152h 10m12Biography, Comedy, Drama',
  },
  {
    title: 'Kin',
    details: '201715mShort, Drama',
  },
  {
    title: 'Jerry & Marge Go Large',
    details: '20221h 36mPG-13Biography, Comedy, Drama',
  },
];
