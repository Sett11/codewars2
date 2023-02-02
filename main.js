function isAgeDiverse(l) {
  const a = [[], [], [], [], [], [], [], [], [], []];
  l.forEach((e) =>
    e.age < 20
      ? a[0].push(e.age)
      : e.age >= 20 && e.age < 30
      ? a[1].push(e.age)
      : e.age >= 30 && e.age < 40
      ? a[2].push(e.age)
      : e.age >= 40 && e.age < 50
      ? a[3].push(e.age)
      : e.age >= 50 && e.age < 60
      ? a[4].push(e.age)
      : e.age >= 60 && e.age < 70
      ? a[5].push(e.age)
      : e.age >= 70 && e.age < 80
      ? a[6].push(e.age)
      : e.age >= 80 && e.age < 90
      ? a[7].push(e.age)
      : e.age >= 90 && e.age < 100
      ? a[8].push(e.age)
      : a[9].push(e.age)
  );
  return a.every(el=>el.length>0)
}
console.log(
  isAgeDiverse([
    {
      firstName: "Mohammad",
      lastName: "N.",
      country: "United Arab Emirates",
      continent: "Asia",
      age: 39,
      language: "C",
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 21,
      language: "C",
    },
    {
      firstName: "William",
      lastName: "L.",
      country: "Sweden",
      continent: "Europe",
      age: 32,
      language: "Java",
    },
    {
      firstName: "Hugo",
      lastName: "K.",
      country: "Spain",
      continent: "Europe",
      age: 39,
      language: "Python",
    },
    {
      firstName: "Sofia",
      lastName: "P.",
      country: "Italy",
      continent: "Europe",
      age: 71,
      language: "Clojure",
    },
    {
      firstName: "Artem",
      lastName: "O.",
      country: "Ukraine",
      continent: "Europe",
      age: 29,
      language: "Java",
    },
    {
      firstName: "Oliver",
      lastName: "P.",
      country: "Wales",
      continent: "Europe",
      age: 69,
      language: "JavaScript",
    },
    {
      firstName: "Emily",
      lastName: "N.",
      country: "Ireand",
      continent: "Europe",
      age: 98,
      language: "Ruby",
    },
    {
      firstName: "Sofia",
      lastName: "W.",
      country: "Moldova",
      continent: "Europe",
      age: 29,
      language: "Ruby",
    },
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    },
    {
      firstName: "Sofia",
      lastName: "A.",
      country: "Denmark",
      continent: "Europe",
      age: 19,
      language: "Python",
    },
    {
      firstName: "Yusuf",
      lastName: "N.",
      country: "Turkey",
      continent: "Europe",
      age: 22,
      language: "Python",
    },
    {
      firstName: "Nor",
      lastName: "E.",
      country: "Malaysia",
      continent: "Asia",
      age: 21,
      language: "Clojure",
    },
    {
      firstName: "Emily",
      lastName: "A.",
      country: "Northern Ireand",
      continent: "Europe",
      age: 32,
      language: "JavaScript",
    },
    {
      firstName: "Mariam",
      lastName: "B.",
      country: "Egypt",
      continent: "Africa",
      age: 89,
      language: "Python",
    },
    {
      firstName: "Hanna",
      lastName: "L.",
      country: "Hungary",
      continent: "Europe",
      age: 29,
      language: "JavaScript",
    },
    {
      firstName: "Oliver",
      lastName: "Q.",
      country: "Australia",
      continent: "Oceania",
      age: 69,
      language: "PHP",
    },
    {
      firstName: "Victoria",
      lastName: "T.",
      country: "Puerto Rico",
      continent: "Americas",
      age: 70,
      language: "Python",
    },
    {
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "Clojure",
    },
    {
      firstName: "Shufen",
      lastName: "L.",
      country: "Taiwan",
      continent: "Asia",
      age: 35,
      language: "PHP",
    },
    {
      firstName: "Nikau",
      lastName: "R.",
      country: "New Zealand",
      continent: "Oceania",
      age: 39,
      language: "Ruby",
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 32,
      language: "JavaScript",
    },
    {
      firstName: "Nareh",
      lastName: "Q.",
      country: "Armenia",
      continent: "Europe",
      age: 80,
      language: "Clojure",
    },
    {
      firstName: "Ramon",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 99,
      language: "Ruby",
    },
    {
      firstName: "Jakub",
      lastName: "I.",
      country: "Slovakia",
      continent: "Europe",
      age: 28,
      language: "Java",
    },
    {
      firstName: "Viktoria",
      lastName: "W.",
      country: "Bulgaria",
      continent: "Europe",
      age: 98,
      language: "PHP",
    },
    {
      firstName: "Fatima",
      lastName: "K.",
      country: "Saudi Arabia",
      continent: "Asia",
      age: 105,
      language: "Clojure",
    },
    {
      firstName: "Fatima",
      lastName: "A.",
      country: "Algeria",
      continent: "Africa",
      age: 25,
      language: "JavaScript",
    },
    {
      firstName: "Fatima",
      lastName: "H.",
      country: "Pakistan",
      continent: "Asia",
      age: 8,
      language: "JavaScript",
    },
    {
      firstName: "Mia",
      lastName: "H.",
      country: "Germany",
      continent: "Europe",
      age: 39,
      language: "Ruby",
    },
    {
      firstName: "Malik",
      lastName: "J.",
      country: "Greenland",
      continent: "Europe",
      age: 19,
      language: "Python",
    },
    {
      firstName: "elen",
      lastName: "E.",
      country: "Finland",
      continent: "Europe",
      age: 55,
      language: "Ruby",
    },
    {
      firstName: "Manue",
      lastName: "C.",
      country: "Equatorial Guinea",
      continent: "Africa",
      age: 22,
      language: "Ruby",
    },
    {
      firstName: "Fatemeh",
      lastName: "Z.",
      country: "Iran",
      continent: "Asia",
      age: 29,
      language: "Java",
    },
    {
      firstName: "Thomas",
      lastName: "L.",
      country: "Canada",
      continent: "Americas",
      age: 38,
      language: "Java",
    },
    {
      firstName: "Noe",
      lastName: "O.",
      country: "Albania",
      continent: "Europe",
      age: 23,
      language: "Python",
    },
    {
      firstName: "Agustín",
      lastName: "M.",
      country: "Chile",
      continent: "Americas",
      age: 37,
      language: "C",
    },
    {
      firstName: "Sofija",
      lastName: "Q.",
      country: "Latvia",
      continent: "Europe",
      age: 29,
      language: "Ruby",
    },
    {
      firstName: "Emma",
      lastName: "Z.",
      country: "Netherlands",
      continent: "Europe",
      age: 29,
      language: "Ruby",
    },
    {
      firstName: "Aya",
      lastName: "D.",
      country: "Libya",
      continent: "Africa",
      age: 39,
      language: "C",
    },
  ])
);
