import {Model, DataTypes} from'sequelize'
import {sequelize} from '../config/mysql'

//criando um modelo para o users do meu banco
export interface UserInstance extends Model{
    id:number,
    name:string,
    age:number
}

export const User = sequelize.define<UserInstance>("User,",{

    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue: 18
    }

},{
    tableName:'users',
    timestamps:false
})