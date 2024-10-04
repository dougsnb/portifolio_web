// contato
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    fetch('https://formspree.io/f/mldrqqwz', {
        method: 'POST',
        body: new FormData(this) // Coleta os dados do formulário
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block'; // Mostra a mensagem de sucesso
            this.reset(); // Limpa o formulário após o envio
        } else {
            alert('Houve um erro ao enviar sua mensagem.'); // Mensagem de erro
        }
    })
    .catch(error => console.error('Erro:', error)); // Log de erro no console
};

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active'); // Adiciona ou remove a classe 'active' no menu
}
