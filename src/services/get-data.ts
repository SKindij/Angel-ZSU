// @/services/get-data.ts
import {IFundRaising} from '@/models/interfaces';
// function allows to make queries to database
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

/* ----- FUND CAMPAIGNS  ----- */
export async function fetchAllFundRaiserData():Promise<IFundRaising[]> {
  try {
    console.log('Fetching Fund Raising Info...');
    const raisersData = await sql<IFundRaising>`
      -- choose the data we need
      SELECT 
        fri.id, frt.type AS variation, 
		    fri.is_actual,
		    fri.purpose, fri.info, fri.value,
        fri.request_video_url,
        fri.report_video_url,
        fri.monobanka
      FROM 
        fund_raising_info fri
      -- combine data table with fields of other table
      JOIN 
        fund_raising_types frt ON fri.type_id = frt.id
      -- sort received data rows
      ORDER BY 
        fri.id DESC;
    `;
    // checking form of received data
    console.log('Raiser Data fetch completed.');
    console.log(`Number of raws: ${raisersData.rows.length}`);
    return raisersData.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Raiser Data.');
  }
};

export async function fetchFundRaiserById(id:number) {
  // this prevent response from being cached
  noStore(); // equivalent to fetch(..., {cache: 'no-store'})
  try {
    // execute SQL query to receive fee for its id
    const raiserData = await sql<IFundRaising>`
      -- choose the data we need
      SELECT 
        fri.id, frt.type AS variation, 
        fri.is_actual,
        fri.purpose, fri.info, fri.value,
        fri.request_video_url,
        fri.report_video_url,
        fri.monobanka
      FROM 
        fund_raising_info fri
      -- combine data table with fields of other table
      JOIN 
        fund_raising_types frt ON fri.type_id = frt.id
      WHERE fri.id = ${id};
    `;
    return raiserData.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch raiser.');
  }
}

export async function fetchRaiserTypes():Promise<string[]> {
  // this prevent response from being cached
  noStore(); // equivalent to fetch(..., {cache: 'no-store'})
  try {
    console.log('Fetching raiser types...');
    const data = await sql`SELECT type FROM fund_raising_types;`;
    // extract type names from rows
    const raisingTypes = data.rows.map( (row) => row.type );
    console.log(`Number of types: ${raisingTypes.length}`); // => 5
    return raisingTypes;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch type names.');
  }
}



/* -----  ----- */

