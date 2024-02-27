// @/services/get-data.ts
import { sql } from '@vercel/postgres';

import {IFundRaising} from '@/models/interfaces';

/* ----- FUND CAMPAIGNS  ----- */
export async function fetchAllFundRaiserData():Promise<IFundRaising[]> {
  try {
    console.log('Fetching Fund Raising Info...');
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
      -- sort received data rows
      ORDER BY 
        fri.id DESC;
    `;
    // checking form of received data
    console.log('Raiser Data fetch completed.');
    console.log(`Number of raws: ${raiserData.rows.length}`);
    return raiserData.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Raiser Data.');
  }
};





/* -----  ----- */
