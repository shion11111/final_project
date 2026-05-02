const contentGrid = document.getElementById("contentGrid");

let contentData = { content: [] };

fetch("./assets/data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load content data");
    }
    return response.json();
  })
  .then(data => {
    contentData = data;
    renderContent(contentData.content);
  })
  .catch(error => {
    console.error(error);
    contentGrid.innerHTML = "<p class='text-danger'>Failed to load content.</p>";
  });

function renderContent(items) {
  contentGrid.innerHTML = "";

  if (items.length === 0) {
    contentGrid.innerHTML = "<p class='text-muted'>No content found.</p>";
    return;
  }

  items.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-12";

    let buttons = "";

    if (item.type === "project") {
      buttons = `
        <div class="d-flex gap-2 mt-3">
          <a href="${item.live}" target="_blank" class="btn btn-primary">View App</a>
          <a href="${item.repo}" target="_blank" class="btn btn-primary">View Repository</a>
        </div>
     `;
    } else if (item.type === "guide") {
      buttons = `
        <div class="mt-3">
          <a href="${item.learn}" class="btn btn-primary">Learn More</a>
        </div>
     `;
    }

    col.innerHTML = `
      <div class="card h-100 shadow-sm p-3">
        <div class="card-body">

          <h1 class="card-title">${item.title}</h1>

          <h5 class="card-text">
            ${item.description}
          </h5>

          ${buttons}

        </div>
      </div>
    `;

    contentGrid.appendChild(col);
  });
}