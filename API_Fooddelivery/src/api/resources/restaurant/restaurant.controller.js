import vendor from './restaurant.model';
import transService from './restaurant.service';
export default{
    create(req,res){
        let{name,address,city,state,pin,contact,type,opentime,closetime,status}= req.body;
        if(!name){
            return res.status(400).json({err : "name is required"});
        }
        if(!address){
            return res.status(400).json({err : "name is required"});
        }
        if(!city){
            return res.status(400).json({err : "name is required"});
        }
        if(!state){
            return res.status(400).json({err : "name is required"});
        }
        if(!pin){
            return res.status(400).json({err : "name is required"});
        }
    
        if(!contact){
            return res.status(400).json({err : "contact is required"});
        }
        if(!opentime){
            return res.status(400).json({err : "name is required"});
        }
        if(!closetime){
            return res.status(400).json({err : "name is required"});
        }
       
        
        
      vendor.create({nameaddress,city,state,pin,contact,type,opentime,closetime,status})
        .then(emp => res.json(emp))
        .catch(err => res.status(500).json(err));
    },   
    async signup(req,res){
        try{
           
            const {error,value} = transService.validationSchema(req.body);
            if( error && error.details){
                     return res.status(500).json(error);
                    }
                // create user
                await vendor.create(value)
                .then(item => res.json(item))
                .catch(err=> res.status(500).json(err));
                //    console.log(value);
            }
        catch(err){

            console.log(err);
            }
        },
}