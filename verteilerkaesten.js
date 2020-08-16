const baseURL = "https://www.spieleclub-paderborn.de/verteilerkaesten/Thumbnails/";


class Kasten {
  constructor(lat, lng, address, index) {
    this.position = [lat, lng];
    this.address = address;
    this.index = index;
  }

  getHtml() {
    return "<img src=\"" + baseURL + this.index + ".jpg\" alt=\"" + this.address + "\" width=\"180px\" height=\"180px\"/><br/><font face=\"Helvetica\" size=\"2\">" + this.address + "</font>";
  }
}

let kaesten = [
  new Kasten(51.7242, 8.744376, "Fürstenweg, Ecke Rolandsweg", 2),
  new Kasten(51.7165, 8.7536, "Jühenplatz", 3),
  new Kasten(51.718177, 8.747545, "Marienstraße, Ecke Friedrichstraße", 4),
  new Kasten(51.7207, 8.7617, "Gierswall, Ecke Driburger Straße", 5),
  new Kasten(51.7217, 8.7639, "Penzlinger Straße, Ecke Dörener Weg", 6),
  new Kasten(51.7217, 8.7635, "Penzlinger Straße, Ecke Dörener Weg", 7),
  new Kasten(51.722390, 8.766900, "Benhauser Straße", 8),
  new Kasten(51.720450, 8.761450, "Giersstraße, Ecke Gierswall", 9),
  new Kasten(51.716120, 8.759790, "Liboriberg, Ecke Kassler Straße", 10),
  new Kasten(51.715330, 8.758790, "Leostraße, Ecke Kassler Tor", 12),
  new Kasten(51.715990, 8.758700, "Liboriberg", 13),
  new Kasten(51.715420, 8.755140, "Liboriberg", 14),
  new Kasten(51.715220, 8.748240, "Le-Mans-Wall", 15),
  new Kasten(51.715190, 8.748700, "Le-Mans-Wall", 16),
  new Kasten(51.715260, 8.747480, "Le-Mans-Wall", 17),
  new Kasten(51.714040, 8.741890, "Bahnhofstraße, Ecke Grunigerstraße", 19),
  new Kasten(51.714140, 8.741830, "Bahnhofstraße, Ecke Grunigerstraße", 20),
  new Kasten(51.713630, 8.738070, "Rathenaustraße, Ecke Aldegreverstraße", 21),
  new Kasten(51.716150, 8.739460, "Riemekestraße, Ecke Personstraße", 22),
  new Kasten(51.718100, 8.743670, "Imadstraße, Ecke Ferdinandstraße", 23),
  new Kasten(51.720790, 8.741920, "Jahnplatz", 24),
  new Kasten(51.724510, 8.744480, "Rolandsweg, Ecke Fürstenweg", 25),
  new Kasten(51.725890, 8.752790, "Schützenweg, Ecke Rolandsweg", 26),
  new Kasten(51.724560, 8.757800, "Tegelweg", 27),
  new Kasten(51.725180, 8.750900, "Rolandsweg", 28),
  new Kasten(51.718720, 8.747210, "Friedrichstraße", 29),
  new Kasten(51.714450, 8.745880, "Borchener Straße, Ecke Eckstraße", 30),
  new Kasten(51.713870, 8.752580, "Karlstraße, Ecke Kilianstraße", 32),
  new Kasten(51.716341, 8.755157, "Kamp, vor dem Theodorianum", 33),
  new Kasten(51.718760, 8.758800, "Alte Synagoge, Am Busdorf", 34),
  new Kasten(51.719410, 8.758240, "Heiersstraße, Ecke Gierstraße", 35),
  new Kasten(51.718561, 8.756447, "Domplatz", 36),
  new Kasten(51.724320, 8.737060, "Neuhäuser Straße, gegenber Elsener Straße", 37),
  new Kasten(51.727400, 8.733170, "Neuhäuser Straße", 38),
  new Kasten(51.726110, 8.731180, "Elsener Straße", 39),
  new Kasten(51.725110, 8.734300, "Elsener Straße", 40),
  new Kasten(51.723630, 8.738280, "Neuhäuser Straße, Ecke Rathenaustraße", 41),
  new Kasten(51.715810, 8.733040, "Riemekestraße, Ecke Balhornstraße", 42),
  new Kasten(51.715780, 8.730480, "Riemekestraße, Ecke Erzbergerstraße", 43),
  new Kasten(51.714970, 8.758630, "Husener Straße, Ecke Leostraße", 44),
  new Kasten(51.711020, 8.760410, "Husener Straße, beim Brüderkrankenhaus", 45),
  new Kasten(51.710510, 8.760910, "Husener Straße", 46),
  new Kasten(51.708750, 8.762240, "Husener Straße", 47),
  new Kasten(51.703590, 8.766040, "Husener Straße, über den Südring", 48),
  new Kasten(51.711590, 8.772460, "Warburger Straße, Ecke an der schönen Aussicht", 49),
  new Kasten(51.715020, 8.768410, "Am Hilligenbusch, Nähe am Bahneinschnitt", 50),
  new Kasten(51.726360, 8.774330, "Benhauser Straße, Ecke Engernweg", 51),
  new Kasten(51.731040, 8.785210, "Steubenstraße", 52),
  new Kasten(51.731910, 8.784450, "Steubenstraße, Ecke Sennefelderstraße", 53),
  new Kasten(51.734310, 8.780810, "Steubenstraße, Ecke im Dörener Feld", 55),
  new Kasten(51.717059, 8.754902, "Kötterhagen", 56),
  new Kasten(51.719420, 8.747760, "Friedrichstraße", 57),
  new Kasten(51.731270, 8.738990, "Fürstenallee", 58),
  new Kasten(51.732210, 8.737030, "Fürstenallee", 59),
  new Kasten(51.713430, 8.740180, "Vor dem Hauptbahnhof", 60),
  new Kasten(51.714700, 8.738390, "Aldegreverstraße", 61),
  new Kasten(51.717720, 8.737340, "Im Riemekepark", 63),
  new Kasten(51.726850, 8.733860, "Neuhäuser Straße 87", 64),
  new Kasten(51.722480, 8.754230, "Hathumarstraße, Ecke Heiersmauer", 65),
  new Kasten(51.737990, 8.786670, "Georg-Marshall-Ring, Ecke Im Dörener Feld", 66),
  new Kasten(51.738890, 8.789110, "Im Dörener Feld", 68),
  new Kasten(51.726550, 8.791270, "Karl-Schurz-Straße, gegenüber Friedrich-List-Straße", 69),
  new Kasten(51.724910, 8.794500, "Karl-Schurz-Straße, Ecke Randebrockstraße", 70),
  new Kasten(51.721510, 8.746850, "Neuhäuser Straße, Ecke Paderstraße", 71),
  new Kasten(51.720180, 8.749670, "Kuhgasse, Ecke Königstraße", 72),
  new Kasten(51.719300, 8.748930, "Königstraße", 73),
  new Kasten(51.716340, 8.745260, "Füstenbergstraße", 74),
  new Kasten(51.715640, 8.745380, "Durchgang von der Riemekestraße zum Westerntor", 75),
  new Kasten(51.714410, 8.745970, "Borchenerstraße, Ecke Eckstraße", 76),
  new Kasten(51.711450, 8.746690, "Querweg, Ecke Borchener Straße", 77),
  new Kasten(51.710254, 8.749361, "Querweg, Ecke Albinstraße", 78),
  new Kasten(51.704760, 8.760090, "Kilianstraße, fast ganz oben", 79),
  new Kasten(51.711109, 8.75557, "Kilianstraße 51", 80),
  new Kasten(51.711780, 8.759860, "Husener Straße", 81),
  new Kasten(51.721500, 8.757360, "Uhlenstraße, Ecke Heiersstraße", 82),
  new Kasten(51.720510, 8.755870, "Thisaut", 83),
  new Kasten(51.720600, 8.755520, "Hathumarstraße, Ende Richtung Dom", 84),
  new Kasten(51.723800, 8.755850, "Am Bischofsteich, Ecke Hillebrandstraße", 85),
  new Kasten(51.726590, 8.761400, "Detmolder Straße, beim Bahnübergang", 86),
  new Kasten(51.729830, 8.763530, "Detmolder Straße, Engernweg", 87),
  new Kasten(51.731510, 8.764660, "Detmolder Straße", 88),
  new Kasten(51.721971, 8.751458, "Rechts neben dem Eingang der Paderhalle", 89),
  new Kasten(51.716361, 8.749709, "Franziskanergasse, Ecke Westernstraße", 90),
  new Kasten(51.71662, 8.755192, "Klingelgasse (2006)", 91),
  new Kasten(51.715550, 8.746140, "Westerntor", 92),
  new Kasten(51.716550, 8.759930, "Busdorfmauer, Ecke Kassler Tor", 93),
  new Kasten(51.734820, 8.731420, "Fürstenallee, Bushaltestelle Padersee", 94),
  new Kasten(51.719220, 8.760710, "Am Busdorf, Ecke Laurentiusgasse", 95),
  new Kasten(51.720880, 8.759070, "An den Kapuzinern, Ecke Am Stadelhof", 96),
  new Kasten(51.709900, 8.746950, "Borchener Straße", 97),
  new Kasten(51.708360, 8.746760, "Borchener Straße", 98),
  new Kasten(51.710080, 8.751930, "Ludwigstraße, Ecke Winfriedstraße", 99),
  new Kasten(51.708200, 8.743480, "Sighardstraße, zwischen Zur Schmiede und Abtsbrede", 100),
  new Kasten(51.712300, 8.751160, "Geroldstraße, Ecke Albinstraße", 101),
  new Kasten(51.724440, 8.747000, "Rolandsweg, Gegenüber Paderquellgebiet", 102),
  new Kasten(51.715820, 8.762120, "Warburgerstraße", 103),
  new Kasten(51.748050, 8.842140, "Horner Hellweg, Ecke Wiebach", 104),
  new Kasten(51.746090, 8.857180, "Hildesheimer Hellweg, Ecke Alte Amtsstraße", 105),
  new Kasten(51.746780, 8.842380, "Horner Hellweg, Ecke Gogrevenstraße", 106),
  new Kasten(51.747430, 8.842340, "Aslaner Straße, Ecke Horner Hellweg", 107),
  new Kasten(51.746240, 8.858000, "Hildesheimer Hellweg, Ecke Buchholz", 108),
  new Kasten(51.744240, 8.855240, "Herzog Heinrich Straße, Ecke Hildesheimer Hellweg", 109),
  new Kasten(51.743810, 8.854500, "Hildesheimer Hellweg, Ecke, Am Henkelberge", 110),
  new Kasten(51.744290, 8.847710, "Steigerwaldstraße, Ecke Gogrevenstraße", 111),
  new Kasten(51.744250, 8.847620, "Steigerwaldstraße, Ecke Gogrevenstraße", 112),
  new Kasten(51.716030, 8.735480, "Friedrich-Ebert-Straße, Ecke Riemekestraße", 113),
  new Kasten(51.741740, 8.771410, "Detmolder Straße, Ecke Lemgoer Straße", 114),
  new Kasten(51.731130, 8.754500, "Doktor-Rörig-Damm, Ecke Nordstraße", 115),
  new Kasten(51.743030, 8.848670, "Hildesheimer Hellweg", 116),
  new Kasten(51.743500, 8.850510, "Gogrevenstraße, Ecke Hildesheimer Hellweg", 117),
  new Kasten(51.745010, 8.846680, "Gogrevenstraße, Ecke Alte Amtsstraße", 119),
  new Kasten(51.745360, 8.848010, "Alte Amtsstraße", 120),
  new Kasten(51.745260, 8.847870, "Alte Amtsstraße", 121),
  new Kasten(51.745550, 8.850800, "Alte Amtsstraße, Ecke Meierbrede", 122),
  new Kasten(51.746180, 8.857010, "Alte Amtsstraße, Ecke Hildesheimer Hellweg", 123),
  new Kasten(51.746410, 8.853130, "Klostergarten, Ecke Alte Amtsstraße", 124),
  new Kasten(51.734400, 8.766560, "Detmolder Straße", 125),
  new Kasten(51.730880, 8.763010, "Burgunder Weg, Ecke Lothringer Weg", 126),
  new Kasten(51.717564, 8.753303, "Rathausplatz", 128),
  new Kasten(51.731560, 8.776920, "Im Dörener Feld", 129),
  new Kasten(51.743340, 8.852130, "Hildesheimer Hellweg, Ecke Alter Herbramer Weg", 130),
  new Kasten(51.743810, 8.853410, "Meierbrede", 131),
  new Kasten(51.744940, 8.851720, "Meierbrede", 132),
  new Kasten(51.750149, 8.854551, "Holtgrevenstraße, Ecke Horner Hellweg", 133),
  new Kasten(51.749245, 8.850989, "Horner Hellweg", 134),
  new Kasten(51.748315, 8.847942, "Brockhusener Straße, Ecke Horner Hellweg", 135),
  new Kasten(51.748355, 8.845561, "Horner Hellweg", 136),
  new Kasten(51.729593, 8.789277, "Friedrich List Straße 23", 137),
  new Kasten(51.728264, 8.794835, "Friedrich List Straße", 138),
  new Kasten(51.727772, 8.794062, "Friedrich List Straße 83", 139),
  new Kasten(51.725221, 8.796337, "Karl-Schurz-Straße, Ecke Vattmannstraße", 140),
  new Kasten(51.716647, 8.747113, "Alte Torgasse, Ecke Westernmauer", 141),
  new Kasten(51.716753, 8.747241, "Westernmauer, Ecke Alte Torgasse", 142),
  new Kasten(51.720488, 8.748765, "Neuhäuser Tor", 143),
  new Kasten(51.737330, 8.766360, "Österreicherweg", 144),
  new Kasten(51.737610, 8.765960, "Österreicherweg", 145),
  new Kasten(51.732390, 8.765270, "Mährenstraße", 147),
  new Kasten(51.715120, 8.755360, "Liboriberg (Parkplatz)", 150),
  new Kasten(51.720441, 8.753328, "Wasserkunst, Mühlenstraße", 151),
  new Kasten(51.746300, 8.847350, "Überwasserstraße, Ecke An der Beke", 152),
  new Kasten(51.747146, 8.848865, "Überwasserstraße", 153),
  new Kasten(51.748814, 8.844194, "Renkerweg, Ecke Vossricke", 154),
  new Kasten(51.750995, 8.843451, "Renkerweg 12", 155),
  new Kasten(53.870167, 10.68783, "Lübeck: Breite Straße, Ecke Fischergrube", 158),
  new Kasten(51.753775, 8.664919, "Münsterstraße, Ecke Sander Straße", 159),
  new Kasten(51.7483, 8.8442, "Renkerweg, Ecke Horner Hellweg", 160),
  new Kasten(51.7445, 8.854809, "Herzog-Heinrich-Straße 7", 161),
  new Kasten(51.746748, 8.846615, "In den Berggärten", 162),
  new Kasten(51.746748, 8.845282, "In den Berggärten, Ecke Kreuzweg", 163),
  new Kasten(51.71870, 8.74862, "Königstraße 27", 182),
  new Kasten(51.71916, 8.74887, "Königstraße 35", 183),
  new Kasten(51.71955, 8.74908, "Königstraße 47", 184),
  new Kasten(51.71960, 8.74929, "Königstraße 60", 185),
  new Kasten(51.760567, 8.737400, "Marschallteich 3", 192),
  new Kasten(51.71893, 8.75753, "Domplatz", 165),
  new Kasten(51.72019, 8.74867, "Neuhäuser Tor", 166),
  new Kasten(51.708617, 8.767719, "Pohlweg 66", 167),
  new Kasten(51.72715, 8.77060, "Dörener Weg, Arminusstraße", 169),
  new Kasten(51.71587, 8.73326, "Riemekestraße, Ecke Balhornstraße", 170),
  new Kasten(51.72303, 8.75851, "Detmolder Tor, Tegelweg", 171),
  new Kasten(51.70542, 8.77797, "Warburger Straße 132", 172),
  new Kasten(51.71218, 8.77084, "Warburger Straße 78", 174),
  new Kasten(51.71459, 8.76571, "Auf der Schulbrede, nahe Warburger Str.", 175),
  new Kasten(51.67332, 8.72530, "Paderborner Str., Liethberg", 176),
  new Kasten(51.67137, 8.71866, "Auf der Schweiz 14", 177),
  new Kasten(51.67125, 8.72348, "Paderborner Str., Dorfstr.", 178),
  new Kasten(51.67224, 8.72467, "Paderborner Str., Remmert", 179),
  new Kasten(51.71559, 8.75686, "Liboriberg 25", 180),
  new Kasten(51.70573, 8.74515, "Borchener Straße 110", 181),
  new Kasten(51.72292, 8.74338, "Reumontstraße 50", 186),
  new Kasten(51.71612, 8.76298, "Am Bahneinschnitt 4", 187),
  new Kasten(51.716269, 8.766182, "Grimmestraße 2", 188),
  new Kasten(51.720367, 8.764817, "KV Benhauserstr. Luise-Henselstr", 189),
  new Kasten(51.73093, 8.75421, "Dr.-Rörig-Damm, Ecke Nordstr. (Juni 2012)", 190),
  new Kasten(51.70542, 8.764032, "Kilianstraße 138", 191),
  new Kasten(51.72470, 8.73691, "Weierstraßweg", 193),
  new Kasten(51.71956, 8.73766, "Rathenaustraße", 194),
  new Kasten(51.71822, 8.73742, "Rathenaustraße", 195),
  new Kasten(51.72443, 8.73599, "Elsener Straße / Giefersstraße", 196),
  new Kasten(51.713539, 8.7402, "Bahnhofstraße 32", 197),
  new Kasten(51.712642, 8.737249, "Bahnhofstraße 58", 198),
  new Kasten(51.746341, 8.746061, "Haustenbecker Straße, Marienloher Straße", 199),
  new Kasten(51.73681, 8.74711, "Hermann-Kirchhoff-Straße 29", 200),
  new Kasten(51.736713, 8.767938, "Österreicher Weg / Detmolder Straße", 201),
  new Kasten(51.74076, 8.770683, "Detmolder Straße 173", 202),
  new Kasten(51.720737, 8.753518, "Auf den Dielen 30", 203),
  new Kasten(51.730899, 8.760439, "Lothringer Weg 49", 204),
  new Kasten(51.737097, 8.756589, "Dr.-Rörig-Damm 29", 205),
  new Kasten(51.717882, 8.751543, "Paderberg 2", 206),
  new Kasten(51.69959, 8.73931, "Borchner Str. / Am Atlaswerk", 207),
  new Kasten(51.66976, 8.72447, "Paderborner Str. / Schützenstr.", 208),
  new Kasten(51.66778, 8.72241, "Mallinckrodtstr. / Bülte", 209),
  new Kasten(51.66835, 8.71923, "Altenaustr. / Mühlenwinkel", 210),
  new Kasten(51.66505, 8.71985, "Paderborner Str. / Sperenberger Str.", 211),
  new Kasten(51.66642, 8.72519, "Stadtweg 42", 212),
  new Kasten(51.66599, 8.72628, "Stadtweg / Thüringer Weg", 213),
  new Kasten(51.66689, 8.72684, "Thüringer Weg 7", 214),
  new Kasten(51.66700, 8.72707, "Thüringer Weg 10", 215),
  new Kasten(51.66777, 8.72719, "Kreuzricke / Thüringer Weg", 216),
  new Kasten(51.66963, 8.72727, "KV Wegelange / Holsteiner Weg", 217),
  new Kasten(51.66975, 8.72725, "Wegelange / Schule", 218),
  new Kasten(51.66656, 8.72800, "KV1 Brandenburger Weg 23", 219),
  new Kasten(51.66657, 8.72796, "KV2 Brandenburger Weg 24", 220),
  new Kasten(51.66342, 8.72973, "Mühlenweg / Amselweg", 221),
  new Kasten(51.730791, 8.754032, "Dr.-Rörig-Damm, Ecke Nordstr. (Juli 2012)", 222),
  new Kasten(51.742574, 8.766555, "Anhalterweg / Rotheweg", 223),
  new Kasten(51.748288, 8.755902, "Schwabenweg / An der Talle", 224),
  new Kasten(51.717726, 8.77456, "Driburger Straße 42", 225),
  new Kasten(51.71957, 8.801906, "Kaukenberg 7", 226),
  new Kasten(51.711037, 8.798202, "Borgentreicher Weg 3", 227),
  new Kasten(51.710325, 8.795337, "Auf der Lieth 130", 228),
  new Kasten(51.71155, 8.757914, "Brüderstraße 23", 229),
  new Kasten(51.708151, 8.757744, "Kilianstr. 95", 230),
  new Kasten(51.67108, 8.72143, "Neuenhöfe 11", 231),
  new Kasten(51.67590, 8.72900, "KV Zur Dicken Linde 24", 232),
  new Kasten(51.66923, 8.72580, "Kabelverteiler Schausteller", 233),
  new Kasten(51.66920, 8.72583, "Wegelange/Schützenhalle", 234),
  new Kasten(51.67106, 8.72652, "Schützenstraße 21", 235),
  new Kasten(51.67203, 8.72549, "Remmert/Pommernweg", 236),
  new Kasten(51.67041, 8.72915, "Wegelange/Birkeneck", 237),
  new Kasten(51.67465, 8.73171, "KV Schützenstr. 45", 238),
  new Kasten(51.67517, 8.73151, "Bäumerweg 32", 239),
  new Kasten(51.67434, 8.73167, "Bäumerweg/Schützenstr.", 240),
  new Kasten(51.67184, 8.73266, "Menkenfeld 2", 241),
  new Kasten(51.67049, 8.73025, "KV Eichsfeld/Grünerweg", 242),
  new Kasten(51.66896, 8.72313, "Laurentiusstraße 10", 243),
  new Kasten(51.722099, 8.756453, "Meinwerkstraße 7", 245),
  new Kasten(51.716608, 8.755149, "Klingelgasse (2012)", 246),
  new Kasten(51.713994, 8.778393, "Am Rippinger Weg 65", 247),
  new Kasten(51.707095, 8.7585, "Kilianstr. / Ulmenweg", 248),
  new Kasten(51.708508, 8.786911, "Brakeler Str. / Scherfeder Str.", 249),
  new Kasten(51.711155, 8.748848, "Widukindstraße 29", 250),
  new Kasten(51.651900, 8.701433, "Salzkottener Straße 1 / Am Ehrenmal", 251),
  new Kasten(51.654667, 8.699567, "Eschenkamp / Schule", 252),
  new Kasten(51.653967, 8.700317, "Eschenkamp 8", 253),
  new Kasten(51.653017, 8.701117, "Walburgisstraße 10", 254),
  new Kasten(51.655867, 8.701217, "Hellenb.-Hilger", 255),
  new Kasten(51.702141, 8.727169, "Frankfurter Weg 38", 256),
  new Kasten(51.705464, 8.754089, "Stephanusstraße 2", 257),
  new Kasten(51.711046, 8.80189, "Auf der Lieth 204a", 258),
  new Kasten(51.721054, 8.804071, "Kaukenberg 20", 259),
  new Kasten(51.724972, 8.775485, "Tempelhofer Straße 53", 260),
  new Kasten(51.738617, 8.760203, "Thüringer Weg 37", 261),
  new Kasten(51.731549, 8.747137, "Löffelmannweg 59", 262)
];

