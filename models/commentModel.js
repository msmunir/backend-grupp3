const Case = require("../schema/caseSchema")
const Comment = require("../schema/commentsSchema")


// detta för att skapa en komentar 
exports.addComment = async (req, res) => {
    const caseId = req.params.id;
    // dett aber vi om från bodyn (samma som i schemat))
    const {email, message} = req.body 

    const comment = await Comment.create({caseId,email,message})

    await Case.findByIdAndUpdate(caseId, {$push:{comments: comment._id}},{new: true})

    res.status(201).json(comment)
}