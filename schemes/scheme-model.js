const db = require("../data/dbConfig.js");

const find = () => {
  return db.select("*").from("schemes");
};

const findById = id => {
  return db("schemes")
    .where({ id })
    .first();
};

const findSteps = id => {
  return db("steps as s")
    .select("s.id", "s.step_number", "s.instructions")
    .join("schemes as sch", "s.scheme_id", "sch.id")
    .where("s.scheme_id", "=", id)
    .orderBy("s.step_number");
};

module.exports = {
  find,
  findById,
  findSteps
  // add,
  // update,
  // remove
};
