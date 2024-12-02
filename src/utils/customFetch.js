export async function customFetch(url, options = {}) {
    console.log(options, 'options')
    const defaultHeaders = {
        'X-Channel': 'STUDIO',
        'Content-Type': 'application/json',
    };

    const headers = { ...defaultHeaders, ...options.headers };

    const response = await fetch(`${process.env.REACT_APP_API_MODULE_URL}${url}`, {
        ...options,
        next: { revalidate: 60 },
        headers,
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Fetch error: ${error}`);
    }

    return await response.json();
}
