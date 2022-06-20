//On ouvre le fichier et on le transforme en string
export async function loadFile(file) {
  let text = await file.text();

  var file = text;
  var reader = new FileReader();
  //Quand le fichier est chargé
  reader.onload = function (progressEvent) {
    var fileContentArray = this.result.split(/\r\n|\n/);
    for (var line = 0; line < lines.length - 1; line++) {
      var parsed_uml = parse_uml(lines[line]);
    }
  };
  return text;
}