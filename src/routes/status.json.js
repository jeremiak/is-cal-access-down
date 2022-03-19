import https from 'https'

async function g(url) {
    return new Promise((resolve, reject) => {
        let soFar = []
        https.get(url, res => {
            res.on('data', (d) => {
                soFar.push(d.toString())
            });

            resolve({
                statusCode: res.statusCode,
                headers: res.headers,
                body: soFar.join('')
            })
        }).on('error', (e) => {
            console.error(e);
            reject(e)
        });
    })
}

export async function get() {
    const sosUrl = 'https://cal-access.sos.ca.gov/'
    const { statusCode } = await g(sosUrl)
    let calAccessIsDown = false

    if (statusCode !== 200) {
        calAccessIsDown = true
    }

    return {
        status: 200,
        body: {
            calAccessIsDown
        }
    };
}