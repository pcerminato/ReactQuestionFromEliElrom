export default function createHtmlTable(dataset) {
  const datasetKeys = dataset.length ? Object.keys(dataset[0]) : [];
  const table = document.createElement("table");
  const thead = table.createTHead();
  const tbody = table.createTBody();
  const tableHeaderRow = thead.insertRow();

  // Create the table header row from the object's keys
  datasetKeys.forEach((key) => {
    const th = document.createElement("th");

    th.innerText = key;
    tableHeaderRow.appendChild(th);
  });

  // create the rows with the data.
  dataset.forEach((data) => {
    const tr = tbody.insertRow();

    // compose the td
    datasetKeys.forEach((key) => {
      const td = document.createElement("td");
      const tdValue = data[key] ?? "-";

      td.innerText = tdValue;

      // cells that contain numbers, must be aligned to the right
      if (typeof tdValue === "number") {
        td.style.textAlign = "right";
      }

      tr.appendChild(td);
    });
  });

  return table;
}

const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

const mountainsTable = createHtmlTable(MOUNTAINS);

console.log(mountainsTable);
