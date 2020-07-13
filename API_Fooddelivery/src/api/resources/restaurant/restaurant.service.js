import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            name:Joi.string().required(),
            address:Joi.string().email().required(),
           city:Joi.string().required(),
           state:Joi.string().required(),
           pin:Joi.number().required(),
            contact:Joi.number().required(),
            type:Joi.string(),
            status:Joi.string(),
            opentime:Joi.time(),
            closetime:Joi.time(),
           
        });
        const {error,value} = Joi.validate(body,schema);
        console.log(error);
        if(error && error.details){
            return{error};
        
            }
            return{ value};
    }}
