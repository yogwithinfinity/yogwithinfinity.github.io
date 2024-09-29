fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Set title, description, and email
    document.getElementById("title").textContent = data.title;
    document.getElementById("description").textContent = data.description;

    const offeringsList = document.getElementById("offerings");
    data.offerings.forEach((offering) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item"); // Add the Bootstrap class to the li element

      // Create an h5 for the title
      const title = document.createElement("h5");
      title.textContent = offering.title; // Assuming each offering has a title property

      // Create a p for the description
      const description = document.createElement("p");
      description.textContent = offering.description; // Assuming each offering has a description property

      // Append h5 and p to the li
      li.appendChild(title);
      li.appendChild(description);

      // Append li to the offerings list
      offeringsList.appendChild(li);
    });

    // Set social media links
    document.getElementById("facebook-link").href = data.socialLinks.facebook;
    document.getElementById("instagram-link").href = data.socialLinks.instagram;
    document.getElementById("youtube-link").href = data.socialLinks.youtube;
    document.getElementById("gmail-link").href = data.socialLinks.gmail;

    // Set copyright
    document.getElementById("copyright").innerHTML = data.copyright;
  })
  .catch((error) => console.error("Error loading data:", error));
