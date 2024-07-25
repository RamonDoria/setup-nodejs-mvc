function mostrarTela(request, response){
    response.render('produto');
}
function adicionarProduto(request, response){
    console.log('ADICIONOU');
    //console.log(request);
    response.redirect("/produto")
}

module.exports = {
    mostrarTela,
    adicionarProduto
}
