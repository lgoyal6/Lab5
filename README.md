# Lab 5 - Laksh Goyal
## Check your understanding

1. I would not use a unit test to test the full “message” feature because sending a message involves multiple parts working together, such as the input box, send button, server/database, and another user receiving it. That is better tested with integration or end-to-end testing.

2. I would use a unit test to test the “max message length” feature because it is one small isolated rule. We can directly test whether messages over 80 characters are rejected and messages under 80 characters are allowed.
