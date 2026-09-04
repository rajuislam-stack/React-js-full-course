import Heading from "./Heading";
import Section from "./Section";
import { LevelContext} from "../contexts/LevelContext";

export default function Page() {
  
  return (
     <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
    </Section>
  )
}


//Following 3 steps you can migrate from Passing props to Context API


//Step-1: Create the Context

//Step-2: Use the Context

//Step-3: Provide the Context
