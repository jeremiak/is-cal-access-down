// SvelteKit endpoint documentation
// https://kit.svelte.dev/docs#routing-endpoints

import { exec as execCb } from 'child_process'
import { promisify } from 'util'

const exec = promisify(execCb)

export async function get() {
    const response = await exec(`curl -I https://cal-access.sos.ca.gov/`)
    const { stdout } = response

    let calAccessIsDown = false

    if (!stdout.startsWith('HTTP/2 200')) {
        calAccessIsDown = true
    }

    return {
        status: 200,
        body: {
            calAccessIsDown
        }
    };
}