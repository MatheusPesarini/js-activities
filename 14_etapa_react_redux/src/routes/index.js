import React, {useEffect} from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Register from '../pages/Register';
import Fotos from '../pages/Fotos';
import Page404 from '../pages/Page404';

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path='/' component={Alunos} isClosed={false}/>
            <MyRoute exact path='/aluno/:id/edit' component={Aluno} isClosed />
            <MyRoute exact path='/aluno/' component={Alunos} isClosed />
            <MyRoute exact path='/fotos/:id' component={Alunos} isClosed />
            <MyRoute exact path='/login/' component={Alunos} isClosed={false} />
            <MyRoute exact path='/register/' component={Register} isClosed={false} />
            <MyRoute path='*' component={Page404} />
        </Switch>
    );
};