const convertUpdateExp = items => {
  var exp = "set ";
  Object.keys(items).map(function(key, index) {
    if (key != "id") {
      exp += key + " = :" + key + ", ";
    }
  });
  exp = exp.substr(0, exp.length - 2);
  return exp;
};

const convertFilterExp = items => {
  var exp = "";
  var attr_key;
  Object.keys(items).map(function(key, index) {
    if (key != "id") {
      exp += "#" + key + " = " + ":" + key + " AND ";
    }
  });
  exp = exp.substr(0, exp.length - 4);
  return exp;
};

const convertExpAttributeValues = items => {
  var attr_values = new Object();
  var attr_key;
  Object.keys(items).map(function(key, index) {
    if (key != "id") {
      attr_key = ":" + key;
      attr_values[attr_key] = items[key];
    }
  });
  return attr_values;
};

const convertExpAttributeNames = items => {
  var attr_values = new Object();
  var attr_key;
  Object.keys(items).map(function(key, index) {
    if (key != "id") {
      attr_key = "#" + key;
      attr_values[attr_key] = key;
    }
  });
  return attr_values;
};

module.exports = {
  convertUpdateExp,
  convertExpAttributeValues,
  convertExpAttributeNames,
  convertFilterExp
};
