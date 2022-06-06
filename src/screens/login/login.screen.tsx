import { Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react"
import { Error, Input, Wrapper } from "./login.styled"
import * as yup from 'yup';
import Button from "../../components/button/button";

export default function Form() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = useCallback(
    ({target}: any) => {
      setData(prevData => ({
        ...prevData,
        [target.name]: target.value
      }))
    },
    [setData]
  )

  const handleSend = useCallback(
    async () => {
      try {
        const schema = yup.object().shape({
          email: yup.string().required().email(),
          password: yup.string().required()
        })

        await schema.validate(data);

        setError('');

      } catch (error: any) {
        setError(error.errors[0]);
      }
    },
    [data]
  )

  // useEffect(
  //   () => {console.log(data)},
  //   [data]
  // );

  return (
    <Wrapper container justifyContent='center' alignContent='center'>
      <Grid item xs={2}>
        <Input 
          type="email" 
          name="email" 
          onChange={handleChange} 
          placeholder="E-mail"
        />
        <Input 
          type="password" 
          name="password" 
          onChange={handleChange}
          placeholder="Senha"
        />
        {error && (
          <Error>{error}</Error>
        )}
        <Button onClick={handleSend}>Entrar</Button>
      </Grid>
    </Wrapper>
  )
}