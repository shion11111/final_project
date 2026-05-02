const searchBox = document.getElementById("searchBox");

function handleContentSearch() {
  const query = searchBox.value.trim().toLowerCase();

  if (!query) {
    renderContent(contentData.content);
    return;
  }

  const results = contentData.content.filter(item => {
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  renderContent(results);
}

searchBox.addEventListener("input", handleContentSearch);


const sortBtn = document.getElementById("sortBtn");
let isAscending = true;

sortBtn.addEventListener("click", () => {
  const sortedData = [...contentData.content].sort((a, b) => {
    return isAscending 
      ? a.title.localeCompare(b.title) 
      : b.title.localeCompare(a.title);
  });

  isAscending = !isAscending; // Toggle direction for next click
  renderContent(sortedData);
});