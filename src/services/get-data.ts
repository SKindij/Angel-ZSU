// @/services/get-data.ts
import { unstable_noStore as noStore } from 'next/cache';
// function allows you to make queries to the database
import { sql } from '@vercel/postgres';

import { FundRaisingVariation } from '@/models/types';
import {IFundRaising} from '@/models/interfaces';

/* ----- FUND CAMPAIGNS  ----- */
// Function to get all Collect Cards Info
export async function fetchAllFundRaiserData():Promise<IFundRaising[]> {
  noStore(); // this prevent response from being cached
  try {
    console.log('Fetching Collect Cards Info...');
    const raiserData = await sql<IFundRaising>`
      -- choose the data we need
      SELECT 
        fr.fr_id AS id,
        fr.fr_is_actual AS isActual,
        fr.fr_purpose AS purpose,
        fr.fr_info AS info,
        fr.fr_value AS value,
        fr.request_video_url AS requestVideoUrl,
        fr.report_video_url AS reportVideoUrl,
        frv.frv_id AS variation_id,
        frv.frv_type AS variation
      FROM 
        fund_raising_cards fr
      -- combine data table with fields of other tables
      JOIN 
        fund_raising_variation frv ON fr.variation_id = frv.frv_id
      -- sort received data rows
      ORDER BY 
        fr.fr_id DESC;
    `;
    console.log('Raiser Data fetch completed.');
    console.log(raiserData.rows[0]);

    return raiserData.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Raiser Data.');
  }
};





/* -----  ----- */
