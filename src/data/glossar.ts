/**
 * Datenquelle des Glossars (docs/CONTENT-PLAN-V2.md 1.6 und 3.5, Masterprompt Abschnitt 3).
 *
 * Regeln fuer jeden Eintrag:
 * - Nur Begriffe, die auf dieser Website vorkommen. Kein Lexikon, kein Verwaltungsvokabular.
 * - Definition allgemein gueltig, zwei bis drei Saetze, keine Paragraphen, keine Zahlen, keine Richtwerte.
 * - Bedeutung: ein bis zwei Saetze zur Rolle des Begriffs in der Portfoliosteuerung.
 * - Rechtlich gepraegte Begriffe (Umlagefaehigkeit, Abnahme, Nachtrag, Prolongation, Modernisierung) nur
 *   allgemein, mit Verweis auf Rechtsanwalt oder Steuerberater. Fachliche Pruefung vor Veroeffentlichung
 *   (docs/LAUNCH-CHECKLISTE.md, Textfreigabe).
 * - heimatort ist der interne Pfad der Seite, auf der der Begriff ausgefuehrt wird (Heimatort-Prinzip 1.2).
 *   Anker muessen auf der Zielseite existieren; neue Anker hier nur nach Pruefung der Zielseite eintragen.
 *
 * Seiten und Beitraege verlinken mit glossarHref(id) beziehungsweise "/glossar/#id". Die Erlaeuterung beim
 * ersten Auftreten auf der Seite bleibt Pflicht; der Glossar-Link ergaenzt sie, er ersetzt sie nicht.
 */

export type GlossarBlockId =
  | 'ebenen'
  | 'wirtschaftlichkeit'
  | 'vermietung'
  | 'instandhaltung'
  | 'steuerung'
  | 'zusammenarbeit'
  | 'ki-daten';

export interface GlossarBlock {
  /** Anker des Themenblocks auf /glossar/ */
  id: GlossarBlockId;
  titel: string;
  /** Ein Satz, der den Block einordnet (Randspalte) */
  intro: string;
}

export interface GlossarEintrag {
  /** Anker auf /glossar/, kebab-case, stabil (wird von Seiten und Beitraegen verlinkt) */
  id: string;
  begriff: string;
  block: GlossarBlockId;
  /** Allgemein gueltige Definition, zwei bis drei Saetze */
  definition: string;
  /** Bedeutung in der Portfoliosteuerung, ein bis zwei Saetze */
  bedeutung: string;
  /** Interner Pfad der Seite, auf der der Begriff ausgefuehrt wird, mit Anker */
  heimatort: string;
  /** Linktext fuer den Verweis "Auf dieser Website" */
  heimatortLabel: string;
}

/** Die sieben Themenbloecke in Seitenreihenfolge (Inhaltsplan 3.5, Gliederung 2). */
export const GLOSSAR_BLOECKE: readonly GlossarBlock[] = [
  {
    id: 'ebenen',
    titel: 'Ebenen und Rollen',
    intro: 'Wer im Bestand welche Aufgabe hat und in welcher Rolle ich arbeite.',
  },
  {
    id: 'wirtschaftlichkeit',
    titel: 'Wirtschaftlichkeit',
    intro: 'Wie Erträge, Kosten, Kapital und Liquidität eines Bestands zusammenhängen.',
  },
  {
    id: 'vermietung',
    titel: 'Vermietung und Forderungen',
    intro: 'Woran sich zeigt, ob der Bestand die Erträge erzielt, die er erzielen könnte.',
  },
  {
    id: 'instandhaltung',
    titel: 'Instandhaltung und Investition',
    intro: 'Wie aus einer Liste offener Maßnahmen eine begründete Reihenfolge wird.',
  },
  {
    id: 'steuerung',
    titel: 'Steuerung und Reporting',
    intro: 'Mit welchen Instrumenten Entscheidungen vorbereitet, verteilt und nachgehalten werden.',
  },
  {
    id: 'zusammenarbeit',
    titel: 'Zusammenarbeit und Vertrag',
    intro: 'Begriffe aus Mandat und Dienstleistersteuerung, allgemein erläutert. Die rechtliche Einordnung übernimmt Ihr Rechtsanwalt.',
  },
  {
    id: 'ki-daten',
    titel: 'KI und Daten',
    intro: 'Voraussetzungen, ohne die weder Berichte noch Werkzeuge verlässlich arbeiten.',
  },
] as const;

