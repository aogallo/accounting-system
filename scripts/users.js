const { UserModel } = require('../models/index')
const bcrypt = require('bcrypt')
const users = require('./placeholder-data')

async function seedUsers() {
  try {
    const newUsers = users.map(async (user) => ({
      ...user,
      password: await bcrypt.hash(user.password, 10),
    }))

    await UserModel.create(newUsers)
  } catch (error) {
    console.error('Seed users:', error)
  }
}

seedUsers().then(() => console.log('Users are seeded'))
