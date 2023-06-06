const { getDuration, dados } = require("../services/getTimeTracking")

async function getDuration(req, res) {
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
    getDuration
}

