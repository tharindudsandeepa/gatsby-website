import * as React from "react"
import { Link } from "gatsby"
import './Header.css'
import logo from '../../../public/static/images/logo-designcode.svg'


class Header extends React.Component{

  constructor(props){
    super(props)

    this.state={
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll=(event)=>{
    const scrollTop=window.pageYOffset

    if(scrollTop>50){
      this.setState({hasScrolled:true})
    }
    else{
      this.setState({hasScrolled:false})
    }
  }

  render(){
    return(
      <div className={this.state.hasScrolled ?'Header HeaderScrolled ':'Header'}>
        <div className="HeaderGroup">
            <Link to="/"><img src={logo} width="30" /></Link>
            <Link to="/courses">Courses</Link>
            <Link to="/downloads">Downloads</Link>
            <Link to="/workshops">Workshops</Link>
            <button>Buy</button>
        </div>
      </div>
    )
  }
}

export default Header;
  

