const EntitySchema =  require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "skill",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid"
        },
        skill_name: {
            type: "text",
            unique: true,
        },
    },
});