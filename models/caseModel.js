const Case = require('../schema/caseSchema');




exports.addNewCase = (req, res) => {
    const {email, subject, message} = req.body;

    if(!email || !subject || !message){
        res.status(400).json({ 
            message: 'you need to enter a everything'
    })
return
}

Case.create({email, subject, message})
.then(data => res.status(201).json(data))
.catch(()=> res.status(500).json({message: ' hej och hå'}))

}

// exports.getAuthors = (req, res) => {
//     Author.find()
//     .then(data => res.status(200).json(data))
//     .catch(()=> res.status(500).json({message: ' hej och då'}))
    
    
// }


// exports.createCase = (req, res) => {
    
// const {case} = req.body
// console.log(case)
// if(!case){
//    return res.status(400).json({
//         message: 'You need to enter a case'
//     })
//    }

//    Case.create(( case ))
//    .then((case) => {
//     res.status(201).json(case)
//    })
//    .catch(err => {
//     res.status(500).json({
//         message: err.message, err
//     })
//    })
// }