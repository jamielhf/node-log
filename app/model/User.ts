export default (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createTime: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: String,
    },
    headUrl: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

  return mongoose.model('User', userSchema);
};
