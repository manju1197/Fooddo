import Order from './order.model';
import OrderService from './order.service'

export default{
    findAll(req,res){
    Order.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async signup(req,res){
        try{
           
            const {error,value} = OrderService.validationSchema(req.body);
            if( error && error.details){
                     return res.status(500).json(error);
                    }
                // create user
                await Order.create(value)
                .then(item => res.json(item))
                .catch(err=> res.status(500).json(err));
                //    console.log(value);
            }
        catch(err){

            console.log(err);
            }
        },
        findOne(req,res){
            const id = req.params.id;
            Order.findById(id).then(emp => {
                if(!emp){
                    return res.status(400).json({err:"emp not found"});
                }
                return res.json(emp);
            })
            .catch(err => res.status(500).json(err));
        },

}