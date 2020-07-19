import Menu from './menuitem.model';
import MenuService from './menuitem.service';
export default{
    findAll(req,res){
        Menu.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async create(req,res){
        try{
           
            const {error,value} = MenuService.validationSchema(req.body);
            if( error && error.details){
                     return res.status(500).json(error);
                    }
                // create user
                await Menu.create(value)
                .then(item => res.json(item))
                .catch(err=> res.status(500).json(err));
                   
            }
        catch(err){

            console.log(err);
            }
        },
        findOne(req,res){
            const id = req.params.id;
            Menu.findById(id).then(emp => {
                if(!emp){
                    return res.status(400).json({err:"emp not found"});
                }
                return res.json(emp);
            })
            .catch(err => res.status(500).json(err));
        },
       
    }