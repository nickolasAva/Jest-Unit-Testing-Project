import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileComponent from './UserProfileComponent';

describe('The User Profile Component', () => {
    test('displays an error message if first name blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: '' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/First Name cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });

    //TODO: create test to check for last name blank
    test('displays an error message if last name is blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Nick' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: '' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'Nick@gmail.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'NicksPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'NicksPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Last Name cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for email blank
    test('displays an error message if email is blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Nick' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Avalos' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: '' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'NicksPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'NicksPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Email cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for email invalid
    test('displays an error message if email is invalid', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Nick' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Avalos' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'Nick' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'NicksPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'NicksPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Email is invalid/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for password blank
    test('displays an error message if password is blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Nick' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Avalos' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'Nick@gmail.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: '' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'NicksPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Password cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for password confirm blank
    test('displays an error message if password is confirmed blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Nick' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Avalos' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'Nick@gmail.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'NickPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: '' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Password Confirm cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for password and password confirm not matching
    test('displays an error message if password and password confirm is not matching', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Nick' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Avalos' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'Nick@gmail.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'NickPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'NickPassword2' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Passwords do not match/i);
        expect(errorMessage).toBeInTheDocument();
    });
    //TODO: create test to check for successful submission (check for Thank you message)
    test('displays a thank you message on successful submission', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: 'Nick' } });

        const lastNameInput = screen.getByLabelText('Last Name*');
        fireEvent.change(lastNameInput, { target: { value: 'Avalos' } });

        const emailInput = screen.getByLabelText('Email*');
        fireEvent.change(emailInput, { target: { value: 'Nick@gmail.com' } });

        const passwordInput = screen.getByLabelText('Password*');
        fireEvent.change(passwordInput, { target: { value: 'NicksPassword1' } });

        const passwordConfirmInput = screen.getByLabelText('Password Confirmation*');
        fireEvent.change(passwordConfirmInput, { target: { value: 'NicksPassword1' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/Thank you, Nick Avalos, for updating your profile!/i);
        expect(errorMessage).toBeInTheDocument();
    });



});
