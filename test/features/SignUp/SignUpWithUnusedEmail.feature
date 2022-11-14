Feature: Sign Up

    Scenario Outline: Sign Up user with unused email   

        Given initializeWithoutCreatedUser
        When inputUsedEmail "<p.smota98@gmail.com>"
        And signUp
        Then SignUpError

    Examples:
        | email                     | status    |
        | p185853@dac.unicamp.br   | 200       |