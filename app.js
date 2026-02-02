const medicationButton = document.querySelector("#add-medication");
const medicationList = document.querySelector("#medication-list");

const suggestions = [
  {
    name: "אומפרזול 20 מ\"ג",
    note: "לפני ארוחת בוקר",
    status: "טיפול חדש",
  },
  {
    name: "ויטמין D 1000 יחידות",
    note: "פעם ביום",
    status: "תזכורת",
  },
  {
    name: "אטורבסטטין 10 מ\"ג",
    note: "לפני השינה",
    status: "מעקב שומנים",
  },
];

let suggestionIndex = 0;

function addMedication() {
  const next = suggestions[suggestionIndex % suggestions.length];
  suggestionIndex += 1;

  const listItem = document.createElement("li");
  const details = document.createElement("div");
  const title = document.createElement("strong");
  const subtitle = document.createElement("span");
  const tag = document.createElement("span");

  title.textContent = next.name;
  subtitle.textContent = next.note;
  tag.textContent = next.status;
  tag.className = "tag";

  details.appendChild(title);
  details.appendChild(subtitle);
  listItem.appendChild(details);
  listItem.appendChild(tag);

  medicationList.prepend(listItem);
}

medicationButton?.addEventListener("click", addMedication);
