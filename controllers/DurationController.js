const { getDuration} = require("../services/getTimeTracking")

async function returnDuration(req, res) {
    res.header({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    })
    const duration = await getDuration()
    try {
        res.send(duration)
    } catch (error) {
        console.log(error)
    }


}



module.exports = {
    returnDuration
}