let map;
let markerArray = [];

// var icon2012 = new google.maps.MarkerImage('green_marker.png', new google.maps.Size(37, 34), new google.maps.Point(0,0), new google.maps.Point(12, 34));


function load() {
  map = L.map('mapid').setView([51.712848, 8.75818], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  }).addTo(map);


  createMarkerArray(kaesten);

  let index = getParam("kasten");
  if (index) {
    let selectedKasten = getKastenByIndex(index);
    if (selectedKasten) {
      centerOnKasten(selectedKasten);
    }
  }
}

function createMarkerArray(kaesten) {
  for (let i in kaesten) {
    markerArray.push(createMarker(kaesten[i]));
  }
}

function createMarker(kasten) {
  let marker = L.marker(kasten.position)
    .addTo(map)
    .bindPopup(kasten.getHtml())
  kasten.marker = marker;
  return kasten;
}

function getKastenByIndex(index) {
  for (let i in markerArray) {
    if (markerArray[i].index == index) {
      return markerArray[i];
    }
  }
  return undefined;
}

function centerOnKasten(selectedKasten) {
  map.setView(selectedKasten.position, 14);
  selectedKasten.marker.openPopup();
}

function getParam(parameterName) {
  let params = (new URL(document.location)).searchParams;
  return params.get(parameterName);
}

