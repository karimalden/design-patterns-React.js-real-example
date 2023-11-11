

interface ObserverType {key:string , fetch:(() => void)}


class ObserverGetRequest {

  
  private  observers: ObserverType[] = [];

  constructor(obs:ObserverType[] = []){
    this.observers = obs  ; 
  }

   addObserver (observer:ObserverType )  {
    this.observers.push(observer);
  };

  // Method to remove an observer from the list
   removeObserver  ()  {
    this.observers.pop();
  };

  // Method to notify all observers
   notifyObservers  (key:string )  {
    this.observers.forEach((observer:ObserverType) => {
      if(observer.key === key){
        observer.fetch()
      }
    });
  };

}