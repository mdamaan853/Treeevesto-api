const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://treevesto:Password+123@cluster0.xwsbx.mongodb.net/treevesto?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/treevesto', { useNewUrlParser: true,useUnifiedTopology: true });
  
module.exports=mongoose
