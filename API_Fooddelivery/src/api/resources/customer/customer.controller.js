import client from './customer.model';
import custService from './customer.service';
export default{
    findAll(req,res){
    client.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async signup(req,res){
        try{
           
            const {error,value} = custService.validationSchema(req.body);
            if( error && error.details){
                     return res.status(500).json(error);
                    }
                // create user
                await client.create(value)
                .then(item => res.json(item))
                .catch(err=> res.status(500).json(err));
                //    console.log(value);
            }
        catch(err){

            console.log(err);
            }
        },
        findByTransaction(req,res,next){
                let {id} =  req.params;
                Transaction.find({'regId':id}).then(data => res.json(data))
                .catch(err => res.status(500).json(err));
            },
            update(req,res){
                const id = req.params.id;
                client.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(emp => {
                    if(!emp){
                        return res.status(400).json({err:"emp not updated"});
                    }
                    return res.json(emp);
                })
                .catch(err => res.status(500).json(err));
            },     

}