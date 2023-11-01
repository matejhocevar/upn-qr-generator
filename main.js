import { encode } from "upnqr";
import * as QRLogo from "qr-with-logo";

async function generateQRCode(data, filename) {
  await QRLogo.generateQRWithLogo(
    data,
    "input/pgd_jarse_rodica_logo_small.png",
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
    nujno: true,
    koda_namena: "OTHR",
    namen_placila: "Prostovoljni prispevek",
    IBAN_prejemnika: "SI56 6100 0001 5198 986",
    referenca_prejemnika: "SI99",
    ime_prejemnika: "PGD Jarše - Rodica",
    ulica_prejemnika: "Jarška cesta 37",
    kraj_prejemnika: "1230 Domžale",
  });

  return result;
}

const data = generateUPN();
generateQRCode(data, "output/pgd_jarse_rodica_any_upn-qr-logo.png");
