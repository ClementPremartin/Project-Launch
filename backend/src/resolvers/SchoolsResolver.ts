import { Query, Resolver } from "type-graphql";

import School from "../models/School/SchoolEntity";
import SchoolRepository from "../models/School/SchoolRepository";

@Resolver(School)
export default class SchoolResolver {
    @Query(() => [School])
    schools(): Promise<School[]> {
        return SchoolRepository.getSchools();
    }
}
