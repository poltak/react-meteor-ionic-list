if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    username: 'samcorcos',
    password: 'password',
    profile: {
      image: 'http://i.imgur.com/NqyBZSp.gif',
    },
  });
}

if (MyData.find().count() === 0) {
  _.each(_.range(25), () => {
    MyData.insert({
      name:   faker.name.findName(),
      email:  faker.internet.email(),
      avatar: faker.image.avatar(),
    });
  });
}