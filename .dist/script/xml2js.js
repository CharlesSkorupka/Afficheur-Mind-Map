import { XMLParser } from "fast-xml-parser";

export async function xmlSort(file) {
  let text = await file;
//parametre de l'objet
  const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "",
  };
//On transforme le string en objet
  const parser = new XMLParser(options);
  let jObj = parser.parse(text);
  return jObj;
}
