
const asideButton = document.getElementById("display-aside")
const aside = document.getElementById("aside-id")
const container = document.getElementById("container")
const main = document.getElementById("main")

const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--xp', xp);
  document.documentElement.style.setProperty('--y', y);
  document.documentElement.style.setProperty('--yp', yp);
};

document.body.addEventListener('pointermove', syncPointer);

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado');
    const menuLinks = document.querySelectorAll('aside ul li a');
    const sections = document.querySelectorAll('main section');
    
    const showSection = (sectionId) => {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    };

    const activeLink = document.querySelector('aside ul li a.active');
    if (activeLink) {
        showSection(activeLink.id);
    }
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            menuLinks.forEach(l => l.classList.remove('active'));
            
            e.currentTarget.classList.add('active');

            const sectionId = e.currentTarget.id;
            showSection(sectionId);
        });
    });

    const languageButton = document.getElementById('lenguage-button');
    console.log('Botón encontrado:', languageButton);

    if (languageButton) {
        languageButton.addEventListener('click', () => {
            console.log('Botón clickeado');
            currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
            updateLanguage();
        });
    }

    updateLanguage();
});

const translations = {
    en: {
        title: "Pokeemerald Expansion - Decompilation Tutorials",
        addNewOverworlds: "Add New Overworlds EZ",
        customizeBattleUI: "Customize Battle UI",

        requirements: "Requirements:",
        steps: "Steps:",
        compatibleWith: "Compatible with",
        copyright: "Copyright © 2025 - Nexxo",



        selectFolder: "Select your Pokeemerald Expansion folder using Axolote Ow Adder.",
        configureProject: "When this window appears, you need to configure your project. Normally, if your project is Pokeemerald-Expansion, you can leave the settings as they are and simply click 'Complete'.",
        placeOwSprite: "Once your project is loaded, go to the Pokeemerald-Expansion folder, follow the path below, and place your Overworld sprite there:",
        owSpriteRoute: "/graphics/object_events/pics/people",
        overworldConfigStart: "Now go back to Axolote Ow Adder and start configuring your Overworld like this:",
        overworldConfigMid: "The configuration process is quite intuitive, but there's one VERY IMPORTANT thing to keep in mind: the name of your Overworld must match the name of your sprite exactly. For example, if your sprite is named NPC_GARY, then the Overworld name must also be NPC_GARY. If not, you will encounter compilation errors.",
        overworldConfigEnd: "Finally, configure the width and height of your Overworld, as well as the number of frames it has. I also encourage you to explore the extra options available, as they may offer useful features for your Overworlds.",
        overworldInsert: "Press Insert Overworld"

    },
    es: {
        title: "Pokeemerald Expansion - Tutoriales de Descompilación",
        addNewOverworlds: "Añadir Mas Overworlds EZ",
        customizeBattleUI: "Personalizar Battle UI",


        requirements: "Requisitos:",
        steps: "Pasos:",
        compatibleWith: "Compatible con",
        copyright: "Derechos de autor © 2025 - Nexxo",

        // Tutorial para agregar Overworlds
        selectFolder: "Selecciona la carpeta de tu Pokeemerald Expansion usando Axolote Ow Adder.",
        configureProject: "Cuando aparezca esta ventana, debemos configurar nuestro proyecto. Normalmente, si el proyecto es Pokeemerald-Expansion, pueden dejar la configuración tal cual y hacer clic en 'Complete'.",
        placeOwSprite: "Una vez cargado nuestro proyecto, debemos ir a la carpeta de Pokeemerald-Expansion, seguir la siguiente ruta y colocar el sprite de nuestro Overworld:",
        owSpriteRoute: "/graphics/object_events/pics/people",
        overworldConfigStart: "Ahora regresamos a Axolote Ow Adder y comenzamos a configurar nuestro Overworld de la siguiente manera:",
        overworldConfigMid: "La configuración es bastante intuitiva en la herramienta, pero debemos tener en cuenta algo MUY IMPORTANTE: el nombre del Overworld debe ser el mismo que el nombre del sprite. Por lo tanto, si nuestro sprite se llama NPC_GARY, ese mismo nombre debe colocarse aquí. En caso contrario, tendremos errores de compilación.",
        overworldConfigEnd: "Finalmente, debemos configurar el ancho y alto de nuestro Overworld, así como la cantidad de cuadros (frames) que tiene. Los invito a no solo modificar estas opciones, sino también revisar las opciones extra, ya que pueden encontrar cosas útiles para sus Overworlds.",
        overworldInsert: "Presiona Insert Overworld"
    }
};

let currentLanguage = 'en';

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[currentLanguage][key]) {
            element.title = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[currentLanguage][key]) {
            element.alt = translations[currentLanguage][key];
        }
    });

    const compatibleText = translations[currentLanguage].compatibleWith + ': ';
    const compatibleH2 = document.querySelector('#add-new-overworlds .title h2');
    if (compatibleH2) {
        compatibleH2.innerHTML = compatibleText + '<span style="color: #4CAF50;">1.9.0</span>';
    }

    document.querySelector('footer p').textContent = translations[currentLanguage].copyright;
}

let asideState = 0;

asideButton.addEventListener("click", () => {

    if (asideState === 0){
        aside.style.display = "flex";
        main.style.display = "none";

        container.style.gridTemplateAreas = `
        "header header header"
        "aside aside aside"
        "button footer footer"
    `
    asideState = 1
    asideButton.style.color = "#fff"

    }
    else {
        aside.style.display = "none";
        main.style.display = "flex";

        container.style.gridTemplateAreas = `
        "header header header"
        "main main main"
        "button footer footer"
    `
    asideState = 0
    asideButton.style.color = "#5e5e5e"
    }



})