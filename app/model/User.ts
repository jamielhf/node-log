export default (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    username: { type: String  },
    password: { type: String  },
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
    },
  },
  { timestamps: true },
);

  return mongoose.model('User', userSchema);
};
