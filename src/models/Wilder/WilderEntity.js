const EntitySchema =  require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "wilder",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid"
        },
        firstname: {
            type: "text",
        },
        lastname: {
            type: "text",
        },
    },
    relations: {
        school: {
            target: "school",
            type: "many-to-one",
            eager: true,
        },
        skills: {
            target: "skill",
            type: "many-to-many",
            joinTable: true,
            eager: true,
        },
    }
});