export default (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const authorizationSchema = new Schema({
    provider: {
      type: String,
      require: true,
    },
    uid: {
      type: String,
      require: true,
      unique: true,
    },
    userId: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true },
);
  return mongoose.model('Authorization', authorizationSchema);
};
