import { body, param, validationResult } from 'express-validator';

const validateUser = [ 
    body('name')
        .trim()
        .notEmpty().withMessage('El nombre es requerido')
        .isString().withMessage('El nombre debe ser una cadena de texto'),
    body('email')
        .trim()
        .notEmpty().withMessage('El correo electrónico es requerido')
        .isEmail().withMessage('El correo electrónico debe ser una dirección válida'),
   
];

const validateId = [
   param('id')
        .notEmpty().withMessage('El ID es requerido')
        .isInt().withMessage('El ID debe ser un número entero')
];

function CheckValidation(rules) {
   return async (req, res, next) => {
      const chains = Array.isArray(rules) ? rules : [rules];
      for (let chain of chains) {
         await chain.run(req);
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    };
}

export { CheckValidation, validateUser, validateId };