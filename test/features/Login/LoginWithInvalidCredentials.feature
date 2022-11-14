Feature: Login with email and password
    
    Scenario Outline: Login registered user with email and password
    
        Given initializeWithCreatedUser
        When inputInvalidCredentials "<email>" "<password>"
        And login
        Then LoginError

    Examples:
        | email                 | password          | status    |
        | p.smota98@gmail.com   | 12345             | 400       |