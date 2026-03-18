async function loadArticles(){

 try{

  const res = await fetch("http://localhost:5000/api/articles")
  const articles = await res.json()

  const container = document.getElementById("articlesContainer")

  container.innerHTML = ""

  articles.forEach(article => {

   container.innerHTML += `
   <article class="post-card">

    <div class="post-image">
     <img src="${article.image || 'images/default-blog.jpg'}" style="width:100%;height:200px;object-fit:cover;">
    </div>

    <div class="post-content">

     <span class="category-badge">Health</span>

     <h3>${article.title}</h3>

     <div class="post-meta">
      <span><i class="far fa-calendar"></i> ${new Date(article.createdAt).toLocaleDateString()}</span>
     </div>

     <p>${article.content.substring(0,120)}...</p>
     <img src="http://localhost:5000${article.image}">

    </div>

   </article>
   `
  })

 }catch(error){
  console.error("Error loading articles:", error)
 }

}

loadArticles()

//==================paginantion 
const articlesPerPage = 4
let currentPage = 1
let allArticles = []

async function loadArticles(){

 const res = await fetch("http://localhost:5000/api/articles")
 allArticles = await res.json()

 renderPage()
 createPagination()
}

function renderPage(){

 const container = document.getElementById("articlesContainer")

 const start = (currentPage - 1) * articlesPerPage
 const end = start + articlesPerPage

 const articles = allArticles.slice(start,end)

 container.innerHTML = ""

 articles.forEach(article => {

  container.innerHTML += `
  <article class="post-card">

   <div class="post-image">
    <img src="${article.image || 'images/default-blog.jpg'}" style="width:100%;height:200px;object-fit:cover;">
   </div>

   <div class="post-content">

    <span class="category-badge">Health</span>

    <h3>${article.title}</h3>

    <div class="post-meta">
     <span><i class="far fa-calendar"></i> ${new Date(article.createdAt).toLocaleDateString()}</span>
    </div>

    <p>${article.content.substring(0,120)}...</p>

   </div>

  </article>
  `
 })

}

function createPagination(){

 const pagination = document.getElementById("pagination")

 const totalPages = Math.ceil(allArticles.length / articlesPerPage)

 pagination.innerHTML = ""

 for(let i=1;i<=totalPages;i++){

  pagination.innerHTML += `
  <button onclick="changePage(${i})" class="${i===currentPage ? 'active' : ''}">
   ${i}
  </button>
  `
 }

}

function changePage(page){

 currentPage = page
 renderPage()
 createPagination()

}

loadArticles()