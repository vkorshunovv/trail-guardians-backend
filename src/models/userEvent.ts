import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import User from "./user";
import Event from "./event";

class UserEvent extends Model {
  public userId!: number;
  public eventId!: number;
}

UserEvent.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    eventId: {
      type: DataTypes.INTEGER,
      references: {
        model: Event,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "user_events",
    timestamps: false,
  }
);

User.belongsToMany(Event, {
  through: UserEvent,
  foreignKey: "userId",
  as: "joinedEvents",
});
Event.belongsToMany(User, {
  through: UserEvent,
  foreignKey: "eventId",
  as: "participants",
});

export default UserEvent;
