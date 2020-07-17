import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            name:Joi.string().required(),
        //    createdBy:Joi.string().required()
           
        });
        const {error,value} = Joi.validate(body,schema);
        console.log(error);
        if(error && error.details){
            return{error};
        
            }
            return{ value};
    }}
