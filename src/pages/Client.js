import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Demo.css";
import createDocForClient from "./exelForClient";
import { Button } from "@mui/material";

function ccyFormat(num) {
  return Number(num).toFixed(2);
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.reduce((sum, i) => sum + i.price, 0);
}

export default function SpanningTable() {
  const [first, setfirst] = React.useState({
    MM6: 0,
    MM9: 0,
    MM12: 0,
    MM16: 0,
    MM20: 0,
    MM22: 0,
    MM25: 0,
    MM28: 0,
    MM32: 0,
    MM40: 0,
    MM50: 0,
    MM63: 0,
    MM75: 0,
    MM90: 0,
  });

  const rows = [
    createRow("теплоизоляционные трубки 6мм", 0.19, first.MM6),
    createRow("теплоизоляционные трубки 9мм", 0.23, first.MM9),
    createRow("теплоизоляционные трубки 12мм", 0.27, first.MM12),
    createRow("теплоизоляционные трубки 16мм", 0.32, first.MM16),
    createRow("теплоизоляционные трубки 20мм", 0.36, first.MM20),
    createRow("теплоизоляционные трубки 22мм", 0.37, first.MM22),
    createRow("теплоизоляционные трубки 25мм", 0.44, first.MM25),
    createRow("теплоизоляционные трубки 28мм", 0.45, first.MM28),
    createRow("теплоизоляционные трубки 32мм", 0.47, first.MM32),
    createRow("теплоизоляционные трубки 40мм", 0.62, first.MM40),
    createRow("теплоизоляционные трубки 50мм", 0.90, first.MM50),
    createRow("теплоизоляционные трубки 63мм", 1.22, first.MM63),
    createRow("теплоизоляционные трубки 75мм", 1.58, first.MM75),
    createRow("теплоизоляционные трубки 90мм", 1.90, first.MM90),
  ];
  const invoiceSubtotal = subtotal(rows);

  return (
    <>
      <header>
        <a href="/">
          <img className="logo" src="/img/isoflex.jpeg" alt="logo" />
        </a>
        <p className="text">Страница клиента</p>
      </header>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>Marteril UI</TableCell>
              <TableCell align="right">Narxi</TableCell>
              <TableCell align="right">Uzunligi</TableCell>
              <TableCell align="right">Jami narxi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{ccyFormat(row.qty)} $</TableCell>
                <div className="input">
                  <input
                    onChange={(e) => {
                      setfirst((value) => ({
                        ...value,
                        ["MM" + Number.parseFloat(row.desc.split(" ")[2])]:
                          e.target.value,
                      }));
                    }}
                    id="undifinded"
                    align="right"
                    className="inputnumber"
                    type="number"
                  />
                </div>
                <TableCell align="right">{ccyFormat(row.price)} $</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell align="right" colSpan={2}>
                Umumiy qiymati
              </TableCell>
              <TableCell align="right">
                {+ccyFormat(invoiceSubtotal)} $
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className="inputWrap">
        <Button className="btn"
          sx={{ width: "200px" }}
          type="button"
          variant="contained"
          onClick={() => {
            console.log(+ccyFormat(invoiceSubtotal));
            createDocForClient(
              +ccyFormat(rows[0].unit),
              +ccyFormat(rows[0].price),
              +ccyFormat(rows[1].unit),
              +ccyFormat(rows[1].price),
              +ccyFormat(rows[2].unit),
              +ccyFormat(rows[2].price),
              +ccyFormat(rows[3].unit),
              +ccyFormat(rows[3].price),
              +ccyFormat(rows[4].unit),
              +ccyFormat(rows[4].price),
              +ccyFormat(rows[5].unit),
              +ccyFormat(rows[5].price),
              +ccyFormat(rows[6].unit),
              +ccyFormat(rows[6].price),
              +ccyFormat(rows[7].unit),
              +ccyFormat(rows[7].price),
              +ccyFormat(rows[8].unit),
              +ccyFormat(rows[8].price),
              +ccyFormat(rows[9].unit),
              +ccyFormat(rows[9].price),
              +ccyFormat(rows[10].unit),
              +ccyFormat(rows[10].price),
              +ccyFormat(rows[11].unit),
              +ccyFormat(rows[11].price),
              +ccyFormat(rows[12].unit),
              +ccyFormat(rows[12].price),
              +ccyFormat(rows[13].unit),
              +ccyFormat(rows[13].price),
              +ccyFormat(invoiceSubtotal)
            );
          }}
        >
          Download
        </Button>
      </div>
    </>
  );
}
