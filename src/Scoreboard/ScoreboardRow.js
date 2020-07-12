import React from 'react'

export default class ScoreboardRow extends React.Component {

  constructor(props) {
    super(props);
    this.rowRef = React.createRef();
  }

  componentDidMount() {
    if(this.props.submittedPlayer === this.props.score.name ) {
      this.scrollToHighlightTimeout = setTimeout(() => { this.rowRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' }) }, 250)
    }
  }

  componentWillUnmount(){
    clearTimeout(this.scrollToHighlightTimeout)
  }

  render(){
    return(
      <>
        <div
          className={ this.props.submittedPlayer === this.props.score.name ? "highlighted" : "scoreboard_sub_row" }
          ref={ this.rowRef }
        >
          <div className='scoreboard_sub_row_place'>
            { this.props.place }
          </div>
          <div className='scoreboard_sub_row_name'>
            { this.props.score.name }
          </div>
            <div className="scoreboard_sub_row_power">
              <meter value={ this.props.score.power_level } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0"></meter>
              <span>{ (this.props.score.power_percent).toFixed(2) }%</span>
            </div>
          <div className='scoreboard_sub_row_score'>
            { this.props.score.score }
          </div>
        </div>
      </>
    )
  }
}
