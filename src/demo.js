import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./demo.css";
import createDoc from "./exel";

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
    MM9: 0,
    MM12: 0,
    MM16: 0,
    MM20: 0,
    MM20: 0,
    MM22: 0,
  });

  const rows = [
    createRow("теплоизоляционные трубки 9мм", 0.17, first.MM9),
    createRow("теплоизоляционные трубки 12мм", 0.21, first.MM12),
    createRow("теплоизоляционные трубки 16мм", 0.25, first.MM16),
    createRow("теплоизоляционные трубки 20мм", 0.29, first.MM20),
    createRow("теплоизоляционные трубки 22мм", 0.33, first.MM22),
  ];
  const invoiceSubtotal = subtotal(rows);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <h2 style={{ marginLeft: "15px" }}>Zakazniy Stol</h2>
            </TableRow>
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
                <TableCell align="right">{row.qty} $</TableCell>
                <div className="input">
                  <input
                    onChange={(e) => {
                      setfirst((value) => ({
                        ...value,
                        ["MM" + Number.parseFloat(row.desc.split(" ")[2])]:
                          e.target.value
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
      <button
        type="button"
        onClick={() => {
          console.log(+ccyFormat(invoiceSubtotal));
          createDoc(
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
            +ccyFormat(invoiceSubtotal)
            );
        }}
      >
        Done
      </button>
    </>
  );
}
