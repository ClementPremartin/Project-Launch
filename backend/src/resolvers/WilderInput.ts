import { MinLength } from 'class-validator'
import { ArgsType, Field } from 'type-graphql'

@ArgsType()
class AddWilderArgs {
  @Field()
  @MinLength(1, {
    message: 'Le prénom doit faire au minimum 1 caractère de long',
  })
  firstname: string

  @Field()
  @MinLength(1, { message: 'Le nom doit faire au minimum 1 caractère de long' })
  lastname: string

  @Field(() => String)
  schoolId: string

  @Field(() => [String])
  skills: string[]

  @Field()
  description: string
}

@ArgsType()
class GetWilderByIdArgs {
  @Field()
  userId: string
}

export { AddWilderArgs, GetWilderByIdArgs }
