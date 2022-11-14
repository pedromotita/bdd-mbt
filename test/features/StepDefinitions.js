const assert = require("assert");
const axios = require("axios")
const { Given, When, Then }  = require("cucumber");

const baseURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBoDJfWLCpgLQa821_6igi3GZUmtMWbzY"

Given('initializeWithCreatedUser', function () {
    const baseURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBoDJfWLCpgLQa821_6igi3GZUmtMWbzY"
});

Given('initializeWithoutCreatedUser', function () {
    const baseURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBoDJfWLCpgLQa821_6igi3GZUmtMWbzY"
});

Given('inputValidCredentials {string} {string}', function (email, password) {
    this.email = email
    this.password = password
});

Given('inputInvalidCredentials {string} {string}', function (email, password) {
    this.email = email
    this.password = password
});

When('inputUsedEmail {string}', function (email) {
    this.email = email
    this.password = "123456"
});

When('inputUnusedEmail {string}', function (email) {
    this.email = email
    this.password = "123456"
});

When('login', async function () {
    try {
        this.response = await axios.post(baseURL, {
            email: this.email,
            password: this.password,
            returnSecureToken: false,
        })
    } catch (error) {
        this.error = error.response.data
    }
});

When('signUp', async function () {
    try {
        this.response = await axios.post(baseURL, {
            email: this.email,
            password: this.password,
            returnSecureToken: false,
        })
    } catch (error) {
        this.error = error.response.data
    }
});

Then('LoginSuccess', function () {
    assert.strictEqual(`${this.response.status}`, "200")
});

Then('LoginError', function () {
    assert.strictEqual(`${this.error.error.code}`, "400")
});

Then('SignUpSuccess', function () {
    assert.strictEqual(`${this.response.status}`, "200")
});

Then('SignUpError', function () {
    assert.strictEqual(`${this.error.error.code}`, "400")
});

