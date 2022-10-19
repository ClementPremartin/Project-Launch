import { Args, Mutation, Query, Resolver } from 'type-graphql'

import Wilder from '../models/Wilder/WilderEntity'
import WilderRepository from '../models/Wilder/WilderRepository'
import { AddWilderArgs, GetWilderByIdArgs } from './WilderInput'

@Resolver(Wilder)
export default class WilderResolver {
  @Query(() => [Wilder])
  wilders(): Promise<Wilder[]> {
    return WilderRepository.getWilders()
  }

  @Query(() => Wilder)
  getWilderById(
    @Args()
    { userId }: GetWilderByIdArgs,
  ): Promise<Wilder | null> {
    return WilderRepository.getWilderById(userId)
  }

  @Mutation(() => Wilder)
  addWilder(
    @Args()
    { firstname, lastname, schoolId, skills, description }: AddWilderArgs,
  ): Promise<Wilder> {
    return WilderRepository.createWilder(
      firstname,
      lastname,
      schoolId,
      skills,
      description,
    )
  }
}
