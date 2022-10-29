const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      },
    id:{
      type: DataTypes.UUID, //Me crea un número random con letras y numeros que es específico y no se repite
      defaultValue: DataTypes.UUIDV4, //aleatorio
      allowNull:false, // es para que si o sí tenga un id, al decir false me exige que tenga un id
      primaryKey:true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/07/247161-nuevos-pokemon-salen-huevos.jpg?itok=_KF-nmwE'
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 55,
      validate: {
        max: 150,
        min: 15
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 48,
      validate: {
        max: 150,
        min: 10
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 65,
      validate: {
        max: 150,
        min: 15
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 45,
      validate: {
        max: 150,
        min: 10
      }
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      validate: {
        max: 10,
        min: 1
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 300,
      validate: {
        max: 1500,
        min: 1
      }
    },  
    createdInDb: { //Para cuando quiero hacer un llamado unicamente a los que estan en db
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,    
    }
  },
  );
};
