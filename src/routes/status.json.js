// import https from 'https'

// async function g(url) {
//     return new Promise((resolve, reject) => {
//         const u = new URL(url)
//         const opts = {
//             protocol: u.protocol,
//             host: u.host,
//             timeout: 3000,
//         }
//         console.log({ opts })
//         https.get(opts, res => {
//             console.log('res', res.statusCode)
//             resolve({ statusCode: res.statusCode })
//         }).on('error', (e) => {
//             reject(e)
//         });
//     })
// }

import https from 'axios'

export async function get() {
    const sosUrl = 'https://cal-access.sos.ca.gov/'
    let calAccessIsDown = false

    try {
        console.log('before')
        const { statusCode } = await https.get(sosUrl, {
            timeout: 15000
        })
        console.log({ statusCode })

        if (statusCode !== 200) {
            calAccessIsDown = true
        }
    } catch (e) {
        console.log("i wonder what kind of error is happening", e)
        calAccessIsDown = true
    }

    console.log('yo')

    return {
        status: 200,
        body: {
            calAccessIsDown
        }
    };
}