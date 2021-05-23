# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? 1. within a Github action that runs whenever code is pushed

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
I would use a unit test to test the "message" feature of a messaging application. We would use this test because we need to check if the message send and recieve is the same in both ends, which is a very important part of the feature, being about to sent and recieve a same message.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
I would use a unit test to test this "max message length" feature. This feature should hbe tested because if the limit gets exceed, not eveything could be sent in the messaging application.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
If we run the puppeteer tests with the field "headless" set to true we will not see the browser UI, when running our tests.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case? If we want to start at the settings page before every test case we need to click on settings button, so we need to add the code: await page.click('header > img'); in order to click the settings.

