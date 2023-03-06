//AJOUT DU FEED DU SITE
fetch(`http://localhost:3000/blogs`)
.then(reponse => reponse.json())
.then(json =>{
    json.forEach(element => {
        let text = $(`
        <div class="col">
          <a href="../page_blog/page_blog.html?id=${element.id}" style="text-decoration:none">
          <div class="card">
            <img src="https://via.placeholder.com/150x90" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">${element.titre}</h5>
              <p class="card-text">${element.description}</p>
            </div>
          </div>
          </a>
        </div>
        `)
        $('#feed').append(text);
    })
})