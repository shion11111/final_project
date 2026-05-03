# Shion's CIS 376 Portfolio
 This app is a personal portfolio about what I learned in CIS 376 course.

## 👩‍💻 Author
- Shion Kishaba
- <a href="https://github.com/shion11111" target="_blank">GitHub Profile</a>


## 📌 User Story
- *As a* student completing the CIS 376 course,
- *I want to* retain and strengthen the knowledge and skills I have learned,
- *So that* I can confidently apply them in real-world projects and my future career.


## ❓ Narrative
- This app is peronal portfolio that showcases my projects, skills, and development progress.

- I built it to demonstrate my abilities and create something useful for future.

- I designed the layout, added responsive styling, and organized content for a better user experience.

-  I strated with basic HTML and CSS. It was challenging to create content and search JavaScript because I was still learning how to structure and connect everything.


## 🕸️ Attribution
- <a href="https://www.w3schools.com/howto/howto_css_cards.asp" target="_blank">w3 schools - Card</a>

- <a href="https://fonts.google.com/specimen/Tangerine?preview.script=Latn">Google Font</a>

- Cloudflare normalization

- <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" target="_blank">Bootstrap 5.2</a>


## 🧱 Project Structure
```
C:.
│   index.html
│   README.md
│
├───assets
│       data.json
│
├───pages
│       filter.html
│       login.html
│
├───scripts
│       content.js
│       search.js
│
└───styles
        style.css
```

## 💡 Code Highlight
### content.js
This is the code loads data from a JSON file and then sends it to the renderContent function so it can displayed on the page.

```scripts/content.js
fetch("./assets/data.json")
  .then(response => response.json())
  .then(data => {
    contentData = data;
    renderContent(contentData.content);
  });
```



## ✅ Validatipon
- <a href="https://validator.nu/?doc=https%3A%2F%2Fshion11111.github.io%2Fportfolio%2F" target="_blank">Nu Validator results</a>
- <a href="#" target="_blank">WAVE accessibility report</a>


## 🔮 Future Improvements
<a href="https://github.com/shion11111/final_project/milestone/1" target="_blank">Sprint 99</a>

- Future: Add a search bar that allows users to filter projects and guides by title or keyword. This will improve usability when the content list grow.
- Improvement: Improve layout across all screen sizes, especially mobile, by refining spacing, font sizes, and card layout to ensure a consistent and readable user experience.


