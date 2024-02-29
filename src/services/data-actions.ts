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
  country: z.string(),
  category: z.string(),
  title: z.string(),
  // provides conversion of value to number
  priceAuchan: z.coerce.number(),
  priceNovus: z.coerce.number(),
  priceSilpo: z.coerce.number(),
  priceATB: z.coerce.number(),
  description: z.string(),
  date: z.string(),
});

/* ----- FUND CAMPAIGNS ----- */

// separate scheme for creating Raiser, excluding id and date





// define schema to update Raiser excluding id and date
const UpdateRaiser = FormSchema.omit({ id:true, date:true });
export async function updateBeverage(id:number, formData:FormData) {
  // extract data after validation
  const {
    country, category, title, description,
    priceAuchan, priceNovus, priceSilpo, priceATB
  } = UpdateRaiser.parse({
    country: formData.get('country'),
    category: formData.get('category'),
    title: formData.get('title'),
    priceAuchan: formData.get('priceAuchan'),
    priceNovus: formData.get('priceNovus'),
    priceSilpo: formData.get('priceSilpo'),
    priceATB: formData.get('priceATB'),
    description: formData.get('description'),
  });
  // get current date in ISO format and separate time from date
  const date = new Date().toISOString().split('T')[0];
  // Log the data
  console.log(`this id: ${id}`);
  console.log(`update country: ${country}`);
  console.log(`update category: ${category}`);
  console.log('--- beverage ---');
  console.log(`update title: ${title}`);
  // Log data with 'none' if price is 0
  console.log(`update priceAuchan: ${priceAuchan === 0 ? 'none' : priceAuchan} on ${date}.`);
  console.log(`update priceNovus: ${priceNovus === 0 ? 'none' : priceNovus} on ${date}.`);
  console.log(`update priceSilpo: ${priceSilpo === 0 ? 'none' : priceSilpo} on ${date}.`);
  console.log(`update priceATB: ${priceATB === 0 ? 'none' : priceATB} on ${date}.`);
  console.log('--- description ---');
  console.log(`update text: ${description}`);
  // Simulate database operations
  console.log('Simulating database operations...');
  // to revalidate path and redirect to desired page
  revalidatePath('/categories/beverages');
  redirect('/categories/beverages');
}

