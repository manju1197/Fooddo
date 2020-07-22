import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            name:Joi.string().required(),
            UserId:Joi.string().required(),
            OrderId:Joi.string().required(),
            ProductId:Joi.string().required(),
          Productname:Joi.string().required(),
           quantity:Joi.number().required(),
            Total:Joi.number().required(),
           
           
        });
        const {error,value} = Joi.validate(body,schema);
        console.log(error);
        if(error && error.details){
            return{error};
        
            }
            return{ value};
    }}
