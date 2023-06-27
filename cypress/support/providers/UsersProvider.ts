/// <reference types="cypress" />
import User from '../business/User'
import { faker } from '@faker-js/faker';
export const generateUserNotSet = () =>{
    return [
        {
        user : new User("",
            faker.person.lastName(),         
            faker.internet.email(),
            faker.internet.password()),
        error : "First Name is required",
        type : "First Name"
        },
        {
        user : new User(
            faker.person.firstName(),
            "",
            faker.internet.email(),
            faker.internet.password()),
        error : "Last Name is required",
        type : "Last Name"
        },
        {
        user : new User(
            faker.person.firstName(),
            faker.person.lastName(),
            "",
            faker.internet.password()),
        error : "Email is required",
        type: "Email"
        },
        {
            user : new User(
                faker.person.firstName(),
                faker.person.lastName(),
                faker.internet.email(),
                ""),
            error : "Password is required",
            type: "Password"
        },
        {
            user : new User(
                "",
                "",
                "",
                ""),
            error : "First Name, Last Name, Email, Password are required, ",
            type: "All"
            },
        ]
    }
export const generateUser = (): User => {
    return new User(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.email(),
            faker.internet.password())
    
}
export const generateUserPasswordLessThenMin = (): User => {
    return new User(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.internet.email(),
            faker.internet.password(6))
    }
export const generateUserEmailNotValid = (): User => {
        return new User(
                faker.person.firstName(),
                faker.person.lastName(),
                faker.internet.userName(),
                faker.internet.password())
        }