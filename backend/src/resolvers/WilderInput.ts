import { IsUUID, MinLength } from 'class-validator'
import { ArgsType, Field, ID } from 'type-graphql'

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
  @MinLength(10, {
    message: 'La description doit faire au minimum 10 caractère de long',
  })
  description: string
}

@ArgsType()
class GetWilderByIdArgs {
  @Field()
  userId: string
}

@ArgsType()
class ModifyWilderByIdArgs extends AddWilderArgs {
  @Field(() => ID)
  @IsUUID()
  id: string
}

@ArgsType()
class DeleteWilderByIdArgs {
  @Field(() => ID)
  @IsUUID()
  id: string
}

@ArgsType()
class AddSkillsToWilderArgs {
  @Field(() => ID)
  @IsUUID()
  wilderId: string

  @Field(() => ID)
  @IsUUID()
  skillId: string
}

export {
  AddWilderArgs,
  GetWilderByIdArgs,
  ModifyWilderByIdArgs,
  DeleteWilderByIdArgs,
  AddSkillsToWilderArgs,
}
