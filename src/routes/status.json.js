import https from 'https'

async function g(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            resolve({ statusCode: res.statusCode })
        }).on('error', (e) => {
            reject(e)
        });
    })
}

export async function get() {
    const sosUrl = 'https://cal-access.sos.ca.gov/'
    let calAccessIsDown = false

    try {
        const { statusCode } = await g(sosUrl)
        console.log({ statusCode })

        if (statusCode !== 200) {
            calAccessIsDown = true
        }
    } catch (e) {
        console.log("i wonder what kind of error is happening", e)
        calAccessIsDown = true
    }

    return {
        status: 200,
        body: {
            calAccessIsDown
        }
    };
}