const container = document.querySelector(".container");
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");

//Making http request
const url = "https://jsonplaceholder.typicode.com/posts";

const fetchPosts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // display to DOM
    const results = data.map((post) => {
      return `
      <div class="card">
      <div class="card-title">
        <h2>${post.title.charAt(0).toUpperCase() + post.title.substring(1)}</h2>
      </div>
      <div class="card-body">
        <p>
          ${post.body}
        </p>
      </div>
    </div>
        `;
    });
    container.innerHTML = results.join("");
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", fetchPosts);
