// @/services/data-actions.ts
'use server';
// to determine the schema of the form object and validate its data
import { z } from 'zod';
// to work with the PostgreSQL database
import { sql } from '@vercel/postgres';
// to update the cache after changes in the database
import { revalidatePath } from 'next/cache';
// to redirect to the desired page
import { redirect } from 'next/navigation';


/* ----- shape scheme definition using zod ----- */
const FormSchema = z.object({
  id: z.string(),
  // provides conversion of value to boolean
  isActual: z.coerce.boolean(),
  // check that value is one of the given list
  variation: z.enum(['for car', 'for drone', 'for medicine', 'for equipment', 'for another']),
  purpose: z.string(),
  info: z.string(),
  // provides conversion of value to number
  value: z.coerce.number(),
  requestVideo: z.string(),
  reportVideo: z.string(),
  monobanka: z.string(),
  date: z.string(),
});

/* ----- FUND CAMPAIGNS ----- */
// define schema to update Raiser excluding id and date
const UpdateRaiser = FormSchema.omit({ id:true, date:true });
export async function updateRaiser(id:number, formData:FormData) {
  if (!formData) {
    console.error('Form data is empty');
    return;
  }
  // extract data with validation
  const {
    isActual, variation, purpose, info,
    value, requestVideo, reportVideo, monobanka
  } = UpdateRaiser.parse({
    isActual: formData.get('isActual'),
    variation: formData.get('variation'),
    purpose: formData.get('purpose'),
    info: formData.get('info'),
    value: formData.get('value'),
    requestVideo: formData.get('requestVideo'),
    reportVideo: formData.get('reportVideo'),
    monobanka: formData.get('monobanka'),
  });
  // use sql query to update the database
  await sql`
      UPDATE fund_raising_info
      SET is_actual = ${isActual},
          type_id = (SELECT id FROM fund_raising_types WHERE type = ${variation}),
          purpose = ${purpose}, info = ${info}, value = ${value},
          request_video_url = ${requestVideo},
          report_video_url = ${reportVideo},
          monobanka = ${monobanka},
          last_updated = CURRENT_TIMESTAMP
      WHERE id = ${id};
    `;
  console.log('Raiser Info updated successfully in database');
  // to revalidate path and redirect to desired page
  revalidatePath('/admin');
  redirect('/admin');
}

// separate scheme for creating Raiser, excluding id and date
const CreateRaiser = FormSchema.omit({ id:true, date:true });
// adds data about the new raiser to the database
export async function createRaiser(formData:FormData) {
  if (!formData) {
    console.error('Form data is empty');
    return;
  }
  // extract data after validation
  const {
    isActual, variation, purpose, info,
    value, requestVideo, reportVideo, monobanka
  } = CreateRaiser.parse({
    isActual: formData.get('isActual'),
    variation: formData.get('variation'),
    purpose: formData.get('purpose'),
    info: formData.get('info'),
    value: formData.get('value'),
    requestVideo: formData.get('requestVideo'),
    reportVideo: formData.get('reportVideo'),
    monobanka: formData.get('monobanka')
  });
  // use sql query to insert new collection into database
  await sql`
    INSERT INTO fund_raising_info (
      is_actual, type_id, purpose, info, value, 
      request_video_url, report_video_url, monobanka,
      last_updated
    ) VALUES (
      ${isActual}, 
      (SELECT id FROM fund_raising_types WHERE type = ${variation}), 
      ${purpose}, ${info}, ${value},
      ${requestVideo}, ${reportVideo}, ${monobanka},
      CURRENT_TIMESTAMP
    )
  `;
  console.log('Raiser created successfully in database');
  // to revalidate path and redirect to desired page
  revalidatePath('/admin');
  redirect('/admin');
}

// to delete fundraiser card from database by id
export async function deleteRaiser(id:number) {
  // execute SQL query to delete fundraiser card
  await sql`
    DELETE FROM fund_raising_info
    WHERE id = ${id}
  `;
  console.log('Fundraiser card deleted successfully from the database');
  // initiates new request to server and recreates table
  revalidatePath('/admin');
  redirect('/admin');
}
