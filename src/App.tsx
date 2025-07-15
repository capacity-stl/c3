import './App.css'
import { Grid, GridItem } from '../lib/main'

const DecoratedBox = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-dashed border-earth-200 bg-earth-100 p-4">
    {children}
  </div>
)

function App() {
  return (
    <div className="c3">
      <Grid templateColumns="2" gap="4">
        <>
          <GridItem colSpan={2}>
            <DecoratedBox>1</DecoratedBox>
          </GridItem>

          <DecoratedBox>2</DecoratedBox>
          <DecoratedBox>3</DecoratedBox>
          <DecoratedBox>4</DecoratedBox>
          <DecoratedBox>5</DecoratedBox>
        </>
      </Grid>
      <Grid templateColumns="3" gap="4" testId="grid-default">
        <>
          <DecoratedBox>Item 1</DecoratedBox>
          <DecoratedBox>Item 2</DecoratedBox>
          <DecoratedBox>Item 3</DecoratedBox>
          <DecoratedBox>Item 4</DecoratedBox>
          <DecoratedBox>Item 5</DecoratedBox>
          <DecoratedBox>Item 6</DecoratedBox>
        </>
      </Grid>
    </div>
  )
}

export default App
