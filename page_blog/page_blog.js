//OBTENIR LES PARAMATRES DE l'URL
const params = new URLSearchParams(window.location.search);

const idPublication = params.get("id");

//AJOUT DU CONTENU DE LA PUBLICATION
fetch(`http://localhost:3000/blogs?id=${idPublication}`)
.then(reponse => reponse.json())
.then(json =>{
    json.forEach(element => {
        let text = $(`
        <!--IMAGE-->
        <div class="row d-flex">
            <img src="${element.image1}">
        </div>
        <!--TITLE-->
        <div class="row text-center">
            <h1 class="mt-3 mb-3">${element.titre}</h1>
        </div>
        <!--PARAGRAPHE 1-->
        <div class="row text-left">
            <p>
                ${element.paragraphe1}
            </p>
        </div>

        <!--CARD MIDDLE ARTICLE-->
        <div class="row justify-content-center">
            <div class="card mb-3 col-sm-3 align-items-center border-light">
                <img src="${element.image2}" class="card-img-top pb-2">
                <div class="card-body pt-0 pb-2">
                  <h5 class="card-title">Image</h5>
                </div>
            </div>
        </div>

        <!--PARAGRAPHE 2-->
        <div class="row text-left mb-5">
            <p>
                ${element.pargraphe2}
            </p>
        </div>
        `)
        $('#contenuBlog').append(text);
    })
})

//AJOUT DES COMMENTAIRES DE LA PUBLICATION
fetch(`http://localhost:3000/commentaires?publication=${idPublication}`)
.then(reponse => reponse.json())
.then(json =>{
    json.forEach(element => {
        let text = $(`
        <div class="mt-4 border p-4">
          <h5 class="mb-1" style="color:black">
            Anonyme
          </h5>
          <p class="small mb-0">
            ${element.contenu}
          </p>
        </div>
        `)
        $('#comments').append(text);
    })
})


//AJOUT NOUVEAU COMMENTAIRES PAR UTILISATEUR
$( "#ajout" ).submit(function( event ) {
    alert();
    //Creation objet a envoyer
    const comment = new Object

    //Mettre tout les donnes dans un array et ajouter a lobjet
    var $inputs = $('#ajout :input');
    $inputs.each(function() {
        comment[this.id] = $(this).val();
    });

    //link to publication
    comment[publication] = idPublication;

    //Recuperation date
    var d = new Date();
    var dateFormated = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;
    comment["date"] = dateFormated;

    //Envoi des donnees et changement de page
    $.post("http://localhost:3000/commentaires",comment,
    );
    return false;
});
