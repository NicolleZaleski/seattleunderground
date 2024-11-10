function inscrever() {
    const nome = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (nome && quantidade && email && telefone) {
        document.getElementById("mensagem").innerText = "Inscrição enviada com sucesso!";
    } else {
        document.getElementById("mensagem").innerText = "Por favor, preencha todos os campos.";
    }
}