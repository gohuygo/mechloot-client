import React from 'react';

class CssDebugger extends React.Component {
  render() {
    const isProduction = process.env.NODE_ENV === 'production'
    return (
      <div>
        { !isProduction ?
          <div>
            <span className="visible-xs">SIZE XS</span>
            <span className="visible-sm">SIZE SM</span>
            <span className="visible-md">SIZE MD</span>
            <span className="visible-lg">SIZE LG</span>
          </div>
          : ''}
      </div>
    )
  }
}

export default CssDebugger