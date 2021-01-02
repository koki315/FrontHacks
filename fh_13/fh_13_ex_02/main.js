const tweets = [
  { 
    username: 'koki',
    text: 'kokidesu',
    replies :[
      {username: 'aさん', text: 'aaa'},
      {username: 'bさん', text: 'bbb'}
     ]
  },
  { 
    username: 'koki2',
    text: 'koki2desu',
    replies :[
        {username: 'cさん', text: 'ccc'},
        {username: 'dさん', text: 'ddd'}
    ]
  }
]


tweets.forEach((tweet, index) => {
  console.log('==================ツイート ' + index + '====================');
  console.log('ユーザー名 :' + tweet.username);
  console.log('ツイート :' + tweet.text);
  tweet.replies.forEach((reply, index) => {
    console.log('--------------------------------------');
    console.log('返信 :' + index);
    console.log('ユーザー名 :' + reply.username);
    console.log('ツイート :' + reply.text);
  })
});