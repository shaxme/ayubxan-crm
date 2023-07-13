const XLSX = require("xlsx");
const date = new Date();
function createDox(
    MM9,
    MM9Total,
    MM12,
    MM12Total,
    MM25,
    MM125Total,
    MM29,
    MM29Total,
    MM33,
    MM33Total,
    Total
) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([
     ["НАКЛАДНОЙ ЛИСТ", "цена", "Кол-во", "Сумма"],
        MM9 !== 0 && ["Теплоизоляционные трубки 25 мм", "0.17 $", MM9, MM9Total + " $"],
        MM12 !== 0 && ["Теплоизоляционные трубки 32 мм", "0.21 $", MM12, MM12Total + " $"],
        MM25 !== 0 && ["Теплоизоляционные трубки 40 мм", "0.25 $", MM25, MM125Total + " $"],
        MM29 !== 0 && ["Теплоизоляционные трубки 50 мм", "0.29 $", MM29, MM29Total + " $"],
        MM33 !== 0 && ["теплоизоляционные трубки 63 мм", "0.33 $", MM33, MM33Total + " $"],
        ["ИТОГ:", "", "", Total + " $"],
        ['', '', '', String(date.getDay()).padStart(2, 0) + "." + String(date.getMonth()).padStart(2, 0) + "." + String(date.getFullYear()).padStart(2, 0)],
    ]);
    const columnWidths = [{ wch: 35 }];
    worksheet["!cols"] = columnWidths;

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "output.xlsx");
}
module.exports = createDox;
