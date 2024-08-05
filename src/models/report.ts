import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Report extends Model {}

Report.init(
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coordinates: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "report",
  }
);

export default Report;
