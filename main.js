import { encode } from "upnqr";
import * as QRLogo from "qr-with-logo";

async function generateQRCode(data, filename) {
  await QRLogo.generateQRWithLogo(
    data,
    "logo.png",
    {
      errorCorrectionLevel: "H",
      rendererOpts: { quality: 0.3 },
    },
    "PNG",
    filename
  );
}

function generateUPN() {
  const result = encode({
    polog: false,
    dvig: false,
    ime_placnika: "Janez Novak",
    ulica_placnika: "Lepa cesta 10",
    kraj_placnika: "2000 Maribor",
    znesek: 13.37,
    nujno: true,
    koda_namena: "SCVE",
    namen_placila: "Ravn. z odpadki 04/2016 0040098579",
    rok_placila: new Date(),
    IBAN_prejemnika: "SI56051008010486080",
    referenca_prejemnika: "SI121033842574531",
    ime_prejemnika: "Snaga d.o.o.",
    ulica_prejemnika: "Povšetova ulica 6",
    kraj_prejemnika: "1000 Ljubljana",
  });

  return result;
}

const data = generateUPN();
generateQRCode(data, "upn-qr-logo.png");
