import java.util.Arrays;
import java.util.Comparator;
class Product{
    int productId;
    String productName;
    String category;
    Product(int productId, String productName, String category){
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
    void display(){
        System.out.println("ID: " + productId + ", Name: " + productName + ", Category: " + category);
    }
}
public class EcommerceSearch{
    public static Product linearSearch(Product[] products, int targetId){
        for(Product product : products){
            if(product.productId == targetId){
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, int targetId){
        int low = 0;
        int high = products.length - 1;
        while(low <= high){
            int mid = low + (high - low) / 2;
            if(products[mid].productId == targetId){
                return products[mid];
            } else if(products[mid].productId < targetId){
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Smartphone", "Electronics"),
            new Product(103, "Headphones", "Accessories"),
            new Product(104, "Shoes", "Footwear"),
            new Product(105, "Watch", "Accessories")
        };
        System.out.println("Linear Search Result:");
        Product result1 = linearSearch(products, 103);
        if(result1 != null){
            result1.display();
        } else {
            System.out.println("Product not found.");
        }
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        System.out.println("Binary Search Result:");
        Product result2 = binarySearch(products, 103);
        if(result2 != null){
            result2.display();
        } else {
            System.out.println("Product not found.");
        }
    }
}