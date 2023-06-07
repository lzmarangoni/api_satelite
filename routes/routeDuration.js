const {Router} = require("express")
const { returnDuration  } = require("../controllers/DurationController")

const router = Router()

router.get('/tracking', returnDuration)

module.exports = router