export const GLOSSAR: readonly GlossarEintrag[] = [
  /* -------------------------------------------------------------------------
     Ebenen und Rollen
  ------------------------------------------------------------------------- */
  {
    id: 'asset-management',
    begriff: 'Asset Management',
    block: 'ebenen',
    definition:
      'Asset Management ist die wirtschaftliche Steuerung eines Immobilienbestands aus Eigentümersicht. Es legt fest, wohin sich jedes Objekt entwickeln soll, entscheidet über Investitionen, Vermietungsstrategie und Finanzierungsfragen und verfolgt, ob die Ergebnisse den Zielen entsprechen. Es arbeitet auf der Ebene der Entscheidungen, nicht des Tagesgeschäfts.',
    bedeutung:
      'Ohne diese Ebene werden Maßnahmen dort entschieden, wo sie gerade anfallen, nicht dort, wo sie wirken sollen. Asset Management gibt der Verwaltung die Richtung vor und misst den Fortschritt an den Eigentümerzielen.',
    heimatort: '/asset-management-beratung/',
    heimatortLabel: 'Asset-Management-Beratung',
  },
  {
    id: 'property-management',
    begriff: 'Property Management',
    block: 'ebenen',
    definition:
      'Property Management ist die operative Verwaltung von Immobilien: Vermietung, Mieterkontakt, Abrechnung, Instandhaltung im Tagesgeschäft und Steuerung der Dienstleister vor Ort. Es setzt um, was auf der Ebene des Asset Managements entschieden wurde. Davon abzugrenzen ist das Facility Management, das den technischen und infrastrukturellen Betrieb der Gebäude verantwortet, etwa Wartung, Reinigung und Hausmeisterdienste.',
    bedeutung:
      'Property Management ist die Stelle, an der Beschlüsse Wirklichkeit werden oder liegen bleiben. Die Schnittstelle zwischen Eigentümerseite und Verwaltung entscheidet deshalb über das Umsetzungsergebnis.',
    heimatort: '/property-management-optimierung/',
    heimatortLabel: 'Property-Management-Optimierung',
  },
  {
    id: 'bestandshalter',
    begriff: 'Bestandshalter',
    block: 'ebenen',
    definition:
      'Ein Bestandshalter hält Immobilien langfristig im eigenen Vermögen, um laufende Erträge zu erzielen und den Wert zu erhalten oder zu entwickeln. Der Begriff grenzt ihn vom Projektentwickler ab, der Objekte baut oder umbaut, um sie zu verkaufen, und vom Händler, der auf kurzfristige Weiterveräußerung setzt.',
    bedeutung:
      'Bestandshalter entscheiden über lange Zeiträume. Instandhaltung, Vermietungsqualität und Datenordnung wirken bei ihnen unmittelbar auf das Ergebnis, weil sie die Folgen ihrer Entscheidungen selbst tragen.',
    heimatort: '/#fuer-wen',
    heimatortLabel: 'Startseite: Für wen die Beratung gedacht ist',
  },
  {
    id: 'family-office',
    begriff: 'Family Office',
    block: 'ebenen',
    definition:
      'Ein Family Office verwaltet das Vermögen einer Familie oder weniger Familien, häufig über mehrere Anlageklassen hinweg. Immobilien sind darin oft ein wesentlicher Baustein, der eigene Steuerung, eigene Berichte und eigene Entscheidungswege braucht. Die Organisationsform reicht von einer kleinen internen Einheit bis zu einer eigenständigen Gesellschaft.',
    bedeutung:
      'In der Portfoliosteuerung stellt ein Family Office andere Fragen als ein Wohnungsunternehmen: Halten über Generationen, Liquidität für die Familie, Übergabe und Verantwortungswechsel. Berichte müssen für Entscheider verständlich sein, die nicht täglich mit Immobilien arbeiten.',
    heimatort: '/#fuer-wen',
    heimatortLabel: 'Startseite: Für wen die Beratung gedacht ist',
  },
  {
    id: 'mandat',
    begriff: 'Mandat',
    block: 'ebenen',
    definition:
      'Ein Mandat ist ein vereinbarter Beratungsauftrag mit festgelegtem Gegenstand, Umfang, Datentiefe, Zeitrahmen und Honorar. Es beginnt mit einem schriftlichen Angebot und endet mit der Übergabe der Ergebnisse an die Verantwortlichen im Haus des Auftraggebers. Die Kontaktaufnahme allein begründet kein Mandat.',
    bedeutung:
      'Das Mandat zieht die Grenze zwischen unverbindlicher Einschätzung und vereinbarter Arbeit. Es legt fest, was geliefert wird, was Ihr Haus beisteuert und wer entscheidet. Auf dieser Website stehen drei Mandatsformen zur Wahl.',
    heimatort: '/asset-management-beratung/#mandate',
    heimatortLabel: 'Drei Mandatsformen',
  },
  {
    id: 'sparring',
    begriff: 'Sparring',
    block: 'ebenen',
    definition:
      'Sparring bezeichnet den regelmäßigen, kritischen Austausch zu anstehenden Entscheidungen. Der Sparringspartner hinterfragt Annahmen, prüft Vorlagen, bringt eine zweite Sicht ein und hält nach, was aus den Beschlüssen geworden ist. Er entscheidet nicht selbst und übernimmt keine Organ- oder Beiratsfunktion.',
    bedeutung:
      'Für Eigentümer und Geschäftsleitungen ersetzt Sparring keine eigene Organisation, sondern schärft deren Entscheidungen. Es ist eine der drei Mandatsformen auf dieser Website.',
    heimatort: '/asset-management-beratung/#sparring',
    heimatortLabel: 'Laufendes Sparring für Eigentümer und Geschäftsleitungen',
  },

  /* -------------------------------------------------------------------------
     Wirtschaftlichkeit
  ------------------------------------------------------------------------- */
  {
    id: 'portfoliooptimierung',
    begriff: 'Portfoliooptimierung',
    block: 'wirtschaftlichkeit',
    definition:
      'Portfoliooptimierung ist die planvolle Verbesserung eines Immobilienbestands in seiner Gesamtheit: Erträge sichern, Kosten und Ausfälle senken, Investitionen in eine begründete Reihenfolge bringen und die Liquidität im Blick behalten. Sie betrachtet die Objekte nicht einzeln, sondern in ihrem Zusammenspiel und in ihrer Bedeutung für die Ziele des Eigentümers.',
    bedeutung:
      'Portfoliooptimierung setzt an den Objekten an, deren Ergebnis unter ihren Möglichkeiten liegt. Sie ordnet Maßnahmen nach Wirkung, Aufwand und Risiko und legt sie auf eine Zeitachse, die die Liquidität einhält.',
    heimatort: '/portfoliooptimierung/',
    heimatortLabel: 'Portfoliooptimierung für Immobilienbestände',
  },
  {
    id: 'objektstrategie',
    begriff: 'Objektstrategie',
    block: 'wirtschaftlichkeit',
    definition:
      'Die Objektstrategie ist die begründete Zielrichtung für ein einzelnes Objekt: halten, entwickeln oder verkaufen. Sie leitet sich aus den Eigentümerzielen ab und berücksichtigt Ertragslage, Zustand, Lage, Vermietbarkeit und Kapitalbindung. Entwickeln kann Modernisierung, Nachverdichtung oder eine veränderte Vermietungsstrategie bedeuten.',
    bedeutung:
      'Erst mit einer Objektstrategie lässt sich beurteilen, welche Investition zu welchem Objekt passt. Ein Verkauf ist dabei ein mögliches Ergebnis, kein Ausgangspunkt. Steuerliche und rechtliche Folgen bewerten Steuerberater und Rechtsanwalt.',
    heimatort: '/asset-management-beratung/#eigentuemerziele',
    heimatortLabel: 'Eigentümerziele klären, bevor die erste Objektstrategie entsteht',
  },
  {
    id: 'szenario',
    begriff: 'Szenario',
    block: 'wirtschaftlichkeit',
    definition:
      'Ein Szenario ist ein durchgerechneter oder durchdachter Entwicklungspfad unter offengelegten Annahmen: Was geschieht mit Ertrag, Kosten, Liquidität und Wert, wenn ein Objekt gehalten, entwickelt oder verkauft wird? Mehrere Szenarien nebeneinander zeigen, welche Annahme die Entscheidung trägt. Auf dieser Website steht Szenario zusätzlich für die schematische Beschreibung eines Vorgehens unter der Überschrift „So würde ich vorgehen“. Das ist kein Kundenfall und keine Ergebniszusage.',
    bedeutung:
      'Szenarien ersetzen keine Prognose und liefern keine Gewissheit. Sie zwingen dazu, Annahmen zu benennen, und machen eine Entscheidung für Dritte nachvollziehbar.',
    heimatort: '/asset-management-beratung/#fragestellungen',
    heimatortLabel: 'Fragen, die in der Beratung bearbeitet werden',
  },
  {
    id: 'capex',
    begriff: 'CAPEX',
    block: 'wirtschaftlichkeit',
    definition:
      'CAPEX steht für Capital Expenditure, also Investitionsausgaben. Im Immobilienbestand sind das Ausgaben für die Substanz eines Objekts: Dach, Fassade, Fenster, Haustechnik, Wohnungen, Außenanlagen. CAPEX binden Kapital über längere Zeit und erhalten oder steigern Zustand, Vermietbarkeit und Wert. Die Abgrenzung zum laufenden Aufwand folgt im Rechnungswesen eigenen Regeln, die der Steuerberater einordnet.',
    bedeutung:
      'CAPEX konkurrieren um begrenzte Mittel. Sie werden deshalb nach Dringlichkeit, Wirkung und technischer Abhängigkeit bewertet und auf eine Zeitachse gelegt, die die Liquiditätsgrenze einhält.',
    heimatort: '/investitionspriorisierung/',
    heimatortLabel: 'Investitionspriorisierung für Immobilienbestände',
  },
  {
    id: 'opex',
    begriff: 'OPEX',
    block: 'wirtschaftlichkeit',
    definition:
      'OPEX steht für Operational Expenditure, also laufende Betriebs- und Verwaltungskosten: Energie, Wasser, Reinigung, Wartung, Versicherung, Verwaltung, kleinere Reparaturen. Sie fallen regelmäßig an und belasten das laufende Ergebnis. Ein Teil davon kann im rechtlich zulässigen Rahmen auf Mieter umgelegt werden.',
    bedeutung:
      'OPEX werden danach geordnet, wer sie am Ende trägt, wie lange Verträge sie binden und wo Einfluss möglich ist. CAPEX und OPEX werden getrennt geplant und gemeinsam in der Liquidität betrachtet.',
    heimatort: '/portfoliooptimierung/#leistung',
    heimatortLabel: 'Leistungsumfang der Portfoliooptimierung',
  },
  {
    id: 'umlagefaehige-kosten',
    begriff: 'Umlagefähige Kosten',
    block: 'wirtschaftlichkeit',
    definition:
      'Umlagefähige Kosten sind Betriebskosten, die ein Vermieter nach den mietvertraglichen und gesetzlichen Regeln auf die Mieter verteilen darf. Nicht umlagefähige Kosten verbleiben beim Eigentümer. Welche Position in welchem Fall umlagefähig ist, ist eine rechtliche Frage, die Rechtsanwalt oder Fachverwaltung beantworten.',
    bedeutung:
      'Für die Steuerung zählt die Trennung: Nur die nicht umlagefähigen Kosten belasten das Ergebnis des Eigentümers unmittelbar. Eine Kostenliste ohne diese Trennung zeigt nicht, wo Einfluss besteht.',
    heimatort: '/portfoliooptimierung/#leistung',
    heimatortLabel: 'Leistungsumfang der Portfoliooptimierung',
  },
  {
    id: 'liquiditaet',
    begriff: 'Liquiditätsplanung',
    block: 'wirtschaftlichkeit',
    definition:
      'Die Liquiditätsplanung zeigt, welche Mittel in welcher Periode tatsächlich verfügbar sind: Mieteinnahmen, Kapitaldienst aus Zins und Tilgung, laufende Kosten, geplante Investitionen, Finanzierungstermine. Sie unterscheidet sich vom Ergebnis, weil Zahlungen und Erträge zeitlich auseinanderfallen können.',
    bedeutung:
      'Die Liquidität setzt den Rahmen, in dem Investitionen umgesetzt werden können. Die Liquidität entscheidet nicht, welche Maßnahme wichtig ist, sondern wann sie kommen kann.',
    heimatort: '/investitionspriorisierung/#investitionsplan',
    heimatortLabel: 'Investitionsplan mit Zeitachse und Liquidität',
  },
  {
    id: 'prolongation',
    begriff: 'Prolongation',
    block: 'wirtschaftlichkeit',
    definition:
      'Eine Prolongation ist die Verlängerung einer auslaufenden Finanzierung beim bestehenden Finanzierer zu neu vereinbarten Konditionen. Alternativen sind die Umschuldung zu einem anderen Finanzierer oder die Rückführung des Darlehens. Konditionen und Vertragsgestaltung sind Sache des Eigentümers mit seinem Finanzierer und seinen Beratern.',
    bedeutung:
      'Eine anstehende Prolongation ist ein fester Punkt auf der Zeitachse. Zu diesem Termin müssen Ertragskraft, Investitionsbedarf und Liquidität belastbar dargestellt sein. Finanzierungen vermittle ich nicht.',
    heimatort: '/investitionspriorisierung/#investitionsplan',
    heimatortLabel: 'Investitionsplan mit Zeitachse und Liquidität',
  },

  /* -------------------------------------------------------------------------
     Vermietung und Forderungen
  ------------------------------------------------------------------------- */
  {
    id: 'leerstand',
    begriff: 'Leerstandsquote und Leerstandstage',
    block: 'vermietung',
    definition:
      'Die Leerstandsquote setzt leer stehende Einheiten oder Flächen ins Verhältnis zum Gesamtbestand, wahlweise nach Anzahl, Fläche oder entgangener Miete. Leerstandstage zählen je Einheit die Tage zwischen Auszug und Neuvermietung. Beide Größen sagen erst etwas aus, wenn je Einheit die Leerstandsursache erfasst ist: Herrichtung offen, Vermarktung läuft, Budget nicht freigegeben oder strukturell schwer vermietbar.',
    bedeutung:
      'Eine Quote allein löst keine Maßnahme aus. Erst die Ursache je Einheit zeigt, ob Verwaltung, Technik, Budget oder Markt der Engpass ist und wer handeln muss.',
    heimatort: '/portfoliooptimierung/#leistung',
    heimatortLabel: 'Leistungsumfang der Portfoliooptimierung',
  },
  {
    id: 'forderungen',
    begriff: 'Forderungsalter',
    block: 'vermietung',
    definition:
      'Das Forderungsalter ordnet offene Posten danach, wie lange sie bereits ausstehen. Statt einer Gesamtsumme entsteht eine Staffel, die zeigt, welcher Teil der Forderungen jung ist und welcher seit längerem offen steht. Ergänzt wird sie um den Bearbeitungsstand je Posten.',
    bedeutung:
      'Je länger eine Forderung offen steht, desto höher wird in der Regel der Aufwand und desto unsicherer die Zahlung. Die Staffel zeigt, ob der Mahnprozess funktioniert und wo Zuständigkeiten fehlen.',
    heimatort: '/portfoliooptimierung/#leistung',
    heimatortLabel: 'Leistungsumfang der Portfoliooptimierung',
  },

  /* -------------------------------------------------------------------------
     Instandhaltung und Investition
  ------------------------------------------------------------------------- */
  {
    id: 'instandhaltungsstau',
    begriff: 'Instandhaltungsstau',
    block: 'instandhaltung',
    definition:
      'Ein Instandhaltungsstau ist aufgelaufene, notwendige Instandhaltung, die nicht ausgeführt wurde. Er entsteht, wenn Maßnahmen verschoben werden, ohne dass sie im Plan bleiben. Sichtbar wird er über die Instandhaltungshistorie, also die Aufzeichnung, was je Objekt wann getan wurde, und über Zustandsaufnahmen der Objekte, die lange nicht begangen wurden.',
    bedeutung:
      'Ein bekannter, aber nicht bezifferter Rückstand ist eine der Ausgangslagen, für die die Investitionspriorisierung ausgelegt ist, insbesondere vor Finanzierungsentscheidungen. Er lässt sich erst priorisieren, wenn die Befunde zusammengeführt und die Maßnahmen bewertet sind.',
    heimatort: '/investitionspriorisierung/#datengrundlage',
    heimatortLabel: 'Was vor der Bewertung auf dem Tisch liegen muss',
  },
  {
    id: 'buendelung',
    begriff: 'Technische Abhängigkeit und Bündelung',
    block: 'instandhaltung',
    definition:
      'Technische Abhängigkeit meint Reihenfolgen, die die Bausubstanz vorgibt: Das Dach kommt vor der Fassade, die Leitungen kommen vor den Oberflächen. Bündelung meint, Maßnahmen an einem Objekt oder Gewerk zusammenzulegen, damit Baustelleneinrichtung, Gerüst und Abstimmung nur einmal anfallen.',
    bedeutung:
      'Abhängigkeit und Bündelung bilden neben Dringlichkeit und Wirkung die dritte Bewertungsachse. Sie verschieben Maßnahmen entlang der Zeitachse: Was die Substanz vorgibt oder sich mit einer ohnehin laufenden Maßnahme verbinden lässt, rückt vor.',
    heimatort: '/investitionspriorisierung/#bewertungsachsen',
    heimatortLabel: 'Drei Bewertungsachsen und ein Rahmen',
  },
  {
    id: 'modernisierung',
    begriff: 'Modernisierung',
    block: 'instandhaltung',
    definition:
      'Modernisierung bezeichnet Maßnahmen, die über die Erhaltung des vorhandenen Zustands hinausgehen und ein Gebäude oder eine Wohnung verändern oder aufwerten. Sie ist von der Instandhaltung abzugrenzen, die den vorhandenen Zustand erhält oder wiederherstellt. Ob eine Maßnahme mietrechtlich als Modernisierung gilt und welche Folgen das für die Miete hat, ist eine rechtliche Einordnung, die durch Rechtsberatung erfolgt.',
    bedeutung:
      'In der Priorisierung wird die Abgrenzung früh gebraucht, weil Modernisierung und Instandhaltung unterschiedlich auf Ertrag und Liquidität wirken. Die rechtliche Einordnung gehört vor die Entscheidung, nicht dahinter.',
    heimatort: '/investitionspriorisierung/#bewertungsachsen',
    heimatortLabel: 'Drei Bewertungsachsen und ein Rahmen',
  },

  /* -------------------------------------------------------------------------
     Steuerung und Reporting
  ------------------------------------------------------------------------- */
  {
    id: 'portfolio-einordnung',
    begriff: 'Portfolio-Einordnung',
    block: 'steuerung',
    definition:
      'Die Portfolio-Einordnung ordnet jedes Objekt nach Ausgangslage und Handlungsbedarf: Ertragslage, Zustand, Vermietbarkeit, Kapitalbindung. Vergleichbare Objekte werden zu Gruppen zusammengefasst. Das Ergebnis ist eine Landkarte des Bestands, die zeigt, wo Aufmerksamkeit und Budget wirken.',
    bedeutung:
      'Die Einordnung ist der erste Schritt jeder Portfoliooptimierung. Ohne sie fließen Mittel dorthin, wo der Druck am größten ist, nicht dorthin, wo die Wirkung am größten wäre.',
    heimatort: '/portfoliooptimierung/#leistung',
    heimatortLabel: 'Leistungsumfang der Portfoliooptimierung',
  },
  {
    id: 'massnahmenplan',
    begriff: 'Maßnahmenplan',
    block: 'steuerung',
    definition:
      'Ein Maßnahmenplan führt alle beschlossenen Maßnahmen mit Verantwortlichem, Budgetrahmen, Termin und Status an einer Stelle zusammen. Er ist das gemeinsame Arbeitsdokument von Eigentümerseite, Verwaltung und Technik und wird in jedem Berichtstermin fortgeschrieben.',
    bedeutung:
      'Eine Maßnahme ohne Verantwortlichen, Budget und Termin ist eine Absicht. Der Maßnahmenplan macht aus Absichten nachverfolgbare Aufgaben und ist das Arbeitsergebnis des Portfolio-Checks.',
    heimatort: '/asset-management-beratung/#portfolio-check',
    heimatortLabel: 'Portfolio-Check und Maßnahmenplan',
  },
  {
    id: 'entscheidungsvorlage',
    begriff: 'Entscheidungsvorlage',
    block: 'steuerung',
    definition:
      'Eine Entscheidungsvorlage bündelt auf wenigen Seiten, was ein Gremium für einen Beschluss braucht: Ausgangslage, Fragestellung, Optionen, Annahmen und Datenbasis, Wirtschaftlichkeit und Risiken je Option, Empfehlung, benötigte Entscheidung und nächste Schritte. Sie wird an die Gremienformate des Auftraggebers angepasst.',
    bedeutung:
      'Die Vorlage trennt Vorbereitung und Entscheidung. Ich bereite vor und empfehle, entschieden wird auf Eigentümerseite. Ohne Vorlage werden Beschlüsse vertagt oder ohne Alternativen gefasst.',
    heimatort: '/asset-management-beratung/#entscheidungsvorlage',
    heimatortLabel: 'Aufbau einer Entscheidungsvorlage',
  },
  {
    id: 'zustaendigkeitsmatrix',
    begriff: 'Zuständigkeitsmatrix und Wertgrenze',
    block: 'steuerung',
    definition:
      'Eine Zuständigkeitsmatrix legt je Vorgangsart fest, wer entscheidet, wer prüft, wer freigibt und wer informiert wird. Die Wertgrenze ist der Betrag, bis zu dem die Verwaltung ohne Rückfrage entscheiden darf; darüber ist die Eigentümerseite gefragt. Dazu gehört die Frist, innerhalb der die andere Seite antwortet.',
    bedeutung:
      'Die Matrix ist das zentrale Arbeitsdokument an der Schnittstelle zwischen Eigentümerseite und Verwaltung. Ohne Wertgrenzen wartet jede Seite auf die andere, und Vorgänge bleiben liegen.',
    heimatort: '/property-management-optimierung/#zustaendigkeitsmatrix',
    heimatortLabel: 'Zuständigkeiten in einer Matrix festhalten',
  },
  {
    id: 'eskalation',
    begriff: 'Eskalation',
    block: 'steuerung',
    definition:
      'Eskalation heißt, dass ein offener Vorgang nach Ablauf einer vereinbarten Frist an die nächste Instanz übergeben wird, statt liegen zu bleiben. Stufen, Fristen und Empfänger sind vorab festgelegt. Eskalation ist ein Prozessschritt, keine Schuldzuweisung.',
    bedeutung:
      'Eine Eskalationsregel macht Stillstand sichtbar und gibt ihm einen Weg. Sie ergänzt die Zuständigkeitsmatrix um die Antwort auf die Frage, was geschieht, wenn niemand entscheidet.',
    heimatort: '/property-management-optimierung/#eskalation',
    heimatortLabel: 'Wenn eine Maßnahme stockt',
  },
  {
    id: 'kennzahl',
    begriff: 'Kennzahl',
    block: 'steuerung',
    definition:
      'Eine Kennzahl verdichtet einen Sachverhalt zu einer messbaren Größe, etwa die Leerstandsquote, den Anteil offener Forderungen nach Alter oder den Fortschritt eines Investitionsplans. Sie ist nur so gut wie ihre Definition, ihre Datenquelle und die Konsequenz, die bei Abweichung folgt. Kennzahlen werden auf dieser Website ohne Zielwerte beschrieben; Schwellen legt jedes Haus selbst fest.',
    bedeutung:
      'Wenige Kennzahlen mit klarer Definition wirken mehr als viele ohne. Eine Kennzahl ohne Verantwortlichen und Konsequenz ist eine Zahl, kein Steuerungsinstrument.',
    heimatort: '/reporting-und-kennzahlen/#kennzahlen',
    heimatortLabel: 'Kennzahlen nach Ebenen',
  },
  {
    id: 'kennzahlensteckbrief',
    begriff: 'Kennzahlensteckbrief',
    block: 'steuerung',
    definition:
      'Der Kennzahlensteckbrief beschreibt eine Kennzahl auf einer Seite: Definition, Datenquelle, Berechnungsweg, Rhythmus, Verantwortlicher, Schwelle für Handlung und zuständiges Gremium. Er wird je Kennzahl mit Verwaltung und Rechnungswesen ausgefüllt und mit der Geschäftsführung abgestimmt.',
    bedeutung:
      'Der Steckbrief verhindert, dass drei Beteiligte dieselbe Kennzahl unterschiedlich berechnen. Er ist die Voraussetzung dafür, dass ein Bericht Entscheidungen auslöst.',
    heimatort: '/reporting-und-kennzahlen/#steckbrief',
    heimatortLabel: 'Der Kennzahlensteckbrief',
  },
  {
    id: 'plan-ist-abgleich',
    begriff: 'Plan-Ist-Abgleich',
    block: 'steuerung',
    definition:
      'Der Plan-Ist-Abgleich vergleicht geplante mit tatsächlichen Werten, etwa bei Erträgen, Kosten, Leerstand oder Investitionsfortschritt, und weist die Abweichung aus. Zum Abgleich gehören die Erklärung der Abweichung und die Entscheidung, ob nachgesteuert oder der Plan angepasst wird.',
    bedeutung:
      'Der Abgleich beantwortet die erste Frage jedes Eigentümerberichts: Wo stehen wir zum Plan? Weil er regelbasiert ist, eignet er sich für die Vorbereitung durch KI-Werkzeuge. Die Bewertung bleibt beim Menschen.',
    heimatort: '/reporting-und-kennzahlen/#fuenf-fragen',
    heimatortLabel: 'Fünf Fragen, die ein Eigentümerbericht beantwortet',
  },
  {
    id: 'reporting',
    begriff: 'Reporting',
    block: 'steuerung',
    definition:
      'Reporting ist die regelmäßige, strukturierte Berichterstattung über Zustand und Entwicklung eines Bestands an Eigentümer, Geschäftsführung oder Gremien. Ein Eigentümerbericht beantwortet wenige Fragen: Wo stehen wir zum Plan, was hat sich verändert, wo sind Abweichungen und warum, welche Entscheidungen stehen an, was ist umgesetzt. Er unterscheidet sich vom Verwaltungsreport, der das Tagesgeschäft abbildet.',
    bedeutung:
      'Ein Bericht ist gut, wenn er Entscheidungen auslöst. Berichtstermin und Entscheidungstermin gehören deshalb zusammen, mit Protokoll und Nachverfolgung.',
    heimatort: '/reporting-und-kennzahlen/',
    heimatortLabel: 'Reporting und Kennzahlen für Eigentümer und Geschäftsleitungen',
  },

  /* -------------------------------------------------------------------------
     Zusammenarbeit und Vertrag
  ------------------------------------------------------------------------- */
  {
    id: 'vertraulichkeitsvereinbarung',
    begriff: 'Vertraulichkeitsvereinbarung',
    block: 'zusammenarbeit',
    definition:
      'Eine Vertraulichkeitsvereinbarung ist die schriftliche Zusage, erhaltene Informationen nur für den vereinbarten Zweck zu nutzen und nicht an Dritte weiterzugeben. Sie regelt, welche Informationen erfasst sind, wer Zugang erhält und was nach Ende der Zusammenarbeit mit ihnen geschieht. Ausgestaltung und Rechtsfolgen sind Sache der Vertragsparteien und ihrer Rechtsberater.',
    bedeutung:
      'Die Vereinbarung steht vor jedem Datenaustausch. Erst danach fließen Mieterdaten, Verträge und andere Detaildaten in ein Mandat.',
    heimatort: '/zusammenarbeit/#vertraulichkeit',
    heimatortLabel: 'Vertraulichkeit und Umgang mit Daten',
  },
  {
    id: 'leistungsbeschreibung',
    begriff: 'Leistungsbeschreibung',
    block: 'zusammenarbeit',
    definition:
      'Die Leistungsbeschreibung legt vor der Beauftragung fest, was ein Dienstleister zu liefern hat: Leistungsumfang mit ausdrücklichen Ausschlüssen, Schnittstellen zu anderen Gewerken, Qualitäten und Materialien, Termine, Dokumentationspflichten und eine Regelung für Unvorhergesehenes. Sie ist die Grundlage dafür, dass Angebote vergleichbar werden.',
    bedeutung:
      'Die Leistungsbeschreibung ist der erste von drei Steuerungspunkten in der Dienstleistersteuerung. Was hier fehlt, erscheint später als Nachtrag oder als Streit bei der Abnahme.',
    heimatort: '/dienstleistersteuerung/#kette',
    heimatortLabel: 'Die Steuerungskette der Dienstleistersteuerung',
  },
  {
    id: 'nachtrag',
    begriff: 'Nachtrag',
    block: 'zusammenarbeit',
    definition:
      'Ein Nachtrag ist eine Änderung oder Erweiterung eines bereits erteilten Auftrags, meist mit Auswirkung auf Preis oder Termin. Er entsteht, wenn sich Umfang, Mengen oder Bedingungen gegenüber dem Angebot ändern. Eine Nachtragsregel legt fest, dass Nachträge vor Ausführung angezeigt, begründet und freigegeben werden und wer bis zu welcher Stufe freigibt. Die vertragsrechtliche Bewertung einzelner Nachträge übernimmt Ihr Rechtsanwalt.',
    bedeutung:
      'Nicht der Nachtrag ist das Problem, sondern der Nachtrag, der erst mit der Rechnung erscheint. Der Nachtragsanteil je Dienstleister ist zugleich eine Kennzahl für die Qualität der Leistungsbeschreibung.',
    heimatort: '/dienstleistersteuerung/#kette',
    heimatortLabel: 'Die Steuerungskette der Dienstleistersteuerung',
  },
  {
    id: 'abnahme',
    begriff: 'Abnahme',
    block: 'zusammenarbeit',
    definition:
      'Die Abnahme ist die dokumentierte Feststellung, dass eine beauftragte Leistung erbracht wurde: mit Protokoll, Beteiligten, Datum und einer Mängelliste, die je Mangel einen Verantwortlichen und einen Termin für die Nachbesserung nennt. Erst nach der Abnahme wird die Schlussrechnung freigegeben. Welche rechtlichen Folgen eine Abnahme hat, etwa für Gewährleistung und Zahlung, klärt Ihr Rechtsanwalt.',
    bedeutung:
      'Die Abnahme ist der dritte Steuerungspunkt. Ohne Protokoll und Fotodokumentation lässt sich später weder ein Mangel belegen noch eine Rechnung sauber prüfen.',
    heimatort: '/dienstleistersteuerung/#kette',
    heimatortLabel: 'Die Steuerungskette der Dienstleistersteuerung',
  },

  /* -------------------------------------------------------------------------
     KI und Daten
  ------------------------------------------------------------------------- */
  {
    id: 'datenqualitaet',
    begriff: 'Stammdaten und Datenqualität',
    block: 'ki-daten',
    definition:
      'Stammdaten sind die dauerhaften Grunddaten eines Bestands: Objekte, Einheiten, Flächen, Verträge, Kostenstellen, Zuständigkeiten. Datenqualität beschreibt, ob diese Daten vollständig, aktuell, eindeutig und widerspruchsfrei sind, insbesondere zwischen Verwaltungssystem und Buchhaltung. Datenqualität ist eine Aufgabe mit Verantwortlichem, keine Eigenschaft, die sich von selbst einstellt.',
    bedeutung:
      'Jede Kennzahl, jeder Bericht und jedes KI-Werkzeug arbeitet mit diesen Daten. Nennen drei Beteiligte unterschiedliche Leerstandsquoten, beginnt die Suche nach der Ursache bei den Stammdaten.',
    heimatort: '/ki-immobilienmanagement/#pilot',
    heimatortLabel: 'Was ein Pilot enthält',
  },
  {
    id: 'freigabe',
    begriff: 'Freigabe durch Menschen',
    block: 'ki-daten',
    definition:
      'Freigabe durch Menschen heißt: Kein Ergebnis eines automatisierten oder KI-gestützten Arbeitsschritts wird wirksam, bevor ein Verantwortlicher es geprüft und freigegeben hat. Vorab ist festgelegt, wer prüft, wer freigibt, was das Werkzeug allein vorschlagen darf und was nie. Zahlungs- und Investitionsentscheidungen bleiben in jedem Fall beim Menschen.',
    bedeutung:
      'Die Freigabe hält die Verantwortung dort, wo sie hingehört. Sie ist zugleich die Bedingung, unter der KI-Werkzeuge im Immobilienmanagement in einen Regelbetrieb gehen können.',
    heimatort: '/ki-immobilienmanagement/#pilot',
    heimatortLabel: 'Was ein Pilot enthält',
  },
] as const;

