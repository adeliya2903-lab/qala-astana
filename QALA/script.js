function chooseMood(mood) {
  const result = document.getElementById("mood-result");

  const ideas = {
    hungry: "🍴 Try Steak Devil, Chachamen, TARY or Sandyq Prime.",

    relax: "🌿 Take a peaceful walk along the Ishim River.",

    photo: "📸 Go to Bayterek, EXPO or the Palace of Peace.",

    fun: "✨ Explore Khan Shatyr and discover Astana after dark.",
  };

  result.textContent = ideas[mood];
}

function surpriseMe() {
  const places = [
    "✨ Today’s idea: visit Bayterek at sunset.",
    "🍴 Today’s idea: try Steak Devil.",
    "📸 Today’s idea: take photos around EXPO.",
    "🌿 Today’s idea: walk along the Ishim River.",
    "🥘 Today’s idea: discover modern Kazakh cuisine at TARY.",
    "🌙 Today’s idea: explore Astana after dark.",
  ];

  const randomPlace = places[Math.floor(Math.random() * places.length)];

  const result = document.getElementById("mood-result");

  document
    .querySelector(".mood-section")
    .scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    result.textContent = randomPlace;
  }, 500);
}

function restaurantAlert(name) {
  const result = document.getElementById("mood-result");

  document
    .querySelector(".mood-section")
    .scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    result.textContent = "♡ QALA recommendation: " + name;
  }, 400);
}

function showMessage() {
  document.getElementById("message").classList.add("show");
}

function closeMessage() {
  document.getElementById("message").classList.remove("show");
}
