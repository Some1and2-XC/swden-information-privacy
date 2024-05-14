function add_tags() {
    var table_of_contents = document.getElementById("table-of-contents");

    if (table_of_contents.length === 0) {
        console.log("No element with id 'table-of-contents'");
        return 0;
    }

    var elements = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    console.log(elements);

    table_of_contents.innerHTML = "<h1>Table of Contents</h1>";
    table_of_contents.innerHTML += "<div style='display: flex; flex-direction: column;' id='table-of-contents-display'></div>";
    table_of_contents_display = document.getElementById("table-of-contents-display");

    for (let element = 0; element < elements.length; element++) {

        var content = elements[element].innerHTML;
        var left_margin = elements[element].localName[1];
        var id = content.replaceAll(" ", "-").toLowerCase();

        elements[element].setAttribute("id", id);

        table_of_contents_display.innerHTML += `
            <a
                style="margin-left: ${left_margin}rem;"
                href="#${id}"
            >
                ${content}
            </a>
        `;
    }
}

function add_acronyms() {
    var acronyms = {
        "IMR": "Infant Mortality Rate",
        "EU": "European Union",
        "GDPR": "General Data Protection Regulation",
        "IMY": "Swedish Authority for Privacy Protection",
        "Riksdag": "The Swedish Parliament",
    };

    var paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        for (k in acronyms) {
            var inner = paragraphs[i].innerHTML;
            paragraphs[i].innerHTML = inner.replaceAll(k, `
                <acronym title="${acronyms[k]}">${k}</acronym>
            `);
        }
    }
}

add_tags();
add_acronyms();
