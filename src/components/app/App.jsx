import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/characters/:id" component={CharacterDetails} />
      </Switch>
    </BrowserRouter>
  );
}
