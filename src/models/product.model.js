import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,'El nombre es obligatorio ' ],
        trim:true,
        minlength: [2,'El nombre a de tener 2 caracteres ' ],
        maxlength: [100,'El nombre no debe superar los 10 caracteres ' ],
    }, 

    price: {
        type: Number,
        required: [true,'El precio es obligatorio ' ],
        min: [0,'El precio no puede ser negativo ' ],
        
    },

    stock: {
        type: Number,
        required:  [true,'El precio es obligatorio ' ],
    validate: {
            validator: Number.isInteger,
            message:'El stock debe ser entero'
        },
    },
    category: { 
        type: String,
        trim: true,
        default: 'General'
    },
},

    { 
        timestamps: true,
        versionKey: false
    }
);

const   Product = mongoose.model('Product', productSchema);

export default Product;
