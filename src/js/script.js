produtosJson.map((item, index)=>{
    let produtoitem = document.querySelector(".produtos .produto-conteudo").cloneNode(true);

    produtoitem.querySelector('.nomeTenis').innerHTML = item.nome;
    produtoitem.querySelector('.precoNormal').innerHTML = `de R$ ${item.valorTotal}`;
    produtoitem.querySelector('.precoDesconto').innerHTML = `por R$ ${item.valorDesconto}`;
    produtoitem.querySelector('.parcela').innerHTML = `ou em 3x de R$ ${item.parcela}`

    


    document.querySelector(".produtos-1").append(produtoitem)
});

let produtos = document.querySelectorAll(".produto-conteudo .marca-desconto");

     produtos[2].classList.add('adicionar-marca');