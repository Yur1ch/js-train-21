class Musician {
  static count = 0;

  #name;
  #instrument;

  constructor(name, instrument) {
    this.#name = name;
    this.#instrument = instrument;
    Musician.count++;
  }

  get name() {
    return this.#name;
  }

  get instrument() {
    return this.#instrument;
  }

  play() {
    console.log(`${this.#name} грає на ${this.#instrument}`);
  }
}

class Guitarist extends Musician {
  #band;

  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  joinBand(band) {
    this.#band = band;
  }

  play() {
    console.log(
      `${this.name} грає на ${this.instrument} в групі ${this.#band}`
    );
  }
}

class Musician {
  static count = 0;

  #name;
  #instrument;

  constructor(name, instrument) {
    this.#name = name;
    this.#instrument = instrument;
    Musician.count++;
  }

  get name() {
    return this.#name;
  }

  get instrument() {
    return this.#instrument;
  }

  play() {
    console.log(`${this.#name} грає на ${this.#instrument}`);
  }
}

class Guitarist extends Musician {
  #band;

  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  joinBand(band) {
    this.#band = band;
  }

  play() {
    console.log(
      `${this.name} грає на ${this.instrument} в групі ${this.#band}`
    );
  }
}

class Bassist extends Musician {
  #band;

  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  joinBand(band) {
    this.#band = band;
  }

  play() {
    console.log(
      `${this.name} грає на ${this.instrument} в групі ${this.#band}`
    );
  }
}

class Band {
  #name;
  #members;

  constructor(name, members) {
    this.#name = name;
    this.#members = members;
  }

  get name() {
    return this.#name;
  }

  get members() {
    return this.#members;
  }

  set name(newName) {
    this.#name = newName;
  }

  addMember(newMember) {
    if (newMember instanceof Musician) {
      this.#members.push(newMember);
    } else {
      console.log("Новий учасник повинен бути екземпляром класу Musician");
    }
  }

  playMusic() {
    this.#members.forEach((member) => member.play());
  }
}

class Performance {
  #band;
  #location;
  #date;

  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }

  get band() {
    return this.#band;
  }

  get location() {
    return this.#location;
  }

  get date() {
    return this.#date;
  }

  info() {
    console.log(
      `Гурт ${this.#band.name} виступить в ${
        this.#location
      } ${this.#date.toLocaleDateString()}`
    );
  }
}

class Concert extends Performance {
  #ticketPrice;

  constructor(band, location, date, ticketPrice) {
    super(band, location, date);
    this.#ticketPrice = ticketPrice;
  }

  get ticketPrice() {
    return this.#ticketPrice;
  }

  set ticketPrice(newTicketPrice) {
    this.#ticketPrice = newTicketPrice;
  }

  info() {
    console.log(
      `Гурт ${super.band.name} виступить в ${
        super.location
      } ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`
    );
  }
}

const john = new Guitarist("John", "гітара", "The Beatles");
const paul = new Bassist("Paul", "бас-гітара", "The Beatles");

const theBeatles = new Band("The Beatles", [john, paul]);
theBeatles.playMusic();

const concertDate = new Date(2023, 11, 15);
const concert = new Concert(theBeatles, "London", concertDate, 50);
concert.info();

class Vocalist {
  constructor(name, band) {
    this.name = name;
    this.band = band;
  }

  info() {
    console.log(`Вокаліст ${this.name} є членом гурту ${this.band}`);
  }
}

class SongWriter {
  constructor(songs = []) {
    this.songs = songs;
  }

  addSong(song) {
    this.songs.push(song);
  }

  info() {
    console.log(`Написав ${this.songs.length} пісень`);
  }
}

class LeadSinger extends Vocalist {
  constructor(name, band) {
    super(name, band);
  }
}

const beatlesVocalist = new Vocalist("Paul McCartney", "The Beatles");
const mccartneySongs = new SongWriter(["Yesterday", "Hey Jude", "Let It Be"]);
const rollingStonesSinger = new LeadSinger("Mick Jagger", "The Rolling Stones");

beatlesVocalist.info();
mccartneySongs.info();
rollingStonesSinger.info();

