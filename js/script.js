console.log("LeKo JavaScript funktioniert");
const translations = {
    de: {
        "nav.about": "Wer wir sind",
        "nav.values": "Was uns verbindet",
        "nav.decisions": "Wie wir entscheiden",
        "nav.stories": "Geschichten aus der LeKo",
        "nav.join": "Mitglied werden",

        "hero.title": "Mehr als Lebensmittel. Eine Gemeinschaft.",
        "hero.slogan":
            "Regional einkaufen. Verantwortung teilen. Gemeinschaft leben.",
        "hero.join": "Mitglied werden",
        "hero.learn": "Mehr erfahren",
        "hero.values":
            "Regional + Biologisch + Verpackungsarm + Solidarisch + Selbstorganisiert"

        "about.title": "Über uns",
        "about.paragraph1": "LeKo ist eine Lebensmittelkooperative aus Weimar, die von Menschen getragen wird, die gemeinsam nachhaltige Lebensmittel einkaufen.",
        "about.paragraph2": "Durch gemeinsame Großbestellungen können wir faire, regionale und biologische Produkte beziehen und gleichzeitig Verpackungsmüll reduzieren."
    }, 

    en: {
        "nav.about": "Who we are",
        "nav.values": "What connects us",
        "nav.decisions": "How we decide",
        "nav.stories": "Stories from LeKo",
        "nav.join": "Become a member",

        "hero.title": "More than food. A community.",
        "hero.slogan":
            "Shop locally. Share responsibility. Live as a community.",
        "hero.join": "Become a member",
        "hero.learn": "Learn more",
        "hero.values":
            "Regional + Organic + Low packaging + Solidarity + Self-organised"

        "about.title": "About us",
        "about.paragraph1": "LeKo is a food cooperative based in Weimar, supported by people who purchase sustainably produced food together.",
        "about.paragraph2": "By placing collective bulk orders, we can source fair, regional and organic products while reducing packaging waste."

            
    },

    es: {
        "nav.about": "Quiénes somos",
        "nav.values": "Lo que nos une",
        "nav.decisions": "Cómo decidimos",
        "nav.stories": "Historias de LeKo",
        "nav.join": "Hazte miembro",

        "hero.title": "Más que alimentos. Una comunidad.",
        "hero.slogan":
            "Comprar de forma regional. Compartir responsabilidades. Vivir en comunidad.",
        "hero.join": "Hazte miembro",
        "hero.learn": "Conoce más",
        "hero.values":
            "Regional + Ecológico + Menos plastico + Solidario + Autogestionado"
   
    
        "about.title": "Sobre nosotros",
        "about.paragraph1": "LeKo es una cooperativa de alimentos de Weimar, sostenida por personas que compran conjuntamente alimentos producidos de forma sostenible.",
        "about.paragraph2": "Mediante pedidos colectivos al por mayor, podemos adquirir productos justos, regionales y ecológicos, y al mismo tiempo reducir los residuos de envases."
    
    }

    
};

const languageButtons = document.querySelectorAll(".language-button");
const translatableElements = document.querySelectorAll("[data-i18n]");

function changeLanguage(language) {
    const selectedTranslations = translations[language];

    if (!selectedTranslations) {
        console.error(`Language not available: ${language}`);
        return;
    }

    translatableElements.forEach((element) => {
        const translationKey = element.dataset.i18n;
        const translatedText = selectedTranslations[translationKey];

        if (translatedText) {
            element.textContent = translatedText;
        }
    });

    document.documentElement.lang = language;

    languageButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.language === language
        );
    });

    localStorage.setItem("leko-language", language);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.language);
    });
});

const savedLanguage = localStorage.getItem("leko-language") || "de";
changeLanguage(savedLanguage);
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const languageNav = document.querySelector(".language-nav");

if (menuToggle && mainNav && languageNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");

        languageNav.classList.toggle("is-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕ Schließen" : "☰ Menü";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("is-open");
            languageNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰ Menü";
        });
    });
}
