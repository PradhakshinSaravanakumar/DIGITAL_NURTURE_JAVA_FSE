import org.junit.Test;
import static org.junit.Assert.*;
public class CalculatorTest{
    @Test
    public void testAdd(){
        int result = 5 + 3;
        assertEquals(8, result);
    }
}