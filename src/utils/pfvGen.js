import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const pdfMaker = (userData, vaccinesList) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const vaccines = vaccinesList.map((vaccine) => {
    return [
      { text: vaccine.name, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: vaccine.manufacturer, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: vaccine.applicationDate, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: vaccine.nextShot, fontSize: 9, margin: [0, 2, 0, 2] },
    ];
  });

  const title = [
    {
      text: `Nome: ${userData.name}  Nascimento: ${userData.dateOfBirth}  Sexo: ${userData.gender}`,
      alignment: "center",
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ];

  const main = [
    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*", "*"],
        body: [
          [
            {
              text: "Vacina",
              style: "tableHeader",
              bold: true,
              fontSize: 10,
            },
            {
              text: "Fabricante",
              style: "tableHeader",
              bold: true,
              fontSize: 10,
            },
            {
              text: "Data da aplicação",
              style: "tableHeader",
              bold: true,
              fontSize: 10,
            },
            {
              text: "Próxima dose",
              style: "tableHeader",
              bold: true,
              fontSize: 10,
            },
          ],
          ...vaccines,
        ],
      },
      layout: "headerLineOnly",
      // layout: "lightHorizontalLine",
    },
  ];

  const footer = (currentPage, pageCount) => {
    return [
      {
        text: `${currentPage} / ${pageCount}`,
        alignment: "right",
        fontSize: 9,
        margin: [0, 10, 20, 0],
      },
    ];
  };

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [title],
    content: [main],
    footer: footer,
  };

  pdfMake.createPdf(docDefinitions).download();
};

export default pdfMaker;
