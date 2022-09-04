const express = require("express");
const router = express.Router();

const Patients = require("../P_models/PatientsSchema");

router.post("/form", async (req, res) => {
  console.log(req.body);
  const { name, age, Address, mobile, gender, date } = req.body;

  if (!name || !age || !Address || !mobile || !gender || !date) {
    res.status(422).json("plz fill the data");
  }

  try {
    const prepatient = await Patients.findOne({ mobile: mobile });
    console.log(prepatient);

    if (prepatient) {
      res.status(422).json("this Patient is already present");
    } else {
      const addpatient = new Patients({
        name,
        age,
        Address,
        mobile,
        gender,
        date,
      });

      await addpatient.save();
      res.status(201).json(addpatient);
      console.log(addpatient);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});
module.exports = router;
