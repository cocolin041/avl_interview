import React, { Component } from 'react'
import questionImage from '../images/sample.jpg';  
import '../styles/mainPage.scss'

class MainPage extends Component {
	constructor() {
		super()
		this.state = {
			comments: []
		}
	}
        
	// handleSubmitComment(comment) {
	// 	let comments = this.state.comments
	// 	comments.push(comment)
	// 	this.setState({comments: comments})
	// }

  render () {
    return (
			<div className='wrapper'>
				<div className='side-section'>

        </div>

        <div className='main-section'>
					<div className='simple-filters'>
						<select id="topic">
							<option value="All Topics">All Topics</option>
							<option value="Algebra">Algebra</option>
							<option value="Geometry">Geometry</option>
							<option value="Trignometry">Trignometry</option>
							<option value="Arithmetic">Arithmetic</option>
						</select>
					</div>
          <div className='problems'>
						<div>Algebra Real Problem</div>
						<div className='description'>
						Algebra (from Arabic: الجبر‎ (al-jabr, meaning "reunion of broken parts"[1] and "bonesetting"[2]) is one of the broad parts of mathematics, together with number theory, 
						geometry and analysis. In its most general form, algebra is the study of mathematical symbols and the rules for manipulating these symbols;[3] it is a unifying thread 
						of almost all of mathematics.[4] It includes everything from elementary equation solving to the study of abstractions such as groups, rings, and fields. The more basic 
						parts of algebra are called elementary algebra; the more abstract parts are called abstract algebra or modern algebra. Elementary algebra is generally considered to be 
						essential for any study of mathematics, science, or engineering, as well as such applications as medicine and economics. Abstract algebra is a major area in advanced 
						mathematics, studied primarily by professional mathematicians. Elementary algebra differs from arithmetic in the use of abstractions, such as using letters to stand for 
						is a constant, the speed of light in a vacuum. Algebra gives methods for writing formulas and solving equations that are much clearer and easier than the older method of 
						writing everything out in words.
						</div>
						<div className='image'>
							<img src={questionImage} alt="sample question" />
						</div>
            
          </div>

        </div>

				
			</div>
    )
  }
}

export default MainPage
