const db = require("../config/dbConfig");

const locations = async (req: any, res: any) => {
  try {
    const { rows } = await db.query("SELECT * FROM locations");
    return res.status(200).send(rows);
  } catch (error: any) {
    console.log(error.message);
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

// select latitude , longitude,  array_agg(jsonb_build_object('brand', brand, 'user',user_count)) as position_table from crowd_point group by  longitude , latitude;

const crowdPoint = async (req: any, res: any) => {
  try {
    const { rows } = await db.query(
      "select longitude , latitude , brand, '2021-10-20 07:00:00 to 2021-10-20 08:00:00' as range ,count(brand) as user_per_brand, sum(user_count)::integer as total_user from crowd_point cp where time >= '2021-10-20 07:00:00' AND time <  '2021-10-20 09:00:00' group by brand, longitude, latitude ORDER BY longitude;"
    );
    return res.status(200).send(rows);
  } catch (error: any) {
    console.log(error.message);
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export { locations, crowdPoint };
