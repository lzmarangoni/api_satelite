const {Router} = require("express")
const { getFolderUI } = require("../controllers/getFolderUI")

const router = Router()

router.get('/UI-UX/tarefas', getFolderUI)



module.exports = router