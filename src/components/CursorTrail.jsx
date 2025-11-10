import React, { Component } from 'react';
import './CursorTrail.css';

class CursorTrail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbles: []
    };
    this.lastTime = 0;
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (e) => {
    const now = Date.now();
    // Throttle to create bubbles every 50ms for better performance
    if (now - this.lastTime < 50) return;
    this.lastTime = now;

    // Create a new bubble at mouse position
    const newBubble = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };

    // Limit to 15 bubbles max for performance
    this.setState((prevState) => {
      const updated = [...prevState.bubbles, newBubble];
      return { bubbles: updated.slice(-15) };
    });

    // Remove bubble after 1 second
    setTimeout(() => {
      this.setState((prevState) => ({
        bubbles: prevState.bubbles.filter((bubble) => bubble.id !== newBubble.id)
      }));
    }, 1000);
  }

  render() {
    const { bubbles } = this.state;
    
    return (
      <div className="cursor-trail-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="cursor-bubble"
            style={{
              left: `${bubble.x}px`,
              top: `${bubble.y}px`,
            }}
          />
        ))}
      </div>
    );
  }
}

export default CursorTrail;

