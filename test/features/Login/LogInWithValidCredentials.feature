Feature: Login with email and password
    
    Scenario Outline: Login registered user with email and password
    
        Given initializeWithCreatedUser
        When inputValidCredentials "<email>" "<password>"
        And login
        Then LoginSuccess

    Examples:
        | email                 | password          | status    |
        | p.smota98@gmail.com   | 123456            | 200       |