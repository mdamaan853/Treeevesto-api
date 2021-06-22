const mongoose = require('mongoose');
// mongoose.connect('mongodb://treevesto:Hey@40Treevesto%2343@165.232.179.213:27017/treevesto?authSource=admin&readPreference=primary&ssl=false',{useUnifiedTopology: true });
// mongoose.connect('mongodb://165.232.179.213:27017/treevesto?authSource=admin',{ useNewUrlParser: true,useUnifiedTopology: true });
// mongoose.connect('mongodb://treevesto:Hey@Treevesto#43@165.232.179.213:27017/treevesto?authSource=admin&tls=false"',{ useNewUr   lParser: true,useUnifiedTopology: true });
mongoose.connect('mongodb+srv://treevesto:Password+123@cluster0.xwsbx.mongodb.net/treevesto?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/treevesto', { useNewUrlParser: true,useUnifiedTopology: true });
  
module.exports=mongoose
