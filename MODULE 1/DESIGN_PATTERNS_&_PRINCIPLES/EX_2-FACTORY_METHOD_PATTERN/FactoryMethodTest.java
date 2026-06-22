public class FactoryMethodTest {
    public static void main(String[] args) {
        DocsFactory wordFactory = new WordFactory();
        Docs wordDocs = wordFactory.createDocs();
        wordDocs.open();

        DocsFactory pdfFactory = new PdfFactory();
        Docs pdfDocs = pdfFactory.createDocs();
        pdfDocs.open();

        DocsFactory excelFactory = new ExcelFactory();
        Docs excelDocs = excelFactory.createDocs();
        excelDocs.open();
    }
}
