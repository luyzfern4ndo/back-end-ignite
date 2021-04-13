interface IRequest {
  file: any;
}

class ImportCategoryUseCase {
  execute(file: any) {
    console.log(file);
  }
}

export { ImportCategoryUseCase };
