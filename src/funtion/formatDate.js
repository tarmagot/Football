import _ from "lodash";

const Big = require("big.js");

class formatDate {
  YYYYMMDD = (val) => {
    var date = new Date(val),
      d = date.getDate(),
      m = date.getMonth() + 1,
      y = date.getFullYear();
    return `${
      y + "-" + `${m < 10 ? "0" + m : m}` + "-" + `${d < 10 ? "0" + d : d}`
    }`;
  };

  FormatPlusDate = (val, year, month, day) => {
    console.log("plus date:", val, "y", year, "m", month, "dat", day);
    var date = new Date(val);
    if (!_.isNil(day)) date.setDate(date.getDate() + day);
    if (!_.isNil(month)) date.setMonth(date.getMonth() + month);
    if (!_.isNil(year)) date.FullYear(date.getFullYear() + year);
    let d = date.getDate(),
      m = date.getMonth() + 1,
      y = date.getFullYear();

    return `${
      y + "-" + `${m < 10 ? "0" + m : m}` + "-" + `${d < 10 ? "0" + d : d}`
    }`;
  };
}

export default new formatDate();
