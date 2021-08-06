import pool from '@/lib/postgresPool';

export default async function handler(req, res) {
  const queryGetViews = {
    text: 'SELECT * FROM views WHERE slug = $1;',
    values: [req.query.slug],
  };
  const queryUpdateViews = {
    text: 'UPDATE views SET count = count + 1 WHERE slug = $1;',
    values: [req.query.slug],
  };
  const queryInsertViews = {
    text: 'INSERT INTO views (slug, count) VALUES ($1, 0);',
    values: [req.query.slug],
  };

  //   const client = await pool.connect();

  try {
    const data = await pool.query(queryGetViews);

    if (req.method === 'POST') {
      // if there are no views for this slug yet!
      if (data.rows.length === 0) {
        await pool.query(queryInsertViews);
        // client.release();
        return res.status(200).json({
          // one view made as well as an entry in the DB
          total: 1,
        });
      } else {
        await pool.query(queryUpdateViews);
        // client.release();
        return res.status(200).json({
          total: data.rows[0].count + 1,
        });
      }
    }

    if (req.method === 'GET') {
      //   client.release();
      return res.status(200).json({ total: data.rows[0].count });
    }
  } catch (e) {
    // client.release();
    return res.status(500).json({ message: e.message });
  }
}
