import { Args, Mutation, Query, Resolver } from "type-graphql";

import Wilder from "../models/Wilder/WilderEntity";
import WilderRepository from "../models/Wilder/WilderRepository";

@Resolver(Wilder)
export default class WilderResolver {

    @Query(()=> [Wilder])
    wilders(): Promise<Wilder[]> {
        return WilderRepository.getWilders();
    }

}