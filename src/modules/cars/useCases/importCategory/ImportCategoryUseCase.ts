import csvParse from 'csv-parse';
import fs from 'fs';
// file system

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    // pipe: a cada linha lida, pegamos os dados separados por vírgula
    stream.pipe(parseFile);

    parseFile.on('data', async line => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
