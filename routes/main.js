const Ajv = require('ajv');

const ajv = new Ajv();

const schema = {
  "type": "object",
  "properties": {
    "postID": { "type": "integer" },
    "id": { "type": "integer" },
    "name": { "type": "string" },
    "email":{ "type": "string", "format": "email"}, 
    "body": {"type": "string"}
  },
  "required": ["postID", "id", "name", "email", "body"]
};

const data =   {
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
};

const validate = ajv.compile(schema);
const isValid = validate(data);

if (isValid) {
  console.log("Дані валідні.");
} else {
  console.log("Помилки валідації:", validate.errors);
};