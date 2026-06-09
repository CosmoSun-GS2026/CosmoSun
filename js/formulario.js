document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form-contato');
    
    if(form) {
        form.addEventListener('submit', (e) => {
            // Impede o recarregamento da página
            e.preventDefault(); 

            // Captura os valores e remove espaços em branco das pontas
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const conta = document.getElementById('conta').value.trim();

            let isValid = true;

            // Validação do Nome
            if (nome === "") {
                document.getElementById('error-nome').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('error-nome').style.display = 'none';
            }

            // Validação do E-mail
            if (email === "") {
                document.getElementById('error-email').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('error-email').style.display = 'none';
            }

            // Validação da Conta
            if (conta === "") {
                document.getElementById('error-conta').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('error-conta').style.display = 'none';
            }

            // Se todas as validações passarem
            if (isValid) {
                // Mostra a mensagem de sucesso
                const msgSucesso = document.getElementById('form-sucesso');
                msgSucesso.style.display = 'block';
                
                // Esconde a mensagem de sucesso após 4 segundos
                setTimeout(() => {
                    msgSucesso.style.display = 'none';
                }, 4000);

                // Limpa os campos do formulário
                form.reset(); 
            }
        });
    }
});