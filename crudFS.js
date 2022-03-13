const fs = require("fs");

fs.writeFile(
  "./fs-modules/employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU");
  }
);

fs.readFile("./fs-modules/employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("DOSYA OKUNDU");
});

fs.appendFile(
  "./fs-modules/employees.json",
  '\n{"name": "Employee 2 Name", "salary": 1500}',
  "utf8",
  (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("YENİ VERİ EKLENDİ");
  }
);

fs.unlink("./fs-modules/employees.json", (err) => {
  if (err) console.log(err);
  else console.log("DOSYA SİLİNDİ.");
});
