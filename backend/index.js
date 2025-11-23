const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "student.veleri.hr",
  user: "riwa",
  password: "11",
  port: 3306,
  database: "riwa",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB");
});

app.get("/api/knjige", (req, res) => {
  connection.query("SELECT * FROM knjiga", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/api/knjige/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM knjiga WHERE id = ?",
    [id],
    (error, results) => {
      if (error) throw error;
      res.json(results[0]);
    }
  );
});

app.post("/api/knjige", (req, res) => {
  const { naslov, autor, opis, slika, stanje, status } = req.body;

  connection.query(
    `INSERT INTO knjiga (naslov, autor, opis, slika, stanje, status)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [naslov, autor, opis, slika, stanje, status],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "Knjiga dodana", id: results.insertId });
    }
  );
});

app.put("/api/knjige/:id", (req, res) => {
  const id = req.params.id;
  const { naslov, autor, opis, slika, stanje, status } = req.body;

  connection.query(
    `UPDATE knjiga 
     SET naslov=?, autor=?, opis=?, slika=?, stanje=?, status=?
     WHERE id=?`,
    [naslov, autor, opis, slika, stanje, status, id],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "Knjiga ažurirana" });
    }
  );
});

app.delete("/api/knjige/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "DELETE FROM knjiga WHERE id = ?",
    [id],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "Knjiga obrisana" });
    }
  );
});

app.get("/api/korisnici", (req, res) => {
  connection.query("SELECT * FROM korisnik", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/api/korisnici/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM korisnik WHERE id = ?",
    [id],
    (error, results) => {
      if (error) throw error;
      res.json(results[0]);
    }
  );
});

app.post("/api/korisnici", (req, res) => {
  const { ime, prezime, brtel, korime, lozinka, zadnji_pristup, uloga } = req.body;

  connection.query(
    `INSERT INTO korisnik (ime, prezime, brtel, korime, lozinka, zadnji_pristup, uloga)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [ime, prezime, brtel, korime, lozinka, zadnji_pristup, uloga],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "Korisnik dodan", id: results.insertId });
    }
  );
});

app.put("/api/korisnici/:id", (req, res) => {
  const id = req.params.id;
  const { ime, prezime, brtel, korime, lozinka, zadnji_pristup, uloga } = req.body;

  connection.query(
    `UPDATE korisnik
     SET ime=?, prezime=?, brtel=?, korime=?, lozinka=?, zadnji_pristup=?, uloga=?
     WHERE id=?`,
    [ime, prezime, brtel, korime, lozinka, zadnji_pristup, uloga, id],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "Korisnik ažuriran" });
    }
  );
});

app.delete("/api/korisnici/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "DELETE FROM korisnik WHERE id = ?",
    [id],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "Korisnik obrisan" });
    }
  );
});

app.get("/api/rezervacije", (req, res) => {
  connection.query("SELECT * FROM rezervacija", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get("/api/rezervacije/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM rezervacija WHERE id = ?",
    [id],
    (error, results) => {
      if (error) throw error;
      res.json(results[0]);
    }
  );
});

app.post("/api/rezervacije", (req, res) => {
  const { datum_rezervacije, datum_vracanja, knjiga, korisnik } = req.body;

  connection.query(
    `INSERT INTO rezervacija (datum_rezervacije, datum_vracanja, knjiga, korisnik)
     VALUES (?, ?, ?, ?)`,
    [datum_rezervacije, datum_vracanja, knjiga, korisnik],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "Rezervacija dodana", id: results.insertId });
    }
  );
});

app.put("/api/rezervacije/:id", (req, res) => {
  const id = req.params.id;
  const { datum_rezervacije, datum_vracanja, knjiga, korisnik } = req.body;

  connection.query(
    `UPDATE rezervacija
     SET datum_rezervacije=?, datum_vracanja=?, knjiga=?, korisnik=?
     WHERE id=?`,
    [datum_rezervacije, datum_vracanja, knjiga, korisnik, id],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "Rezervacija ažurirana" });
    }
  );
});

app.delete("/api/rezervacije/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "DELETE FROM rezervacija WHERE id = ?",
    [id],
    (error, results) => {
      if (error) throw error;
      res.json({ message: "Rezervacija obrisana" });
    }
  );
});

app.listen(port, () => {
  console.log("Server running at port: " + port);
});
