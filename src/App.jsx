import { DarkLight, ThemeProvider } from "./hooks/ContextAPI/DarkLight"



export const App = () =>{
  return(
    <>
    <ThemeProvider>
      <DarkLight />
    </ThemeProvider>
   
    </>
  )
}