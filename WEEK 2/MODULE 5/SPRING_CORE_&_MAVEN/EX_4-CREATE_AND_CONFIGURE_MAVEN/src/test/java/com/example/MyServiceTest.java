package com.example;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testVoidMethod() {

        // Step 1: Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub the void method
        doNothing().when(mockApi).sendMessage(anyString());

        // Create service
        MyService service = new MyService(mockApi);

        // Call method
        service.processData();

        // Step 3: Verify interaction
        verify(mockApi).sendMessage("Data processed successfully");
    }
}