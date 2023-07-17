var cepForm = document.getElementById('cepForm');

cepForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var cepInput = document.getElementById('cep');
    var cep = cepInput.value.replace(/\D/g, '');

    if (cep.length === 8) {
        fetch('https://viacep.com.br/ws/' + cep + '/json/')
            .then(response => response.json())
            .then((data) => {

                var resultDiv = document.getElementById('result');
                resultDiv.innerHTML = '<strong>Endereço:</strong> ' + data.logradouro + '<br>' +
                    '<strong>Bairro:</strong> ' + data.bairro + '<br>' +
                    '<strong>Cidade:</strong> ' + data.localidade + '<br>' +
                    '<strong>Estado:</strong> ' + data.uf + '<br>';
            })
            .catch((error) => {
                alert('Erro ao realizar a pesquisa: ' + error.message);
            });
    } else {
        alert('CEP inválido.');
    }
});