const posts = [
  {
    text: "Сьогодні завершив тестування нового інструменту для саморегуляції.",
    link: "https://t.me/yourchannel/123"
  },
  {
    text: "Запустив новий проєкт на Boosty — підтримка психологічної стійкості.",
    link: "https://boosty.to/yourprofile"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const post = posts[Math.floor(Math.random() * posts.length)];
  document.getElementById("latest-post").innerHTML = `
    <p>${post.text}</p>
    <a href="${post.link}" target="_blank">Читати більше</a>
  `;
});

