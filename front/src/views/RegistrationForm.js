import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin: auto;
  margin-top: 4rem;
  flex-direction: column;
  width: 18.75rem;
  padding: 1.25rem;
  border: .0625rem solid #ccc;
  border-radius: .3125rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-size: .875rem;
  font-weight: bold;
  color: #ccc;;
  margin-bottom: .3125rem;
`;

export const Input = styled.input`
  border: .0625rem solid #ccc;
  border-radius: .3125rem;
  padding: .625rem;
  font-size: 1rem;
  margin-bottom: .625rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    box-shadow: 0 0 .3125rem rgba(0, 123, 255, 0.5);
  }
`;

export const Select = styled.select`
  border: .0625rem solid #ccc;
  border-radius: .3125rem;
  padding: .625rem;
  font-size: 1rem;
  margin-bottom: .625rem;
`;

export const ErrorMessage = styled.p`
  font-size: .75rem;
  color: red;
  margin-top: .3125rem;
`;

export const Button = styled.button`
  background-color: gold;
  color: #333;
  border: none;
  border-radius: .3125rem;
  padding: .625rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0b90f;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color:  #4a86e8;
  font-size: 2rem;
  margin-bottom: 1.25rem;
  animation: pulse 3s ease-in-out infinite;
  @keyframes pulse {
    0% {
        text-shadow: 0rem .3125rem .625rem #17ef10 ;
        
    }
    50% {
        text-shadow: 0rem .625rem 1.25rem #efb810 ;
    }
    100% {
        text-shadow: 0rem .3125rem .625rem #10e8ef ;
    }
`;

export const BirthdateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;
