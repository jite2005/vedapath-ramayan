document.addEventListener("DOMContentLoaded", function () {
  const playlistData = [
    {
      image: "./images/baalkand.jpg",
      heading: "Bala Kanda",
      title: "The childhood of Lord Rama",
      date: "2024-03-01",
      link: "./veiw-page.html"
    },
    {
      image: "./images/ayodhyakand.jpg",
      heading: "Ayodhya Kanda",
      title: "Rama's departure from Ayodhya",
      date: "2024-03-05",
      link: "./veiw-page.html"
    },
    {
      image: "./images/Aranya Kanda.jpg",
      heading: "Aranya Kanda",
      title: "Life in the forest and Sita's abduction",
      date: "2024-03-10",
      link: "./veiw-page.html"
    },
    {
      image: "./images/Kishkindha Kanda.webp",
      heading: "Kishkindha-Kanda",
      title: "Alliance with Hanuman and Sugriva",
      date: "2024-03-15",
      link: "./veiw-page.html"
    },
    {
      image: "./images/Sundara Kanda.jpg",
      heading: "Sundara Kanda",
      title: "Hanuman's leap and search for Sita",
      date: "2024-03-20",
      link: "./veiw-page.html"
    },
    {
      image: "./images/Yuddha Kanda.jpg",
      heading: "Yuddha Kanda",
      title: "War with Ravana and victory",
      date: "2024-03-25",
      link: "./veiw-page.html"
    }
  ];

  const container = document.getElementById("playlist-cards");

  playlistData.forEach(item => {
    const card = document.createElement("div");
    card.className = "col";

    card.innerHTML = `
      <div class="card h-100 shadow-lg mx-2">
        <img src="${item.image}"  class="card-img-top  " alt="${item.heading}">
        <div class="card-body">
          <h5 class="card-title">${item.heading}</h5>
          <p class="card-text">${item.title}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <small>📅 ${item.date}</small>
          <a href="${item.link}" target="_self" class="btn btn-sm btn-primary">Go To</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});
