const Case = require('../schema/caseSchema');
// const Status = require('../schema/statusSchema');




// SKAPA

exports.addNewCase = (req, res) => {

    const {email, subject, message, status, } = req.body;

    if(!email || !subject || !message ){

        res.status(400).json({ 
            message: 'you need to enter a everything'
    })
return
}


Case.create({email, subject, message, status})

.then(data => res.status(201).json(data))
.catch(()=> res.status(500).json({message: ' hej och hå'}))

}



exports.getCases =  (req, res) => {
    Case.find().populate('status', )
    .then(data => res.status(200).json(data))
    .catch(()=> res.status(500).json({message: ' kunde inte hämta cases'}))  
}


exports.getOneCase = (req, res)=> {
  Case.findOne({
    _id:req.params.id
  })
  .then(data => {res.status(200).json(data)})
  .catch(()=> res.status(500).json({message: ' something went wrong'}))
}


exports.changeStatus = async (req, res)=> {
    const status = await Case.findByIdAndUpdate(req.params.id, {status: req.body.statusId}, {new: true})
    if(!status){
        return res.status(404).json({
            message: "could not change the post"
        })
       }
    res.status(200).json(status)

}
