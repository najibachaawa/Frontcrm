import React from 'react';
import moment from 'moment';
import './Message.css';

export default function Message(props) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp,
      image
    } = props;

    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (
      <div className={[
        'message',
        image,
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
        <img src= { data.image } style= { {borderRadius:"50%",width:"30px" }}/>
          <div className="bubble" title={friendlyTimestamp}>
         
            { data.message }
           
         
          </div>
        </div>
      </div>
    );
}