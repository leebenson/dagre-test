import React from 'react';
import ReactDOM from 'react-dom';
import {Graph, Vertex, Edge} from 'dagre-react';

const Example = React.createClass({
  render: function () {
    const arrow = `<marker id="markerArrow" markerWidth="6" markerHeight="4" refx='5' refy="2" orient="auto"><path d='M 0,0 V 4 L6,2 Z' class="arrow" /></marker>`;

    const toVertex = function (name) {
      return (
          <Vertex width={50} height={50} key={name}>
            <rect width={50} height={50} />
            <text>
              {name}
            </text>
          </Vertex>
      );
    };

    return (
      <svg width='200' height='200'>
        <defs dangerouslySetInnerHTML={{ __html: arrow }} />
        <Graph className='graph'>
          {['bar', 'baz'].map(toVertex)}
          <Vertex width={70} height={30} key={'foo'} className='foo'>
            <rect width={70} height={30} />
            <text>{'foo'}</text>
          </Vertex>
          <Edge markerEnd='url(#markerArrow)' source='foo' target='baz' />
          <Edge source='bar' target='baz' />
        </Graph>
      </svg>
    );
  }
});

ReactDOM.render(<Example/>, document.getElementById('main'));
