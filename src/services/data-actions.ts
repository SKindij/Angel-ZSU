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
  isActual: z.boolean(),
  variation: z.string(),
  purpose: z.string(),
  info: z.string(),
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
  // extract data after validation
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
  // get current date in ISO format and separate time from date
  const date = new Date().toISOString().split('T')[0];
  // Log the data
  console.log(`this id: ${id}`);
  console.log(`isActual: ${isActual}`);
  console.log(`variation: ${variation}`);
  console.log(`purpose: ${purpose}`);
  console.log(`info: ${info}`);
  console.log(`value: ${value}`);
  console.log(`requestVideo: ${requestVideo}`);
  console.log(`reportVideo: ${reportVideo}`);
  console.log(`monobanka: ${monobanka}`);
  console.log(`date: ${date}`);
  // Simulate database operations
  console.log('Simulating database operations...');
  // to revalidate path and redirect to desired page
  revalidatePath('/admin');
  redirect('/admin');
}

// separate scheme for creating Raiser, excluding id and date





