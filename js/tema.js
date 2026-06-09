document.addEventListener("DOMContentLoaded", () => {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const logoImg = document.getElementById('logo-img');

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            
            // Limpa as classes do body e aplica o novo tema (se não for o light)
            document.body.className = '';
            if(theme !== 'theme-light') {
                document.body.classList.add(theme);
            }

            // Lógica para trocar a logo
            if (theme === 'theme-dark' || theme === 'theme-contrast') {
                logoImg.src = 'img/logo-tema-escuro.png'; 
            } else {
                // Volta para a logo original do tema claro
                logoImg.src = 'img/logoPng.png'; 
            }
        });
    });
});