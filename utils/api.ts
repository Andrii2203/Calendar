export const submitOrder = async (date: string) => {
    try {
        const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date }),
        });
    
        if (!response.ok) {
            throw new Error('HTTP error: ' + response.status);
        }
    
        const data = await response.json();
        console.log('Order submitted successfully:', data);
        return data;
    } catch (error) {
        console.error('Error submitting order:', error);
        throw error;
    }
}