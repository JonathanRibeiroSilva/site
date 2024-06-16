let lista=[];
let id=0;

function teste(){
        console.log("Teste")
        orgao=document.getElementById("orgao").value;
        filtro=document.getElementById("filtro").value;
        descricao=document.getElementById("descricao").value;
        canal=document.getElementById("canal").value;
        uf=document.getElementById("uf").value;
        municipio=document.getElementById("municipio").value;
        local=document.getElementById("local").value;
        nomeEnvolvido=document.getElementById("nome-envolvido").value;
        cpfEnvolvido=document.getElementById("cpf-envolvido").value;
        orgaoEnvolvido=document.getElementById("orgao-envolvido").value;

        lista.push({"orgao":orgao, "filtro":filtro, "descricao":descricao, "canal":canal, "uf":uf, "municipio":municipio, "local":local, "nomeEnvolvido":nomeEnvolvido, "cpfEnvolvido":cpfEnvolvido, "orgaoEnvolvido":orgaoEnvolvido, "id":id});
        id=id+1;
        imprimirLista(lista);
    }

function imprimirLista(lista){
    let tabela=document.getElementById("tabela");
    tabela.innerHTML="";
    lista.forEach(function(denuncia, indice){
        let novaLinha=document.createElement("tr");
        novaLinha.innerHTML=`
                <tr>
                        <td>${denuncia.orgao}</td>
                        <td>${denuncia.filtro}</td>
                        <td>${denuncia.descricao}</td>
                        <td>${denuncia.canal}</td>  
                        <td>${denuncia.uf}</td>
                        <td>${denuncia.municipio}</td>
                        <td>${denuncia.local}</td>
                        <td>${denuncia.nomeEnvolvido}</td>
                        <td>${denuncia.cpfEnvolvido}</td>
                        <td>${denuncia.orgaoEnvolvido}</td>
                        <td class="actions">
                <button class="delete" onclick="deletarDenuncia(${indice})"><span class="material-icons">delete</span></button>
            </td>
                </tr>`
        tabela.append(novaLinha);
        })
    console.log(lista); 
}

function deletarDenuncia(indice){
    if (confirm(`Tem certeza que deseja excluir a denúncia?`)) {
        lista.splice(indice, 1);
        imprimirLista(lista);
        console.log(indice)
    }
}