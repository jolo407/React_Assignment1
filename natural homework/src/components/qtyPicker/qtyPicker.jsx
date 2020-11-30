import React, { Component } from 'react';
import "./qtyPicker.css";

class QtyPicker extends Component {
     render() { 
        return ( 
            <div className="qtyPicker">
                <button>-</button>
                <label>1</label>
                <button>+</button>
            </div>
         );
    }
}
 
export default QtyPicker;