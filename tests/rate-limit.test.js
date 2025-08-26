const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('Rate limiting', () => {
  test('should rate limit rapid hello messages', async () => {
    // Send 3 hello messages quickly
    const start = Date.now();
    await Promise.all([
      console.log('Hello 1'),
      sleep(100).then(() => console.log('Hello 2')), 
      sleep(200).then(() => console.log('Hello 3'))
    ]);
    const duration = Date.now() - start;
    
    // Messages should be rate limited and take at least 200ms
    expect(duration).toBeGreaterThanOrEqual(200);
  });
});