public class ExcelFactory extends DocsFactory {
    @Override
    public Docs createDocs() {
        return new ExcelDocs();
    }
    
}
