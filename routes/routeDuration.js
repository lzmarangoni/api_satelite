const {Router} = require("express")
const { getDuration  } = require("../controllers/getDurationOffTime")

const router = Router()

router.get('/duracao', getDuration)

module.exports = router