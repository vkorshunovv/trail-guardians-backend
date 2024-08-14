import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Event extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public date!: Date;
  public coordinates!: string;
  public volunteersNeeded!: number;
}

Event.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    coordinates: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    volunteersNeeded: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    volunteersSignedUp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: "event",
  }
);

export default Event;
