// esperar carregar a página

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SCROLL SUAVE
    ========================= */

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const id = this.getAttribute("href");

            const destino = document.querySelector(id);

            if (destino) {

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================
       ANIMAÇÃO DOS CARDS
    ========================= */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        card.style.transition = "0.5s";

    });


    window.addEventListener("scroll", () => {

        cards.forEach(card => {

            let pos = card.getBoundingClientRect().top;

            if (pos < window.innerHeight - 50) {

                card.style.opacity = 1;
                card.style.transform = "translateY(0)";

            }

        });

    });


    /* =========================
       ANO AUTOMATICO
    ========================= */

    const ano = document.getElementById("ano");

    if (ano) {

        ano.innerText =
            "© " +
            new Date().getFullYear() +
            " Reginaldo de Oliveira";

    }

});