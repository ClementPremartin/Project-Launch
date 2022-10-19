import { MinLength } from "class-validator"
import { ArgsType, Field } from "type-graphql";

class Complex {
    value: string
    label: string
}

@ArgsType()
class AddWilderArgs {
    @Field()
    @MinLength(1, {
        message: "Le prénom doit faire au minimum 1 caractère de long"
    })
    firstname: string;

    @Field()
    @MinLength(1, {message: "Le nom doit faire au minimum 1 caractère de long"})
    lastname: string;

    @Field(() => Complex)
    schoolId: Complex;

    @Field(() => [Complex])
    skills: [Complex];

    @Field()
    description: string;
}

export { AddWilderArgs }