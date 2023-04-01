const Case = require('../schema/caseSchema');
// const Status = require('../schema/statusSchema');

// SKAPA

exports.addNewCase = (req, res) => {

    const {email, subject, message} = req.body;

    if(!email || !subject || !message ){

        res.status(400).json({ 
            message: 'you need to enter a everything'
    })
}

Case.create({email, subject, message})
.then(data => res.status(201).json(data))
.catch(()=> res.status(500).json({message: 'It diden work to create a cae'}))

}


 // hämta cases 

exports.getCases =  (req, res) => {
    Case.find().populate('comments').populate('status')
    .then((data) => {res.status(200).json(data)})
    .catch((err)=> {res.status(500).json({message: ' kunde inte hämta cases', err: err.message});
}) ;
};

// här heämtar vi ett case med id 

exports.getOneCaseId = (req, res)=> {
  Case.findById(req.params.id).populate("comments").populate("status")
  .then((data) => {res.status(200).json(data)
})
  .catch((err)=>{res.status(500).json({message: ' something went wrong, could not fetch the case', err:err.message})})
}


exports.changeStatus = async (req, res)=> {

const status = await Case.findOneAndUpdate({_id:req.params.id}, {status: req.body.statusId}, {new: true})
//  status.populate(status)
    if(!status){
        return res.status(404).json({
            message: "could not change the post"
        })
       }
    res.status(200).json(status)

}
