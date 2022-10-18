import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { buildSchema } from "type-graphql";

import WilderResolver from "./resolvers/WilderResolver";

import WilderRepository from "./models/Wilder/WilderRepository";
import SkillRepository from "./models/Skill/SkillRepository";
import SchoolRepository from "./models/School/SchoolRepository";

const start = async() => {

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [WilderResolver],
        }),
        csrfPrevention: true,
        cache: 'bounded',
        /**
         * What's up with this embed: true option?
         * These are our recommended settings for using AS;
         * they aren't the defaults in AS3 for backwards-compatibility reasons but
         * will be the defaults in AS4. For production environments, use
         * ApolloServerPluginLandingPageProductionDefault instead.
        **/
        plugins: [
          ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
      });

    // The `listen` method launches a web server.
    const  {url} = await server.listen();
    await SkillRepository.initializeRepository();
    await SchoolRepository.initializeRepository();
    await WilderRepository.initializeRepository();

    await SkillRepository.initializeSkill();
    await SchoolRepository.initializeSchool();
    await WilderRepository.initializeWilder();

    console.log(`🚀  Server ready at ${url}`);

}

start();


// import { findAllWilders, findWilderById, addWilder, modifyWilderById, deleteWilderById, addSkills} from "./controller/WilderController";
// import { findAllSchools } from "./controller/SchoolController";
// import { findAllSkills } from "./controller/SkillsController";


// const WILDERS_PATH = "/wilders";
// app.get(WILDERS_PATH, findAllWilders);
// app.get(`${WILDERS_PATH}/:id`, findWilderById);

// app.get(`/schools`, findAllSchools);
// app.get(`/skills`, findAllSkills);

// app.post(WILDERS_PATH, addWilder);
// app.put(`${WILDERS_PATH}/:id`, modifyWilderById);
// app.delete(`${WILDERS_PATH}/:id`, deleteWilderById);

// app.post(`${WILDERS_PATH}/:id/skills`, addSkills);