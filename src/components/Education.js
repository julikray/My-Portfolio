import React from 'react'
import './Education.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function Education() {
  return (
    <div className='education'>
      <h1 className='animate__animated animate__bounceIn'>My Education </h1>
      <hr />
      <VerticalTimeline lineColor='#000'>
        <VerticalTimelineElement
          className='verticalelement custom-dialog-bar'
          iconStyle={{
            background: '#000',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
          }}
          date='2022-present'
          icon={<img src='https://panoskin.s3.us-east-2.amazonaws.com/SVE/59c8b621cc94dd7a54b876ae/themes/5f1aef0682139e27dd2272c3/logo/d1f968b3-eb4a-42f1-aa45-a70e53f957d4.png' alt='mujlogo' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />}
        >
          <h3>Manipal University Jaipur</h3>
          <p>I am pursuing BCA at Manipal University.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verticalelement'
          iconStyle={{
            background: '#000',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
          }}
          date='2020-2022'
          icon={<img src='https://i.ytimg.com/vi/m3GO7arAh10/hqdefault.jpg' alt='HTML5 Icon' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />}
        >
          <h3>Satyendra narayan singh college </h3>
          <p>I have completed my 12th grade from Satyendra Narayan Singh College.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='verticalelement'
          iconStyle={{
            background: '#000',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
          }}
          date='2015-2020'
          icon={<img src='https://studybihar.in/wp-content/uploads/2019/01/guru-vashishtha.jpg' alt='gvv' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />}
        >
          <h3>Guru Vashistha Vidyayan </h3>
          <p>I studied from 6th to 10th grade at Guru Vashistha Vidyayan. I completed my 10th grade and graduated from Guru Vashistha Vidyayan </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='verticalelement'
          iconStyle={{
            background: '#000',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
          }}
          date='Since childhood'
          icon={<img src='https://scontent.fixr3-2.fna.fbcdn.net/v/t39.30808-6/360087706_737366985065924_5064781871558585938_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=7yhdRlW6w9wAX8opmsY&_nc_ht=scontent.fixr3-2.fna&oh=00_AfCuK1xUX678M5ylRZKI0cNviU6wdGhTGXbkOBooukUobA&oe=64FCBA45' alt='HTML5 Icon' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />}
        >
          <h3>St. Lawrence School</h3>
          <p>I studied at St. Lawrence School up to 6th grade. It was my first school during my childhood</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education;