import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from "../ultis/convertHourToMinutes"

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}

export default class ClassesControllers {
  async index(req: Request, res: Response) {
    const filters = req.query;

    const subject = filters.subject as string
    const week_day = filters.week_day as string
    const time = filters.time as string

    if (!week_day || !subject || !time) {
      return res.status(400).json({
        error: "Missing filters to serach classes"
      })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    res.json(classes)
  }

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body

    const trx = await db.transaction()

    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      })
    
      const user_id = insertedUsersIds[0]
    
      const insertedClassesIds =  await trx('classes').insert({
        subject,
        cost,
        user_id
      })

      const class_id = insertedClassesIds[0]

      const classSchedule = schedule.map((ScheduleItem: ScheduleItem) => {
        return {
          week_day: ScheduleItem.week_day,
          from: convertHourToMinutes(ScheduleItem.from),
          to: convertHourToMinutes(ScheduleItem.to),
          class_id
        }
      })

      await trx('class_schedule').insert(classSchedule)
    
      await trx.commit()
    
      return res.status(201).send()
    } catch (error) {

      await trx.rollback()

      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }
}