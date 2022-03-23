import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

const pdfMaker = (userData, vaccinesList) => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs

  function dataConverter(data) {
    return data.split("-").reverse().join("/")
  }

  const vaccines = vaccinesList.map((vaccine) => {
    return [
      { text: vaccine.name, fontSize: 9, margin: [20, 3, 20, 3] },
      { text: vaccine.manufacturer, fontSize: 9, margin: [20, 3, 20, 3] },
      {
        text: dataConverter(vaccine.applicationDate),
        fontSize: 9,
        margin: [20, 3, 20, 3],
      },
      {
        text: dataConverter(vaccine.nextShot),
        fontSize: 9,
        margin: [20, 3, 20, 3],
      },
    ]
  })

  const title = [
    {
      text: `Nome: ${userData.name}  Nascimento: ${dataConverter(
        userData.dateOfBirth
      )}  Sexo: ${userData.gender}`,
      alignment: "center",
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ]

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
              margin: [20, 3, 20, 3],
            },
            {
              text: "Fabricante",
              style: "tableHeader",
              bold: true,
              fontSize: 10,
              margin: [20, 3, 20, 3],
            },
            {
              text: "Data da aplicação",
              style: "tableHeader",
              bold: true,
              fontSize: 10,
              margin: [20, 3, 20, 3],
            },
            {
              text: "Próxima dose",
              style: "tableHeader",
              bold: true,
              fontSize: 10,
              margin: [20, 3, 20, 3],
            },
          ],
          ...vaccines,
        ],
      },
      layout: "headerLineOnly",
      // layout: "lightHorizontalLine",
    },
  ]

  const footer = (currentPage, pageCount) => {
    return [
      {
        text: `${currentPage} / ${pageCount}`,
        alignment: "right",
        fontSize: 9,
        margin: [0, 10, 20, 0],
      },
    ]
  }

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [30, 50, 30, 40],

    header: [title],
    content: [main],
    footer: footer,
  }

  pdfMake.createPdf(docDefinitions).download()
}

export default pdfMaker
