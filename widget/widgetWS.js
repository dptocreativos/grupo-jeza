        (function() {

        // ELEMENTOS PRINCIPALES
        const root = document.getElementById("waWidget");
        const popup = root.querySelector("#popup");
        const close = root.querySelector("#close");
        const open = root.querySelector("#open");
        const form = root.querySelector("#form");

        // ELEMENTOS DEL SELECTOR
        const countryBox = root.querySelector("#countryBox");
        const countryTrigger = root.querySelector("#countryTrigger");
        const countryList = root.querySelector("#countryList");
        const countryFlag = root.querySelector("#countryFlag");
        const selectedCode = root.querySelector("#selectedCode");
        const countrySearch = root.querySelector("#countrySearch");
        const countryOptions = root.querySelector("#countryOptions");

        // PAÍSES DISPONIBLES

        const countries = [{
        name: "Afganistán",
        code: "+93",
        flag: "af"
        },
        {
        name: "Albania",
        code: "+355",
        flag: "al"
        },
        {
        name: "Alemania",
        code: "+49",
        flag: "de"
        },
        {
        name: "Andorra",
        code: "+376",
        flag: "ad"
        },
        {
        name: "Angola",
        code: "+244",
        flag: "ao"
        },
        {
        name: "Antigua y Barbuda",
        code: "+1-268",
        flag: "ag"
        },
        {
        name: "Arabia Saudita",
        code: "+966",
        flag: "sa"
        },
        {
        name: "Argelia",
        code: "+213",
        flag: "dz"
        },
        {
        name: "Argentina",
        code: "+54",
        flag: "ar"
        },
        {
        name: "Armenia",
        code: "+374",
        flag: "am"
        },
        {
        name: "Australia",
        code: "+61",
        flag: "au"
        },
        {
        name: "Austria",
        code: "+43",
        flag: "at"
        },
        {
        name: "Azerbaiyán",
        code: "+994",
        flag: "az"
        },
        {
        name: "Bahamas",
        code: "+1-242",
        flag: "bs"
        },
        {
        name: "Bangladés",
        code: "+880",
        flag: "bd"
        },
        {
        name: "Barbados",
        code: "+1-246",
        flag: "bb"
        },
        {
        name: "Baréin",
        code: "+973",
        flag: "bh"
        },
        {
        name: "Bélgica",
        code: "+32",
        flag: "be"
        },
        {
        name: "Belice",
        code: "+501",
        flag: "bz"
        },
        {
        name: "Benín",
        code: "+229",
        flag: "bj"
        },
        {
        name: "Bielorrusia",
        code: "+375",
        flag: "by"
        },
        {
        name: "Birmania (Myanmar)",
        code: "+95",
        flag: "mm"
        },
        {
        name: "Bolivia",
        code: "+591",
        flag: "bo"
        },
        {
        name: "Bosnia y Herzegovina",
        code: "+387",
        flag: "ba"
        },
        {
        name: "Botsuana",
        code: "+267",
        flag: "bw"
        },
        {
        name: "Brasil",
        code: "+55",
        flag: "br"
        },
        {
        name: "Brunéi",
        code: "+673",
        flag: "bn"
        },
        {
        name: "Bulgaria",
        code: "+359",
        flag: "bg"
        },
        {
        name: "Burkina Faso",
        code: "+226",
        flag: "bf"
        },
        {
        name: "Burundi",
        code: "+257",
        flag: "bi"
        },
        {
        name: "Bután",
        code: "+975",
        flag: "bt"
        },
        {
        name: "Cabo Verde",
        code: "+238",
        flag: "cv"
        },
        {
        name: "Camboya",
        code: "+855",
        flag: "kh"
        },
        {
        name: "Camerún",
        code: "+237",
        flag: "cm"
        },
        {
        name: "Canadá",
        code: "+1",
        flag: "ca"
        },
        {
        name: "Catar",
        code: "+974",
        flag: "qa"
        },
        {
        name: "Chad",
        code: "+235",
        flag: "td"
        },
        {
        name: "Chile",
        code: "+56",
        flag: "cl"
        },
        {
        name: "China",
        code: "+86",
        flag: "cn"
        },
        {
        name: "Chipre",
        code: "+357",
        flag: "cy"
        },
        {
        name: "Ciudad del Vaticano",
        code: "+39-06",
        flag: "va"
        },
        {
        name: "Colombia",
        code: "+57",
        flag: "co"
        },
        {
        name: "Comoras",
        code: "+269",
        flag: "km"
        },
        {
        name: "Corea del Norte",
        code: "+850",
        flag: "kp"
        },
        {
        name: "Corea del Sur",
        code: "+82",
        flag: "kr"
        },
        {
        name: "Costa de Marfil",
        code: "+225",
        flag: "ci"
        },
        {
        name: "Costa Rica",
        code: "+506",
        flag: "cr"
        },
        {
        name: "Croacia",
        code: "+385",
        flag: "hr"
        },
        {
        name: "Cuba",
        code: "+53",
        flag: "cu"
        },
        {
        name: "Dinamarca",
        code: "+45",
        flag: "dk"
        },
        {
        name: "Dominica",
        code: "+1-767",
        flag: "dm"
        },
        {
        name: "Ecuador",
        code: "+593",
        flag: "ec"
        },
        {
        name: "Egipto",
        code: "+20",
        flag: "eg"
        },
        {
        name: "El Salvador",
        code: "+503",
        flag: "sv"
        },
        {
        name: "Emiratos Árabes Unidos",
        code: "+971",
        flag: "ae"
        },
        {
        name: "Eritrea",
        code: "+291",
        flag: "er"
        },
        {
        name: "Eslovaquia",
        code: "+421",
        flag: "sk"
        },
        {
        name: "Eslovenia",
        code: "+386",
        flag: "si"
        },
        {
        name: "España",
        code: "+34",
        flag: "es"
        },
        {
        name: "Estados Unidos",
        code: "+1",
        flag: "us"
        },
        {
        name: "Estonia",
        code: "+372",
        flag: "ee"
        },
        {
        name: "Esuatini",
        code: "+268",
        flag: "sz"
        },
        {
        name: "Etiopía",
        code: "+251",
        flag: "et"
        },
        {
        name: "Filipinas",
        code: "+63",
        flag: "ph"
        },
        {
        name: "Finlandia",
        code: "+358",
        flag: "fi"
        },
        {
        name: "Fiyi",
        code: "+679",
        flag: "fj"
        },
        {
        name: "Francia",
        code: "+33",
        flag: "fr"
        },
        {
        name: "Gabón",
        code: "+241",
        flag: "ga"
        },
        {
        name: "Gambia",
        code: "+220",
        flag: "gm"
        },
        {
        name: "Georgia",
        code: "+995",
        flag: "ge"
        },
        {
        name: "Ghana",
        code: "+233",
        flag: "gh"
        },
        {
        name: "Granada",
        code: "+1-473",
        flag: "gd"
        },
        {
        name: "Grecia",
        code: "+30",
        flag: "gr"
        },
        {
        name: "Guatemala",
        code: "+502",
        flag: "gt"
        },
        {
        name: "Guinea",
        code: "+224",
        flag: "gn"
        },
        {
        name: "Guinea-Bisáu",
        code: "+245",
        flag: "gw"
        },
        {
        name: "Guinea Ecuatorial",
        code: "+240",
        flag: "gq"
        },
        {
        name: "Guyana",
        code: "+592",
        flag: "gy"
        },
        {
        name: "Haití",
        code: "+509",
        flag: "ht"
        },
        {
        name: "Honduras",
        code: "+504",
        flag: "hn"
        },
        {
        name: "Hungría",
        code: "+36",
        flag: "hu"
        },
        {
        name: "India",
        code: "+91",
        flag: "in"
        },
        {
        name: "Indonesia",
        code: "+62",
        flag: "id"
        },
        {
        name: "Irak",
        code: "+964",
        flag: "iq"
        },
        {
        name: "Irán",
        code: "+98",
        flag: "ir"
        },
        {
        name: "Irlanda",
        code: "+353",
        flag: "ie"
        },
        {
        name: "Islandia",
        code: "+354",
        flag: "is"
        },
        {
        name: "Islas Marshall",
        code: "+692",
        flag: "mh"
        },
        {
        name: "Islas Salomón",
        code: "+677",
        flag: "sb"
        },
        {
        name: "Israel",
        code: "+972",
        flag: "il"
        },
        {
        name: "Italia",
        code: "+39",
        flag: "it"
        },
        {
        name: "Jamaica",
        code: "+1-876",
        flag: "jm"
        },
        {
        name: "Japón",
        code: "+81",
        flag: "jp"
        },
        {
        name: "Jordania",
        code: "+962",
        flag: "jo"
        },
        {
        name: "Kazajistán",
        code: "+7",
        flag: "kz"
        },
        {
        name: "Kenia",
        code: "+254",
        flag: "ke"
        },
        {
        name: "Kirguistán",
        code: "+996",
        flag: "kg"
        },
        {
        name: "Kiribati",
        code: "+686",
        flag: "ki"
        },
        {
        name: "Kuwait",
        code: "+965",
        flag: "kw"
        },
        {
        name: "Laos",
        code: "+856",
        flag: "la"
        },
        {
        name: "Lesoto",
        code: "+266",
        flag: "ls"
        },
        {
        name: "Letonia",
        code: "+371",
        flag: "lv"
        },
        {
        name: "Líbano",
        code: "+961",
        flag: "lb"
        },
        {
        name: "Liberia",
        code: "+231",
        flag: "lr"
        },
        {
        name: "Libia",
        code: "+218",
        flag: "ly"
        },
        {
        name: "Liechtenstein",
        code: "+423",
        flag: "li"
        },
        {
        name: "Lituania",
        code: "+370",
        flag: "lt"
        },
        {
        name: "Luxemburgo",
        code: "+352",
        flag: "lu"
        },
        {
        name: "Macedonia del Norte",
        code: "+389",
        flag: "mk"
        },
        {
        name: "Madagascar",
        code: "+261",
        flag: "mg"
        },
        {
        name: "Malasia",
        code: "+60",
        flag: "my"
        },
        {
        name: "Malaui",
        code: "+265",
        flag: "mw"
        },
        {
        name: "Maldivas",
        code: "+960",
        flag: "mv"
        },
        {
        name: "Malí",
        code: "+223",
        flag: "ml"
        },
        {
        name: "Malta",
        code: "+356",
        flag: "mt"
        },
        {
        name: "Marruecos",
        code: "+212",
        flag: "ma"
        },
        {
        name: "Mauricio",
        code: "+230",
        flag: "mu"
        },
        {
        name: "Mauritania",
        code: "+222",
        flag: "mr"
        },
        {
        name: "México",
        code: "+52",
        flag: "mx"
        },
        {
        name: "Micronesia",
        code: "+691",
        flag: "fm"
        },
        {
        name: "Moldavia",
        code: "+373",
        flag: "md"
        },
        {
        name: "Mónaco",
        code: "+377",
        flag: "mc"
        },
        {
        name: "Mongolia",
        code: "+976",
        flag: "mn"
        },
        {
        name: "Montenegro",
        code: "+382",
        flag: "me"
        },
        {
        name: "Mozambique",
        code: "+258",
        flag: "mz"
        },
        {
        name: "Namibia",
        code: "+264",
        flag: "na"
        },
        {
        name: "Nauru",
        code: "+674",
        flag: "nr"
        },
        {
        name: "Nepal",
        code: "+977",
        flag: "np"
        },
        {
        name: "Nicaragua",
        code: "+505",
        flag: "ni"
        },
        {
        name: "Níger",
        code: "+227",
        flag: "ne"
        },
        {
        name: "Nigeria",
        code: "+234",
        flag: "ng"
        },
        {
        name: "Noruega",
        code: "+47",
        flag: "no"
        },
        {
        name: "Nueva Zelanda",
        code: "+64",
        flag: "nz"
        },
        {
        name: "Omán",
        code: "+968",
        flag: "om"
        },
        {
        name: "Países Bajos",
        code: "+31",
        flag: "nl"
        },
        {
        name: "Pakistán",
        code: "+92",
        flag: "pk"
        },
        {
        name: "Palaos",
        code: "+680",
        flag: "pw"
        },
        {
        name: "Palestina",
        code: "+970",
        flag: "ps"
        },
        {
        name: "Panamá",
        code: "+507",
        flag: "pa"
        },
        {
        name: "Papúa Nueva Guinea",
        code: "+675",
        flag: "pg"
        },
        {
        name: "Paraguay",
        code: "+595",
        flag: "py"
        },
        {
        name: "Perú",
        code: "+51",
        flag: "pe"
        },
        {
        name: "Polonia",
        code: "+48",
        flag: "pl"
        },
        {
        name: "Portugal",
        code: "+351",
        flag: "pt"
        },
        {
        name: "Reino Unido",
        code: "+44",
        flag: "gb"
        },
        {
        name: "República Centroafricana",
        code: "+236",
        flag: "cf"
        },
        {
        name: "República Checa",
        code: "+420",
        flag: "cz"
        },
        {
        name: "República del Congo",
        code: "+242",
        flag: "cg"
        },
        {
        name: "República Democrática del Congo",
        code: "+243",
        flag: "cd"
        },
        {
        name: "República Dominicana",
        code: "+1-809",
        flag: "do"
        },
        {
        name: "Ruanda",
        code: "+250",
        flag: "rw"
        },
        {
        name: "Rumanía",
        code: "+40",
        flag: "ro"
        },
        {
        name: "Rusia",
        code: "+7",
        flag: "ru"
        },
        {
        name: "Samoa",
        code: "+685",
        flag: "ws"
        },
        {
        name: "San Cristóbal y Nieves",
        code: "+1-869",
        flag: "kn"
        },
        {
        name: "San Marino",
        code: "+378",
        flag: "sm"
        },
        {
        name: "San Vicente y las Granadinas",
        code: "+1-784",
        flag: "vc"
        },
        {
        name: "Santa Lucía",
        code: "+1-758",
        flag: "lc"
        },
        {
        name: "Santo Tomé y Príncipe",
        code: "+239",
        flag: "st"
        },
        {
        name: "Senegal",
        code: "+221",
        flag: "sn"
        },
        {
        name: "Serbia",
        code: "+381",
        flag: "rs"
        },
        {
        name: "Seychelles",
        code: "+248",
        flag: "sc"
        },
        {
        name: "Sierra Leona",
        code: "+232",
        flag: "sl"
        },
        {
        name: "Singapur",
        code: "+65",
        flag: "sg"
        },
        {
        name: "Siria",
        code: "+963",
        flag: "sy"
        },
        {
        name: "Somalia",
        code: "+252",
        flag: "so"
        },
        {
        name: "Sri Lanka",
        code: "+94",
        flag: "lk"
        },
        {
        name: "Sudáfrica",
        code: "+27",
        flag: "za"
        },
        {
        name: "Sudán",
        code: "+249",
        flag: "sd"
        },
        {
        name: "Sudán del Sur",
        code: "+211",
        flag: "ss"
        },
        {
        name: "Suecia",
        code: "+46",
        flag: "se"
        },
        {
        name: "Suiza",
        code: "+41",
        flag: "ch"
        },
        {
        name: "Surinam",
        code: "+597",
        flag: "sr"
        },
        {
        name: "Tailandia",
        code: "+66",
        flag: "th"
        },
        {
        name: "Tanzania",
        code: "+255",
        flag: "tz"
        },
        {
        name: "Tayikistán",
        code: "+992",
        flag: "tj"
        },
        {
        name: "Timor Oriental",
        code: "+670",
        flag: "tl"
        },
        {
        name: "Togo",
        code: "+228",
        flag: "tg"
        },
        {
        name: "Tonga",
        code: "+676",
        flag: "to"
        },
        {
        name: "Trinidad y Tobago",
        code: "+1-868",
        flag: "tt"
        },
        {
        name: "Túnez",
        code: "+216",
        flag: "tn"
        },
        {
        name: "Turkmenistán",
        code: "+993",
        flag: "tm"
        },
        {
        name: "Turquía",
        code: "+90",
        flag: "tr"
        },
        {
        name: "Tuvalu",
        code: "+688",
        flag: "tv"
        },
        {
        name: "Ucrania",
        code: "+380",
        flag: "ua"
        },
        {
        name: "Uganda",
        code: "+256",
        flag: "ug"
        },
        {
        name: "Uruguay",
        code: "+598",
        flag: "uy"
        },
        {
        name: "Uzbekistán",
        code: "+998",
        flag: "uz"
        },
        {
        name: "Vanuatu",
        code: "+678",
        flag: "vu"
        },
        {
        name: "Venezuela",
        code: "+58",
        flag: "ve"
        },
        {
        name: "Vietnam",
        code: "+84",
        flag: "vn"
        },
        {
        name: "Yemen",
        code: "+967",
        flag: "ye"
        },
        {
        name: "Yibuti",
        code: "+253",
        flag: "dj"
        },
        {
        name: "Zambia",
        code: "+260",
        flag: "zm"
        },
        {
        name: "Zimbabue",
        code: "+263",
        flag: "zw"
        }
        ];


        // PAÍS SELECCIONADO INICIALMENTE
        let selectedCountry = countries.find(
        country => country.flag === "ve"
        ) || countries[0];

        // DIBUJAR OPCIONES
        function renderCountries(filter = "") {

        countryOptions.innerHTML = "";

        const search = filter.toLowerCase().trim();

        const filtered = countries.filter(function(country) {
        return (
        country.name.toLowerCase().includes(search) ||
        country.code.includes(search)
        );
        });

        if (filtered.length === 0) {
        countryOptions.innerHTML =
        '<div class="no-results">No se encontraron países</div>';
        return;
        }

        filtered.forEach(function(country) {

        const option = document.createElement("button");
        option.type = "button";
        option.className = "country-option";

        if (country.code === selectedCountry.code &&
        country.flag === selectedCountry.flag) {
        option.classList.add("selected");
        }

        const flag = document.createElement("img");
        flag.src = "https://flagcdn.com/w40/" + country.flag + ".png";
        flag.alt = country.name;

        const name = document.createElement("span");
        name.className = "country-name";
        name.textContent = country.name;

        const code = document.createElement("span");
        code.className = "country-code";
        code.textContent = country.code;

        option.appendChild(flag);
        option.appendChild(name);
        option.appendChild(code);

        option.addEventListener("click", function() {
        selectCountry(country);
        });

        countryOptions.appendChild(option);
        });
        }

        // SELECCIONAR PAÍS
        function selectCountry(country) {

        selectedCountry = country;

        countryFlag.src =
        "https://flagcdn.com/w40/" + country.flag + ".png";

        countryFlag.alt = country.name;
        selectedCode.textContent = country.code;

        closeCountryList();

        renderCountries();
        }

        // ABRIR SELECTOR
        function openCountryList() {

        countryBox.classList.add("active");
        countryTrigger.setAttribute("aria-expanded", "true");

        countrySearch.value = "";
        renderCountries();

        setTimeout(function() {
        countrySearch.focus();
        }, 50);
        }

        // CERRAR SELECTOR
        function closeCountryList() {

        countryBox.classList.remove("active");
        countryTrigger.setAttribute("aria-expanded", "false");
        }

        // ALTERNAR SELECTOR
        countryTrigger.addEventListener("click", function(e) {

        e.stopPropagation();

        if (countryBox.classList.contains("active")) {
        closeCountryList();
        } else {
        openCountryList();
        }
        });

        // BUSCAR PAÍSES
        countrySearch.addEventListener("input", function() {
        renderCountries(countrySearch.value);
        });

        // EVITAR CIERRE AL INTERACTUAR CON LA LISTA
        countryList.addEventListener("click", function(e) {
        e.stopPropagation();
        });

        // CERRAR AL HACER CLIC FUERA
        document.addEventListener("click", function(e) {
        if (!countryBox.contains(e.target)) {
        closeCountryList();
        }
        });

        // ABRIR Y CERRAR CHAT
        open.addEventListener("click", function() {
        popup.classList.toggle("open");
        closeCountryList();
        });

        // CERRAR CON LA X
        close.addEventListener("click", function() {
        popup.classList.remove("open");
        closeCountryList();
        });



        // ENVIAR A WHATSAPP Y GUARDAR EN GOOGLE SHEETS
        form.addEventListener("submit", function(e) {

        e.preventDefault();

        const nombre = root.querySelector("#nombre").value.trim();
        const telefono = root.querySelector("#telefono").value.trim();

        if (!nombre || !telefono) return;

        // DATOS PARA GOOGLE SHEETS
        const datos = {
        nombre: nombre,
        codigoPais: selectedCountry.code,
        whatsapp: telefono,
        pais: selectedCountry.name,
        pagina: window.location.href
        };

        // MENSAJE DE WHATSAPP
        const mensaje =
        "¡Hola Grupo Jeza®!\n\n" +
        "Soy " + nombre + ", estoy en su website y quiero más información sobre: ";

        const url =
        "https://api.whatsapp.com/send/?phone=584147915273" +
        "&text=" + encodeURIComponent(mensaje);

        // ABRIR WHATSAPP
        window.open(url, "_blank");

        // REGISTRAR CONTACTO EN GOOGLE SHEETS
        fetch("https://script.google.com/macros/s/AKfycbwQ2Fiu9alNs1ulHmW7SmGgMAyGST-xMI6Nf21zo3_FNwcss1GtSOeCuo19tL5uPU2N/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(datos)
        })
        .then(function() {
        console.log("Solicitud enviada.");
        })
        .catch(function(error) {
        console.error("Error enviando contacto:", error);
        });

        });


        // CARGAR LISTA INICIAL
        renderCountries();

        })();