/**
 * Alternative Schreibweisen aus docs/CONTENT-PLAN-V2.md (Abschnitt 5, Frontmatter der Beitraege).
 * Die Seiten verlinken die kurzen ids; die langen Formen werden hier auf dieselben Eintraege abgebildet,
 * damit Beitraege und Build-Test beide Schreibweisen aufloesen koennen. Keine eigenen Eintraege.
 */
export const GLOSSAR_ALIAS: Readonly<Record<string, string>> = {
  'stammdaten-datenqualitaet': 'datenqualitaet',
  'zustaendigkeitsmatrix-wertgrenze': 'zustaendigkeitsmatrix',
  'leerstandsquote-leerstandstage': 'leerstand',
  'liquiditaetsplanung': 'liquiditaet',
  'forderungsalter': 'forderungen',
  'technische-abhaengigkeit-buendelung': 'buendelung',
  'freigabe-durch-menschen': 'freigabe',
};

/** Loest Aliasse auf die kanonische id auf; unbekannte ids bleiben unveraendert. */
export function glossarId(id: string): string {
  return GLOSSAR_ALIAS[id] ?? id;
}

/** Eintrag zu einer id (auch Alias), sonst undefined. Beitraege pruefen damit ihre Frontmatter-ids. */
export function glossarEintrag(id: string): GlossarEintrag | undefined {
  const kanonisch = glossarId(id);
  return GLOSSAR.find((e) => e.id === kanonisch);
}

/** Interner Link auf den Glossareintrag, z. B. glossarHref('capex') = "/glossar/#capex". */
export function glossarHref(id: string): string {
  return `/glossar/#${glossarId(id)}`;
}

/** Eintraege eines Themenblocks in Datenreihenfolge. */
export function glossarNachBlock(block: GlossarBlockId): GlossarEintrag[] {
  return GLOSSAR.filter((e) => e.block === block);
}

/** Alle kanonischen ids, z. B. fuer den Build-Test. */
export const GLOSSAR_IDS: readonly string[] = GLOSSAR.map((e) => e.id);
