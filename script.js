fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Set title, description, and email
    document.getElementById("title").textContent = data.title;
    document.getElementById("description").textContent = data.description;

    // Set offerings
    const offeringsList = document.getElementById("offerings");
    data.offerings.forEach((offering) => {
      const li = document.createElement("li");
      li.textContent = offering;
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
