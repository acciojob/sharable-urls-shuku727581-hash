// your code here
 const button = document.getElementById("button");
    const urlElement = document.getElementById("url");

    button.addEventListener("click", () => {
      const name = document.getElementById("name").value;
      const year = document.getElementById("year").value;

      let baseUrl = "https://localhost:8080/";

      // Build query string dynamically
      let query = [];
      if (name) query.push(`name=${encodeURIComponent(name)}`);
      if (year) query.push(`year=${encodeURIComponent(year)}`);

      if (query.length > 0) {
        baseUrl += "?" + query.join("&");
      }

      urlElement.textContent = baseUrl;
    });