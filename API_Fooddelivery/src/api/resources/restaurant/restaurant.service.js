import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            name:Joi.string().required(),
            regId:Joi.string().required(),
            url:Joi.string().required(),
            address:Joi.string().required(),
           city:Joi.string().required(),
           state:Joi.string().required(),
           pin:Joi.number().required(),
            contact:Joi.number().required(),
         type:Joi.string().required(),
            status:Joi.string().required(),
            opentime:Joi.date().required(),
            closetime:Joi.date().required(),
           
        });
        const {error,value} = Joi.validate(body,schema);
        console.log(error);
        if(error && error.details){
            return{error};
        
            }
            return{ value};
    }}
