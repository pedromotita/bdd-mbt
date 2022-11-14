Feature: Sign Up

    Scenario Outline: Sign Up user with used email

        Given initializeWithoutCreatedUser
        When inputUsedEmail "<p.smota98@gmail.com>"
        And signUp
        Then SignUpError

    Examples:
        | email                 | status    |
        | p.smota98@gmail.com   | 400       |