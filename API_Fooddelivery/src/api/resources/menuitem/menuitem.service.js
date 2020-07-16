import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
          
           Categoryname:Joi.string().required(),
           name:Joi.string().required(),
        //    restroId:Joi.string().required(),
        image:Joi.string().required(),
           price:Joi.number().required(),
           rating:Joi.number().required(),
          
        });
        const {error,value} = Joi.validate(body,schema);
        console.log(error);
        if(error && error.details){
            return{error};
        
            }
            return{ value};
    }
}
