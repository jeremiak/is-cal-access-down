// Hooks documentation
// https://kit.svelte.dev/docs#hooks

// handle() hook documentation
// https://kit.svelte.dev/docs#hooks-handle
export const handle = async({ event, resolve }) => {
    const response = await resolve(event)

    return response;
};