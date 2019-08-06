# jest-winston-console-issue
Sample repo exhibiting the issue with Winston stdout logging 

#clone repo

npm i

npm test

#Notice the below output contains wrong filename/linenumber for winston logger compared to console logger

 FAIL  __tests__/index2.test.js
  ● Console

    console.log __tests__/index2.test.js:15
      Console - I logged something too
    console.log node_modules/winston/lib/winston/transports/console.js:79
      {"message":"Winston - I logged something too","level":"info"}
