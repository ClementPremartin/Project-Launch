import WilderRepository from '../models/Wilder/WilderRepository'
import { Request, Response } from 'express'
import { getErrorMessage } from '../utils'

// const findAllWilders = async (req: Request, res: Response) => {
//     const wilders = await WilderRepository.getWilders();
//     res.json(wilders).status(200);
// };

// const findWilderById = async (req: Request, res: Response) => {
//     const userId = req.params.id;
//     const wilder = await WilderRepository.getWilderById(userId);
//     res.json(wilder).status(200);
// }

// const addWilder = async (req: Request, res: Response) => {
//     const {firstname, lastname, schoolId, skills, description} = req.body;
//     if(!firstname || !lastname) {
//         res.status(400).json({error: "Firstname and Lastname are required."})
//     } else {
//         const newWilder = await WilderRepository.createWilder(firstname, lastname, schoolId, skills, description);
//         res.status(201).send(newWilder);
//     }
// }

const modifyWilderById = async (req: Request, res: Response) => {
  const { id } = req.params
  const { firstname, lastname, description } = req.body
  const modifyWilder = await WilderRepository.putWilder(
    id,
    firstname,
    lastname,
    description,
  )
  res.status(200).json(modifyWilder)
}

const deleteWilderById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await WilderRepository.deleteWilder(id)
    res.json({ message: `Wilder ${id} has been deleted` })
  } catch {
    res.status(404).json({ error: 'this is an error' })
  }
}

const addSkills = async (req: Request, res: Response) => {
  const { id: wilderId } = req.params
  const { skillId } = req.body

  if (!skillId) {
    res.status(404).send({ error: 'Skill Id is required' })
  } else {
    try {
      const updatedWilder = await WilderRepository.addSkillsToWilder(
        wilderId,
        skillId,
      )
      res.json(updatedWilder).status(201)
    } catch (error) {
      res.status(404).json({ error: getErrorMessage(error) })
    }
  }
}

export {
  // findAllWilders,
  // addWilder,
  modifyWilderById,
  // findWilderById,
  deleteWilderById,
  addSkills,
}
