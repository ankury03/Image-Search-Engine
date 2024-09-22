const searchForm = document.querySelector("#searchForm");
const searchBox = document.querySelector("#searchBox");
const searchResult = document.querySelector("#searchResult");
let page = 1;
const key = "WDDKhYVL1mas51qx3B8u0Y_ze4HnavLxXmoDVMOLGfM";

async function searchImage() {
    const keyword = searchBox.value;  
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    
    if (page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;  
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    more.style.display = "block";
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;  
    searchImage();
});

more.addEventListener("click", () => {
    page++;
    searchImage();
})
