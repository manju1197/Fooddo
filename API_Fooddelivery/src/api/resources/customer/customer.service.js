import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            firstname:Joi.string().required(),
            lastname:Joi.string().required(),
            userId:Joi.string().required(),
            address:Joi.string().required(),
            dob:Joi.string().required(),
           city:Joi.string().required(),
           state:Joi.string().required(),
           pin:Joi.number().required(),
            contact:Joi.number().required(),
            email:Joi.string().email().required(),
            gender:Joi.string().required(),
           isActive:Joi.string().required()
        });
        const {error,value} = Joi.validate(body,schema);
        console.log(error);
        if(error && error.details){
            return{error};
        
            }
            return{ value};
    }}
