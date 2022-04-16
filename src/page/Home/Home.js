import React from 'react'
import BasicLayout from '../../layout/BasicLayout';

import "./Home.scss";

export default function Home(props) {
  const { setrefreshCheckLogin } = props;
  //console.log(props)
  return (
    <BasicLayout className="home" setrefreshCheckLogin={setrefreshCheckLogin}>
      <div>Estamos en Home</div>
    </BasicLayout>
  )
}
