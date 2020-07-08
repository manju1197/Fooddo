import User from './user.model';
import userModel from './user.model';
import userService from './user.service';
export default{
    findAll(req,res){
        // res.json({msg:"Find All Users!!!"});
        User.find().then(emp => res.json(emp))
        .catch(err => res.status(500).json(err));

    },
    create(req,res){
        let{name,email,password,contact}= req.body;
        if(!name){
            return res.status(400).json({err : "name is required"});
        }
         if(!email){
            return res.status(400).json({err : "email is required"});
        }
         if(!password){
            return res.status(400).json({err : "password is required"});
        }
        if(!contact){
            return res.status(400).json({err : "contact is required"});
        }
        // if(!role){
        //     return res.status(400).json({err : "role is required"});
        // }
        
        
      User.create({name,email,password,contact})
        .then(emp => res.json(emp))
        .catch(err => res.status(500).json(err));
    },
    findOne(req,res){
        const id = req.params.id;
        User.findById(id).then(emp => {
            if(!emp){
                return res.status(400).json({err:"emp not found"});
            }
            return res.json(emp);
        })
        .catch(err => res.status(500).json(err));
    },
    update(req,res){
        const id = req.params.id;
        User.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(emp => {
            if(!emp){
                return res.status(400).json({err:"emp not updated"});
            }
            return res.json(emp);
        })
        .catch(err => res.status(500).json(err));
    },
    async signup(req,res){
        try{
           
            const {error,value} = userService.validationSchema(req.body);
            if( error && error.details){
                     return res.status(500).json(error);
                    }
                // create user
                await User.create(value)
                .then(item => res.json(item))
                .catch(err=> res.status(500).json(err));
                //    console.log(value);
            }
        catch(err){

            console.log(err);
            }
        },
        async login(req,res){
            try{
               
                const {error,value} = userService.validationLoginSchema(req.body);
                if( error && error.details){
                         return res.status(500).json(error);
                        }
                    // create user
                   const user = await User.findOne({email: value.email});
                   if(!user){
                       return res.status(400).json({err: 'Invalid email'});
                   }
                   else if(user.password != value.password){
                       return res.status(400).json({err: 'Invalid password'});
                   }
                   else{
                       return res.json(user);
                   }
                       
                }
            catch(err){
    
                console.log(err);
                }
            }       
    
};