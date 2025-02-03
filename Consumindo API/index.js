function Procurar() {
    let pais = document.getElementById('pais').value

    //determna o site como variavel conforme a busca que for feita
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalURL)
    //fetch é comando que vai tirar as informaçao da api
    fetch(finalURL)
        // o then é o comando que vai permitir tranalharmos com esses dados
        .then(function (response) {
            return response.json();
        })
// aqui estou puxando os dados de cada um dos itens depois do ponto
        .then(function (data) {
            console.log(data[0])
            console.log(data[0].population)
            console.log(data[0].capital[0])
            console.log(data[0].continents[0])

            let bandeira = document.getElementById('bandeira')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let pop = document.getElementById('pop')
            let cont = document.getElementById('cont')

            nome.innerHTML = pais
            capital.innerHTML = data[0].capital[0]
            cont.innerHTML = data[0].continents[0]
            pop.innerHTML = data[0].population
            bandeira.src = data[0].flags.svg
        })
    
    
    }