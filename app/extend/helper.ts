// app/extend/helper.js
module.exports = {
  /**
   * 返回一个随机唯一的id
   */
  getRandomId(): string {
    return (new Date()).getTime().toString(16) + Math.random().toString(16).substr(2, 20);
  },
};
