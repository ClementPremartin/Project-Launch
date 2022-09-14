const EntitySchema =  require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "school",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid"
        },
        city_name: {
            type: "text",
            unique: true,
        },
    },
});