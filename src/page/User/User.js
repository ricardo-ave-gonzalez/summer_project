import React, { useState, useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify';
import BasicLayout from '../../layout/BasicLayout'
import {
  //useLocation,
  //useNavigate,
  useParams
} from "react-router-dom";
import { obtenerUserApi } from '../../api/user';

import './User.scss'
//nueva rama test feature
//en proceso la subida de archivo en back de node para los avatar
function User(props) {
  //console.log(props.router.params.id)
  const { router } = props;
  const [user, setUser] = useState(null);
  const { params } = router;

  useEffect(() => {
    obtenerUserApi(params.id)
    .then(z => {
      //console.log(z)
      if(!z) toast.error('el usuario no existe')
      setUser(z);
    })
    .catch(() => toast.error('el usuario no existe'))
  }, [params])


  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          {user ? `${user.nombre}` : "El usuario no existe"}
        </h2>
      </div>
      <div>Banner usuario</div>
      <div>info user..</div>
      <div className="user__tweets">lista de tweets..</div>
    </BasicLayout>
  )
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    //let location = useLocation();
    //let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        //router={{ location, navigate, params }}
        router={{ params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter(User);