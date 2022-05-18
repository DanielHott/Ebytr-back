const Tarefas = (sequelize, DataTypes) => {
    const Tarefas = sequelize.define('Tarefas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        descricao: DataTypes.STRING,
        status: DataTypes.STRING,
        data: DataTypes.DATE,
        prioridade: DataTypes.STRING,
    }, { 
        freezeTableName: true,
        timestamps: false
    })
    return Tarefas
}

module.exports = Tarefas;