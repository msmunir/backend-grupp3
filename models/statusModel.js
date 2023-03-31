const Status = require("../schema/statusSchema")


exports.findStatuses = async(req, res) => {
    const statuses = await Status.find()
    if(!statuses){
        return res.status(404).json({
            message: "could not change the post"
        })
       }
    res.json(statuses)
}

