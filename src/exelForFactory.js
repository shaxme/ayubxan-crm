const XLSX = require("xlsx");
const date = new Date();

export default function createDoxForFactory(
  MM6,
  MM6Total,
  MM9,
  MM9Total,
  MM12,
  MM12Total,
  MM16,
  MM16Total,
  MM20,
  MM20Total,
  MM22,
  MM22Total,
  MM25,
  MM25Total,
  MM28,
  MM28Total,
  MM32,
  MM32Total,
  MM40,
  MM40Total,
  MM50,
  MM50Total,
  MM63,
  MM63Total,
  MM75,
  MM75Total,
  MM90,
  MM90Total,
  Total
) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet([
    ["НАКЛАДНОЙ ЛИСТ", "цена", "Кол-во", "Сумма"],
    ...(MM6 !== 0 ? [["Теплоизоляционные трубки 6 мм", "0.17 $", MM6, MM6Total + " $"]] : []),
    ...(MM9 !== 0 ? [["Теплоизоляционные трубки 25 мм", "0.21 $", MM9, MM9Total + " $"]] : []),
    ...(MM12 !== 0 ? [["Теплоизоляционные трубки 12 мм", "0.25 $", MM12, MM12Total + " $"]] : []),
    ...(MM16 !== 0 ? [["Теплоизоляционные трубки 16 мм", "0.29 $", MM16, MM16Total + " $"]] : []),
    ...(MM20 !== 0 ? [["Теплоизоляционные трубки 20 мм", "0.33 $", MM20, MM20Total + " $"]] : []),
    ...(MM22 !== 0 ? [["Теплоизоляционные трубки 22 мм", "0.34 $", MM22, MM22Total + " $"]] : []),
    ...(MM25 !== 0 ? [["теплоизоляционные трубки 25 мм", "0.40 $", MM25, MM25Total + " $"]] : []),
    ...(MM28 !== 0 ? [["теплоизоляционные трубки 28 мм", "0.41 $", MM28, MM28Total + " $"]] : []),
    ...(MM32 !== 0 ? [["теплоизоляционные трубки 32 мм", "0.43 $", MM32, MM32Total + " $"]] : []),
    ...(MM40 !== 0 ? [["теплоизоляционные трубки 40 мм", "0.57 $", MM40, MM40Total + " $"]] : []),
    ...(MM50 !== 0 ? [["теплоизоляционные трубки 50 мм", "0.83 $", MM50, MM50Total + " $"]] : []),
    ...(MM63 !== 0 ? [["теплоизоляционные трубки 63 мм", "1.12 $", MM63, MM63Total + " $"]] : []),
    ...(MM75 !== 0 ? [["теплоизоляционные трубки 75 мм", "1.45 $", MM75, MM75Total + " $"]] : []),
    ...(MM90 !== 0 ? [["теплоизоляционные трубки 90 мм", "1.75 $", MM90, MM90Total + " $"]] : []),
    ["ИТОГ:", "", "", Total + " $"],
    ["", "", "", String(date.getDate()).padStart(2, 0) + "." + String(date.getMonth()).padStart(2, 0) + "." + String(date.getFullYear()).padStart(2, 0)],
  ]);

  const columnWidths = [{ wch: 35 }];
  worksheet["!cols"] = columnWidths;

  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, "дляКлиента.xlsx");
}

module.exports = createDoxForFactory;
