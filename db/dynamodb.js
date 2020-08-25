const AWS = require("aws-sdk");
require("dotenv").config();

const awsConfig = require("../config/config");
const DynamoDBExpression = require("../utiles/dynamodbExpression");
AWS.config.update({ region: awsConfig.AWS.AWS_REGION });
const docClient = new AWS.DynamoDB.DocumentClient();

const addData = async (table, items) => {
  var params = {
    TableName: table,
    Item: items
  };
  try {
    var result = await docClient.put(params).promise();
    var data = await getDataByID(table, { id: items["id"] });
    return { msg: "success", data: data.data };
  } catch (error) {
    return { msg: error };
  }
};

const getDataAll = async table => {
  var params = {
    TableName: table
  };
  try {
    var data = await docClient.scan(params).promise();
    return { msg: "success", data };
  } catch (error) {
    return { msg: error };
  }
};

const getDataByID = async (table, items) => {
  var params = {
    TableName: table,
    Key: items
  };
  try {
    var data = await docClient.get(params).promise();
    return { msg: "success", data: data.Item };
  } catch (error) {
    return { msg: error };
  }
};

const getDataByScan = async (table, items) => {
  var expAttrValues = DynamoDBExpression.convertExpAttributeValues(items);
  var expAttrNames = DynamoDBExpression.convertExpAttributeNames(items);
  var fiterExp = DynamoDBExpression.convertFilterExp(items);
  var params = {
    TableName: table,
    FilterExpression: fiterExp,
    ExpressionAttributeNames: expAttrNames,
    ExpressionAttributeValues: expAttrValues
  };
  try {
    var data = await docClient.scan(params).promise();
    return { msg: "success", data: data.Items };
  } catch (error) {
    return { msg: error };
  }
};

const updateData = async (table, items) => {
  try {
    var updateExp = DynamoDBExpression.convertUpdateExp(items);
    var expAttrValues = DynamoDBExpression.convertExpAttributeValues(items);
    var params = {
      TableName: table,
      Key: {
        id: items["id"]
      },
      UpdateExpression: updateExp,
      ExpressionAttributeValues: expAttrValues,
      ReturnValues: "UPDATED_NEW"
    };
    var result = await docClient.update(params).promise();
    return { msg: "success" };
  } catch (error) {
    return { msg: error };
  }
};

const deleteData = async (table, items) => {
  var params = {
    TableName: table,
    Key: items,
    ConditionExpression: "id <= :id",
    ExpressionAttributeValues: {
      ":id": items["id"]
    }
  };
  try {
    var result = await docClient.delete(params).promise();
    return { msg: "success" };
  } catch (error) {
    return { msg: error };
  }
};

module.exports = {
  addData,
  getDataByID,
  getDataByScan,
  getDataAll,
  updateData,
  deleteData
};
