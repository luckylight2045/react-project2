import React from 'react'
import './App.css';
import Header from './Header/Header.js'
import Feature from './Feature/Feature.js'
import Quality from './Quality/Quality.js'
import Test from './Test/Test.js'
import ContentContainer from './Content/ContentContainer/ContentContainer.js';
import TeamContainer from './Team/TeamContainer.js';
import Footer from './Footer/Footer.js'

class App extends React.Component {
  
  
  
  constructor(props) {
    super(props)
    this.state = {
      feature:[
        {icon:"bi bi-magic",title:"طراحی خلاقانه"},
        {icon:"bi bi-speedometer",title:"پشتیبانی رایگان"},
        {icon:"bi bi-gem",title:"طراحی اختصاصی"}
      ],
      icons:[
        {icon:'bi bi-briefcase'},
        {icon:'bi bi-cloud-drizzle'},
        {icon:'bi bi-cup'},
        {icon:'bi bi-grid'},
        {icon:'bi bi-lightning'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="feature-container">
          <Feature {...this.state.feature[0]}></Feature>
          <Feature {...this.state.feature[1]}></Feature>
          <Feature {...this.state.feature[2]}></Feature>
        </div>
        <ContentContainer/>
        <Test>
          <Quality {...this.state.icons[0]}/>
          <Quality {...this.state.icons[1]}/>
          <Quality {...this.state.icons[2]}/>
          <Quality {...this.state.icons[3]}/>
          <Quality {...this.state.icons[4]}/>
          <Quality/>
        </Test>
        <TeamContainer/>
        <Footer/>
      </div>
    );

  }
}

export default App;
