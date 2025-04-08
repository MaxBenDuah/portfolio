"use strict";

// Query Selectors
const form = document.querySelector(".form");
const inputSearch = document.querySelector(".input-search");
const photoContainer = document.querySelector(".photo-container");

const API_KEY = "84l5y2afa167soXgjBNnP1Bt9UeMzg3XZFCu1QS9jSM";
const per_page = 20;
const orientationPhoto = "portrait";

// Query to Get Search Term
const getPhoto = async (query) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}&per_page=${per_page}&orientation=${orientationPhoto}`
  );

  if (!res.ok) {
    photoContainer.innerHTML = "<p>Unable to load images. Try again later.</p>";
    return;
  }

  const data = await res.json();

  photoContainer.innerHTML = "";

  data.results.forEach((result) =>
    photoContainer.insertAdjacentHTML(
      "afterbegin",
      `
    <div><img style="display: block; width: 100%; border-radius: 10px" src=${result.urls.small} alt=${result.alt_description} loading="lazy" /></div>
    `
    )
  );

  inputSearch.focus();
};

const searchPhotos = (e) => {
  e.preventDefault();

  const inputValue = inputSearch.value.trim();

  if (!inputValue) {
    alert("Please enter a description in the search box");
    return;
  }

  getPhoto(inputValue);
};

// Event listener
form.addEventListener("submit", searchPhotos);
