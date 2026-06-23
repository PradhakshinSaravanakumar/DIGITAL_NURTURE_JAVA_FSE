public class WordFactory extends DocsFactory {
    @Override
    public Docs createDocs() {
        return new WordDocs();
    }
}