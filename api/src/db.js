import mongoose  from 'mongoose';

async function connect() {
    
    return mongoose.connect('mongodb://127.0.0.1:27017/dionisio', 
    { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Db is connected');
        })
        .catch((error) => {
            console.error('Error connecting to the database:', error);
        });
        // await mongoose.connection.db.dropDatabase();
}

export default connect;
