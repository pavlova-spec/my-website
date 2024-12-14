// Функция переключения форматов
const formatSelector = document.getElementById("format-selector");
const templates = document.querySelectorAll(".template");

formatSelector.addEventListener("change", function () {
    const selectedFormat = formatSelector.value;

    // Скрываем все форматы
    templates.forEach((template) => {
        template.style.display = "none";
    });

    // Показываем выбранный формат
    const activeTemplate = document.getElementById(selectedFormat);
    if (activeTemplate) {
        activeTemplate.style.display = "block";
    }
});

// Функция печати
function printTemplate() {
    const selectedFormat = formatSelector.value;
    const activeTemplate = document.getElementById(selectedFormat);

    if (!activeTemplate) {
        alert("Выберите формат таблички перед печатью.");
        return;
    }

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
                        font-family: 'ALS Schlangesans', sans-serif;
                    }

                    .template {
                        width: 297mm;
                        height: 210mm;
                        margin: 0 auto;
                        border: 2px solid #000;
                        position: relative;
                        padding: 0;
                        background-color: #fff;
                    }

                    #header {
                        background-color: #38B7F0;
                        color: white;
                        font-family: 'ALS Schlangesans Bold', sans-serif;
                        font-size: 72px;
                        height: 53mm;
                        line-height: 1.2;
                        text-align: left;
                        padding-left: 10mm;
                        padding-right: 10mm;
                        display: flex;
                        align-items: center;
                    }

                    #name, #fio-container {
                        font-size: 60px;
                        line-height: 1.2;
                        text-align: left;
                        padding-left: 10mm;
                        width: 265mm;
                        height: 60mm;
                    }

                    #fio {
                        display: block;
                    }

                    #fio-lastname {
                        display: block;
                    }

                    #cabinet {
                        position: absolute;
                        top: 19mm;
                        left: 19mm;
                        text-align: left;
                    }

                    #room-number {
                        font-size: 40px;
                        font-weight: bold;
                        line-height: 1;
                    }

                    #room-name {
                        font-size: 21px;
                        margin-top: 15mm;
                        display: block;
                    }
                </style>
            </head>
            <body>
                ${activeTemplate.outerHTML}
            </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.print();
}
