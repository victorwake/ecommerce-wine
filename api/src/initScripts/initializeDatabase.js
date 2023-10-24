import winesData from '../data/winesDb.json'
import mongoose from 'mongoose'
import Wine from '../models/Wine'
import expDb from '../data/expDb.json'
import Experience from '../models/Experience'

export default async function initializeDatabase() {
    try {
    await mongoose.connect('mongodb://127.0.0.1:27017/dionisio', { useNewUrlParser: true, useUnifiedTopology: true });
    await Wine.deleteMany({});
    await Wine.create(winesData);
    await Experience.deleteMany({});
    await Experience.create(expDb);
    console.log('Datos cargados en la base de datos con éxito');
  } catch (error) {
    console.error('Error al cargar datos en la base de datos:', error)
  } finally {
    mongoose.connection.close();
  }
}