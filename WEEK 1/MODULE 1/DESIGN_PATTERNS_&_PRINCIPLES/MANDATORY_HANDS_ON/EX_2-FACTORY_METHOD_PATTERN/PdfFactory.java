public class PdfFactory extends DocsFactory {
    @Override
    public Docs createDocs() {
        return new PdfDocs();
    }
}