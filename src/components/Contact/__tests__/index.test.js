import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
      render(<ContactForm
        
      />);
    });
  
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm
            
            />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('contact-me')).toHaveTextContent('Contact Me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
})