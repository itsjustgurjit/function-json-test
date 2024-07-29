exports.handler = async (event, context) => {
    const data = require('./data.json');
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  };
  