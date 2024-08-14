import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Report extends Model {
  public id!: number;
  public description!: string;
  public coordinates!: string;
  public image!: string;
}

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
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "report",
  }
);

export default Report;
