const Case = require('../schema/caseSchema');




exports.addNewCase = (req, res) => {
    const {email, subject, message, status, comments} = req.body;

    if(!email || !subject || !message ){
        res.status(400).json({ 
            message: 'you need to enter a everything'
    })
return
}

Case.create({email, subject, message, status, comments})
.then(data => res.status(201).json(data))
.catch(()=> res.status(500).json({message: ' hej och hå'}))

}

exports.getCases = (req, res) => {
    Case.find()
    .then(data => res.status(200).json(data))
    .catch(()=> res.status(500).json({message: ' hej och då'}))  
}


exports.getOneCase = (req, res)=> {
  Case.findOne({
    _id:req.params.id
  })
  .then(data => {res.status(200).json(data)})
  .catch(()=> res.status(500).json({message: ' something went wrong'}))
}

exports.getStatus = (req, res) => {
    Case.find()
    .then(data => res.status(200).json(data))
    .catch(()=> res.status(500).json({message: ' something went wrong fetching status'}))  
}


// update 
// exports.getUpdateStatus = (req, res) => {
//     Case.findByIdAndUpdate(req.params.id, req.body, {new: true} )
//     .then(data => res.status(200).json(data))
//     .catch(()=> res.status(500).json({message: ' something went wrong fetching status'}))  
// }


// just trying

// exports.getStatus = (req, res) => {
//     Case.find()
//     .then(data => res.status(200).json(data))
//     .catch(()=> res.status(500).json({message: ' hej och då'}))  
// }