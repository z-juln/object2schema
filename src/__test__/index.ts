import object2schema from "..";

const schema = object2schema({
  project: 'object2schema-test',
  version: '1.0.0',
  info: {
    name: 'hhh',
    age: 11,
  },
});

console.log(
  JSON.stringify(schema, null, 2)
);
