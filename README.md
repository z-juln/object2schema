# object2schema

将js对象转化为描述对象的schema

## install

`npm i object2schema`

## use

```typescript
import object2schema from "object2schema";

const schema = object2schema({
  project: 'object2schema-test',
  version: '1.0.0',
  info: {
    name: 'hhh',
    age: 11,
  },
});

console.log(schema);

```

## output

```json
[
  {
    "key": "project",
    "type": "string",
    "required": true
  },
  {
    "key": "version",
    "type": "string",
    "required": true
  },
  {
    "key": "info",
    "type": "object",
    "required": true,
    "properties": [
      {
        "key": "name",
        "type": "string",
        "required": true
      },
      {
        "key": "age",
        "type": "number",
        "required": true
      }
    ]
  }
]
```
