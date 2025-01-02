const seta = document.querySelector('.retangulo__imagens');
const sobreMim = document.querySelector('.sobre__mim');
const menuFixo = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');

document.addEventListener("DOMContentLoaded", function () {
    if (seta && sobreMim) {
        seta.addEventListener('click', function () {
            console.log("Seta clicada. Alterando overflow e exibindo navbar.");

            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
            console.log("Overflow atualizado:", document.body.style.overflow);

            sobreMim.scrollIntoView({ behavior: "smooth" });

            menuFixo.style.display = "flex";
        });
    };
});

navbarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
                targetSection.scrollIntoView({behavior: "smooth"});

                if (sectionId === 'home') {
                    window.scrollTo({top: 0, behavior: "smooth"})

                    menuFixo.style.display = "none";
                    document.body.style.overflow = "hidden";
                    document.documentElement.style.overflow = "hidden";
                }
            } else {
                console.error(`Seção com ID "${sectionId}" não encontrada.`);
        }
    });
});

document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Mensagem enviada com sucesso!');
    this.reset();
});