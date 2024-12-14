document.getElementById("toggle-color-mode").addEventListener("click", function () {
    const body = document.body;
    const header = document.getElementById("header");
    const name = document.getElementById("name");
    const button = document.getElementById("toggle-color-mode");

    if (body.classList.contains("color-mode")) {
        body.classList.remove("color-mode");
        body.classList.add("black-white-mode");

        button.textContent = "Переключить на цветной";

        header.style.fontFamily = "'ALS Schlangesans', sans-serif";
        header.style.fontWeight = "bold";

        name.style.fontWeight = "normal";
    } else {
        body.classList.remove("black-white-mode");
        body.classList.add("color-mode");

        button.textContent = "Переключить на черно-белый";

        header.style.fontFamily = "'ALS Schlangesans Bold', sans-serif";
        header.style.fontWeight = "normal";

        name.style.fontWeight = "bold";
    }
});

function printTemplate() {
    const templateContent = document.getElementById("template").outerHTML;

    const isColorMode = document.body.classList.contains("color-mode");

    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(`
        <html>
            <head>
                <title>Печать Таблички</title>
                <style>
                    @font-face {
                        font-family: 'ALS Schlangesans Bold';
                        src: url('ALSSchlangesans-Bold.woff') format('woff');
                    }
                    @font-face {
                        font-family: 'ALS Schlangesans';
                        src: url('ALSSchlangesans.woff') format('woff');
                    }

                    body {
                        margin: 0;
                        padding: 0;
                        background-color: white;
                    }

                    #template {
                        width: 297mm;
                        margin: 0 auto;
                        border: 2px solid #000;
                        background-color: #fff;
                        font-family: 'ALS Schlangesans', sans-serif;
                    }

                    #header {
                        background-color: ${isColorMode ? "#38B7F0" : "white"};
                        color: ${isColorMode ? "white" : "black"};
                        font-family: ${isColorMode ? "'ALS Schlangesans Bold', sans-serif" : "'ALS Schlangesans', sans-serif"};
                        font-weight: ${isColorMode ? "normal" : "bold"};
                        font-size: 72px;
                        height: 53mm;
                        line-height: 1.2;
                        text-align: left;
                        padding-left: 10mm;
                        padding-right: 10mm;
                        word-wrap: break-word;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        max-width: calc(100% - 20mm);
                    }

                    #name {
                        font-size: 60px;
                        font-family: 'ALS Schlangesans', sans-serif;
                        font-weight: ${isColorMode ? "bold" : "normal"};
                        line-height: 1.0;
                        margin-top: 10mm;
                        text-align: left;
                        padding-left: 10mm;
                    }

                    #name span {
                        display: block;
                        margin-bottom: 0px;
                        line-height: 1.0;
                    }
                </style>
            </head>
            <body>
                ${templateContent}
            </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.print();
}
