import logo from './onesignal.jpeg';
import './App.css';
import OneSignal from 'react-onesignal';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "a3553842-d724-4438-a6aa-46a4d4eea863"
    });
  }, []);

  const onHandleTag = (tag) => {
    console.log('Tagging');
    OneSignal.sendTag("tech", tag).then(() => {
      console.log("Sent tag: " + tag);
    });
  }
  
  return (
    <div className="App">
    
        <img src={logo} />
        <p>
         This is Xinjuan's onesignal testing react app!!!
        </p>

        <div >
        <button className="btn btn--react" onClick={()=>onHandleTag('react')}>ReactJS</button>
        <button className="btn btn--angular" onClick={()=>onHandleTag('angular')}>Angular</button>
        <button className="btn btn--vue" onClick={()=>onHandleTag('vue')}>Vue</button>
      </div>
   
    </div>
  );
}

export default App;
