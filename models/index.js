const pathModels = "./nosql";

const models = {
    usersModel: require(`${pathModels}/users`),
    tracksModel: require(`${pathModels}/tracks`),
    storageModel: require(`${pathModels}/storage`),
};

module.exports = models;