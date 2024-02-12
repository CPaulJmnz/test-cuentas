import React, { useRef } from 'react';

import { useGlobalState } from '../context/GlobalState'
import {TransactionItem} from './TransactionItem'
import jsPDF from 'jspdf';

function TransactionList() {
    const {transactions, deleteTransaction} = useGlobalState()
    const printableContentRef = useRef(null);

    const handlePrint = () => {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>Historial de Transacciones</title>
            <style>
              body {
                font-family: Arial, sans-serif;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
              }
              th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
              }
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            <h1>Historial de Transacciones</h1>
            <table>
              <thead>
                <tr>
                  <th>Descripción</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                ${transactions.map(transaction => `
                  <tr>
                    <td>${transaction.description}</td>
                    <td>${transaction.amount}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
      printWindow.createImageBitmap();

    };

    const pdfDownload = () => {
      var document = new jsPDF();
      transactions.forEach(function (transaction, i) {
        // Dividir el texto de la descripción en líneas según el ancho de la página
        const descriptionLines = document.splitTextToSize(transaction.description, 180); // Ajusta el ancho según tu necesidad
    
        // Dibujar cada línea de la descripción
        descriptionLines.forEach((line, index) => {
          document.setFontSize(8);
          document.text(10, 5 + i * 15 + index * 5, line); // Ajusta el valor (index * 5) para el espacio vertical entre líneas
        });

        document.setFont('helvetica', 'bold');
        document.setTextColor(46, 68, 94);
    
        // Resto de las propiedades
        document.text(10, 6 + i * 15 + descriptionLines.length * 5, `$${transaction.amount}`);
        // Agregar más líneas según sea necesario

        document.setFont('helvetica', 'normal');
        document.setTextColor(0);
      });
    
      const fechaActual = new Date();
      const year = fechaActual.getFullYear();
      const month = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
      const day = fechaActual.getDate();
    
      // Formatear la fecha como una cadena
      const fechaFormateada = `${day}/${month}/${year}`;
      document.save('Historial ' + fechaFormateada);
    };
    

  return (
    <div>
      <h3 className='text-slate-300 text-xl font-bold w-full'>Historial</h3>
      <ul ref={printableContentRef}>
          {transactions.map(transaction =>(
            <TransactionItem transaction={transaction} key={transaction.id}/>
          ))}
      </ul>
      <div className='flex'>
        <div className='py-5'>
          <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full' onClick={handlePrint}>Imprimir</button>
        </div>
        <div className='p-5'>
          <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full' onClick={pdfDownload}>PDF</button>
        </div>
      </div>
    </div>
  )
}

export default TransactionList