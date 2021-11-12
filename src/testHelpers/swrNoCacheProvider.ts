// Reset Cache Between Test Cases
//
// When testing your application, you might want to reset the SWR cache between test cases.
// You can simply wrap your application with an empty cache provider.
//
// Source: https://swr.vercel.app/docs/advanced/cache#reset-cache-between-test-cases
const swrNoCacheProvider = () => new Map()

export default swrNoCacheProvider
