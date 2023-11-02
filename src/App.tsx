import React from 'react'
import ExampleSingleton from './Creational/Singleton/ExampleSingleton'
import ConcretePrototype from './Creational/Prototype';
import ExamplePrototype from './Creational/Prototype/ExamplePrototype';
import ExampleFactory from './Creational/Factory Method/ExampleFactory';
import ExampleCor from './Behavioral/Chain of Responsibility/ExampleCor';

function App() {


  // Creational Patterm
  
  // 1. Singlton
  // ExampleSingleton()

  //2. Prototype 
  // ExamplePrototype()

  //3. Factory
  // return <ExampleFactory/>

  //4. Builder 
  // ExampleSingleton()

  // Behavioral 

  //1.Chain Of Responsibilty
  return ExampleCor()
  return (
    <div>
       React.js Design Pattern With Real Example  
    </div>
  )
}

export default App