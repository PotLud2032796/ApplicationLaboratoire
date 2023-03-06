$( "#ajout" ).submit(function( event ) {
    //Creation objet a envoyer
     const blog = new Object

    //Mettre tout les donnes dans un array et ajouter a lobjet
    var $inputs = $('#ajout :input');
    $inputs.each(function() {
        blog[this.id] = $(this).val();
    });

    //Recuperation date
    var d = new Date();
    var dateFormated = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;
    blog["date"] = dateFormated;

    //Envoi des donnees et changement de page
    $.post("http://localhost:3000/blogs",blog,
    );

    window.location.href("www.google.com")
});

